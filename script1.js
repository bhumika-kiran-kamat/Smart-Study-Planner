

document.addEventListener('DOMContentLoaded',()=>{
    const saveNoteBtn = document.getElementById("saveNoteBtn");
    const addTestBtn = document.getElementById("addTestBtn");
    const addTaskBtn = document.getElementById("addTaskBtn"); 
    const notesInput = document.getElementById("notesInput");
    const notesList = document.getElementById("notesList");
    const testDate = document.getElementById("testDate");
    const testSubject = document.getElementById("testSubject");
    const testTime = document.getElementById("testTime");
    const testSyllabus = document.getElementById("testSyllabus");
    const testCards = document.getElementById("testCards");
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");
    const notes = document.getElementById("notes");
    const testSchedule = document.getElementById("testSchedule");
    const task = document.getElementById("task");
    const first = document.getElementById("first");
    const second = document.getElementById("second");
    const third=document.getElementById("third");
    
    
    let Notes=JSON.parse(localStorage.getItem("task1")) || []
    let TestSchedule=JSON.parse(localStorage.getItem("task2")) || []
    let TaskList=JSON.parse(localStorage.getItem("task3")) || []
    Notes.forEach(task1 =>   renderNotes(task1));
    TestSchedule.forEach(task2=>renderTestSchedule(task2));
    TaskList.forEach(task3=>renderTask(task3));
    
    notes.addEventListener("click", () => {
      first.classList.toggle("hidden");
      
    });


    function renderNotes(task1){
    
    const div=document.createElement('div');
    div.setAttribute('id',task1.id)
    div.innerHTML = `<span class="font-medium break-all mb-4 block task1Text" >${task1.text}</span>
    <div class="flex justify-between mt-4">
    <button class=" bg-blue-500 text-white  rounded hover:bg-blue-600 transition w-15 deleteBtn">Delete</button>\
    <button class=" bg-blue-500 text-white  rounded hover:bg-blue-600 transition w-15 editBtn1">Edit</button>
    </div>`;
    notesList.appendChild(div);
    div.className =
      "bg-gradient-to-r from-blue-200 to-blue-400 p-6 rounded-lg shadow-lg hover:scale-105 transition  border border-transparent hover:border-blue-700  grid grid-cols-1 mb-7";
    
    div.querySelector('.deleteBtn').addEventListener('click',()=>{
      Notes=Notes.filter(t=>t.id !== task1.id);
      div.remove();
      saveTasks1();
    })
    
    div.querySelector(".editBtn1").addEventListener("click",(e)=>{
      const edit=e.target;
      edit.disabled=true;
      const noteText=div.querySelector('.task1Text')
      const input=document.createElement("input");
      input.type="text";
      input.value=task1.text;
      input.classList.add("outline-none");
      input.focus();
      const saveBtn=document.createElement("button");
      saveBtn.textContent="Save"
      saveBtn.className =" bg-blue-500 text-white  rounded transition w-full block mt-6 addSave";
      
     
      div.replaceChild(input,noteText);
      
      div.appendChild(saveBtn);

     
     
      saveBtn.addEventListener("click",()=>{
        task1.text=input.value;
        noteText.textContent = input.value;
        div.replaceChild(noteText,input);
        saveBtn.classList.remove("bg-blue-500");
        saveBtn.classList.add("bg-green-400");
        saveBtn.classList.add("transition-all","duration-500");
       
        setTimeout(() => {
          saveBtn.remove();
        },600);
       
       
        const index = Notes.findIndex((t) => t.id === task1.id);
        if (index!=-1) Notes[index].text = task1.text; 
        edit.disabled=false;
        saveTasks1();
      })
      
      
    })
    
    }
   
    saveNoteBtn.addEventListener("click",(e)=>{
      e.preventDefault();
     if (notesInput.value.trim() === "") return;

     const descriptionInput = notesInput.value.trim();
     const newTask = {
       id: Date.now(),
       text: descriptionInput,
     };
     Notes.push(newTask);
     renderNotes(newTask);
     saveTasks1();
    notesInput.value = "";
  
    })

    function saveTasks1(){
      localStorage.setItem("task1",JSON.stringify(Notes));
      
      
    }

    testSchedule.addEventListener('click',()=>{
      second.classList.toggle('hidden');

    })
    addTestBtn.addEventListener('click',(e)=>{
      e.preventDefault();
      if (testSubject.value.trim()==="") return;
      const subjectInput=testSubject.value.trim();
      const syllabusInput=testSyllabus.value.trim();
      const newTask={
        id:Date.now(),
        text1:testDate.value,
        text2:testTime.value,
        text3:subjectInput,
        text4:syllabusInput,
        
      }
      TestSchedule.push(newTask);
      renderTestSchedule(newTask);
      saveTasks2();
      testDate.value = "";
      testSubject.value = "";
      testTime.value = "";
      testSyllabus.value = "";
    })
    function renderTestSchedule(task2){

      const div=document.createElement('div');
      div.setAttribute('id',task2.id);
      div.innerHTML = `<span class="font-medium break-all w-full mb-4 block">${task2.text1 ? `🗓️${task2.text1.split("-").reverse().join("-")}` :""}</span>
      <span class="font-medium break-all mb-4 block">${task2.text2? `🕒${task2.text2}` :""}<\span>
      <span class="font-medium break-all mb-4 block">${task2.text3}<\span>
      <span class="font-medium break-all mb-4 block">${task2.text4}<\span>
      <button class=" bg-blue-500 text-white  rounded hover:bg-blue-600 transition w-full">Delete</button>`;
      testCards.appendChild(div);
      div.className =
        "bg-gradient-to-r from-blue-200 to-blue-400 p-6 rounded-lg shadow-lg hover:scale-105 transition  border border-transparent hover:border-blue-700  flex flex-col  mb-7";
       
       div.querySelector('button').addEventListener('click',()=>{
       TestSchedule=TestSchedule.filter(t=>t.id !== task2.id);
       div.remove();
       saveTasks2();
       })
    }
    function saveTasks2(){
      localStorage.setItem("task2", JSON.stringify(TestSchedule));
    }

    task.addEventListener("click",()=>{
      third.classList.toggle("hidden");
    })
    addTaskBtn.addEventListener("click",(e)=>{
      e.preventDefault();
       if(taskInput.value.trim()==="") return;
       const textInput=taskInput.value.trim();
       newTask={
        id:Date.now(),
        text:textInput,
        checked:false,
       }
       TaskList.push(newTask)
       renderTask(newTask);
       saveTasks3();
       taskInput.value="";
    })
    function renderTask(task3){
      const div=document.createElement("div");
      div.setAttribute('id',task3.id);
      div.innerHTML = `<div class="flex flex-cols-2 justify-between">
      <span class="font-medium break-all  mb-4 ">${task3.text}</span>
      <input type="checkbox" class="w-5 h-5 rounded accent-green-400 check " ${task3.checked ? "checked":""}/>
      </div>
      <button class=" bg-blue-500 text-white  rounded hover:bg-blue-600 transition w-full">Delete</button>
      `;
      taskList.appendChild(div);
      div.className =
        "bg-gradient-to-r from-blue-200 to-blue-400 p-6 rounded-lg shadow-lg hover:scale-105 transition  border border-transparent hover:border-blue-700  flex flex-col  mb-7";
        div.querySelector('button').addEventListener("click",()=>{
        TaskList=TaskList.filter(t=>t.id!==task3.id);
        div.remove();  
        saveTasks3();
        })
      div.querySelector("input").addEventListener("change", (e) => {
          const check = e.target;
          
          const index=TaskList.findIndex((t)=>t.id===Number(div.getAttribute("id")));
          if(index>=0){
            TaskList[index].checked=check.checked;
            saveTasks3();
          }
          
      });  
       
    }

  function saveTasks3(){
    localStorage.setItem("task3",JSON.stringify(TaskList));
  }
})