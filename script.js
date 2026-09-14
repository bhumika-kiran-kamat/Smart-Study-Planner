document.addEventListener('DOMContentLoaded',()=>{
  const getStartedBtn = document.getElementById("getStartedBtn");
  const showQuotes = document.getElementById("quotes");
const quote = ["Discipline is the bridge between goals and achievement.",

"Study hard, stay humble.",

"Small progress each day adds up to big results.",

"Success doesn’t come from what you do occasionally, it comes from what you do consistently.",

"Don’t watch the clock; do what it does — keep going.", 

"The secret of getting ahead is getting started." ,

"Push yourself, because no one else is going to do it for you.",

"Dreams don’t work unless you do.",

"Education is the most powerful weapon which you can use to change the world." ,

"Your future is created by what you do today, not tomorrow."]
let currentIndex=0
Nextquote();
function Nextquote(){

        
    if (currentIndex<quote.length) {
        setTimeout(() => {
            showQuotes.textContent=quote[currentIndex];
            setTimeout(() => { 
                showQuotes.style.opacity="0";
                showQuotes.style.transition="opacity 2s ease-in-out";
            }, 2000);
            currentIndex++;
            showQuotes.style.opacity = "1";
            Nextquote();
        }, 3000);
        
      
    } 
    else{
        currentIndex=0;
        Nextquote();
    }
    
}
getStartedBtn.addEventListener("click",()=>{
     location.href="dashboard.html";
})

});





   
  
 

