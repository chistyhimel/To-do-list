const tasKInput = document.getElementById("task-input");
const taskSubmitBtn = document.getElementById("submit-btn");
const taskClearBtn = document.getElementById("clear-btn");
const listItems = document.querySelector('ul.list-group');

loadEventListener();

function loadEventListener() {
  taskSubmitBtn.addEventListener("click", addItem);
  listItems.addEventListener("click",removeItem);
  taskClearBtn.addEventListener('click',removeAllItems);
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
    tasKInput.value='';
  }
}

function removeItem(e){
    if(e.target.parentElement.classList.contains('remove-item')){
        e.target.parentElement.parentElement.remove();
    }
}

function removeAllItems(e){
    listItems.innerHTML='';
}