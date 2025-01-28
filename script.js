const inputArea=document.querySelector('.inputArea');
const container=document.querySelector('#task');

function addTask(){
    if(inputArea.value==""){
        alert("Please Enter Task");
    }
    else{
        let li=document.createElement('li');
        li.innerHTML=inputArea.value;
        container.appendChild(li);
        li.addEventListener('click',function(){
            li.remove();
        })
    }
    inputArea.value="";
}

