// Buttons
let post = document.getElementById("postBtn");
let clear = document.getElementById("clearBtn");
let mark = document.getElementById("markBtn");
let del = document.getElementById("deleteBtn");

// Event Listeners
post.addEventListener("click", postToDo);
clear.addEventListener("click", clearToDo);
mark.addEventListener("click", markToDo);
del.addEventListener("click", deleteToDo);

// Functions
function postToDo(e){
    e.preventDefault();

    var todo = document.getElementById("todoText").value;
    var list = document.getElementById("todoList");

    let currentListHTML = list.innerHTML;
    list.innerHTML = currentListHTML + '<input type="checkbox" name="todo"/>&nbsp;' + todo + '<br>';
}

function clearToDo(e){
    e.preventDefault();
    
    var todos = document.getElementsByName("todo");
    for(var i = 0; i < todos.length; i++){
        todos[i].checked = false;
    }
}

function markToDo(e){
    e.preventDefault();

    var todos = document.getElementsByName("todo");
    for(var i = 0; i < todos.length; i++){
        todos[i].checked = true;
    }
}

function deleteToDo(e){
    e.preventDefault();

    var list = document.getElementById("todoList");
    list.innerHTML = "";    
}