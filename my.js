const content = document.getElementById("content");
const button = document.getElementById("submit");
const select = document.querySelector("select");

let color = ""

const enabled = onchange;

 select.addEventListener('change' ,  function() {
    color = this.value 
   
    button.classList.remove('disabled')
    if (this.value.length == 0) {
        button.classList.add('disabled')
    }

 });



 button.onclick = function() {
    content.classList.add(color)
 
};





    
