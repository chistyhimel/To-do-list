const tasKInput = document.getElementById("task-input");
const taskSubmitBtn = document.getElementById("submit-btn");
const taskClearBtn = document.getElementById("clear-btn");
const listItems = document.querySelector('ul.list-group');

loadEventListener();

function loadEventListener() {
    document.addEventListener('DOMContentLoaded',getTasks)
  taskSubmitBtn.addEventListener("click", addItem);
  listItems.addEventListener("click",removeItem);
  taskClearBtn.addEventListener('click',removeAllItems);
}
function getTasks(){
    let tasks;
    if(localStorage.getItem('tasks')===null){
        tasks=[];
    }else{
        tasks=JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(function(task){
        const div = document.createElement("div");
        div.appendChild(document.createTextNode(task));
        const div2 = document.createElement("div");
        div2.className ='remove-item';
        div2.innerHTML = '<i class="fas fa-times"></i>';
        const li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between";
        li.appendChild(div);
        li.appendChild(div2);
        document.querySelector("ul.list-group").appendChild(li);
    })
}

function addItem(e) {
  if (tasKInput.value==='') {
    alert("Enter you Task");
  } else {
    const div = document.createElement("div");
    div.appendChild(document.createTextNode(tasKInput.value));
    const div2 = document.createElement("div");
    div2.className ='remove-item';
    div2.innerHTML = '<i class="fas fa-times"></i>';
    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between";
    li.appendChild(div);
    li.appendChild(div2);
    document.querySelector("ul.list-group").appendChild(li);
    storeTaskInLocalStorage(tasKInput.value);
    tasKInput.value='';
  }
}

function storeTaskInLocalStorage(task){
    let tasks;
    if(localStorage.getItem('tasks')===null){
        tasks=[];
    }else{
        tasks=JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);
    localStorage.setItem('tasks',JSON.stringify(tasks));
}

function removeItem(e){
    if(e.target.parentElement.classList.contains('remove-item')){
        e.target.parentElement.parentElement.remove();
        removeTaskFromLocalStorage(e.target.parentElement.parentElement);
    }
}

function removeTaskFromLocalStorage(taskItem){
    let tasks;
    if(localStorage.getItem('tasks')===null){
        tasks=[];
    }else{
        tasks=JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(function(task,index){
        if(taskItem.textContent===task){
            tasks.splice(index,1);
        }
    });
    localStorage.setItem('tasks',JSON.stringify(tasks));
}

function removeAllItems(e){
    listItems.innerHTML='';
    clearTasksFromLocalStorage();
}
function clearTasksFromLocalStorage(){
    localStorage.clear();
}