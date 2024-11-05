var input = document.getElementById("todo-inp")
var parent = document.getElementById("parent")

function addTodo() {

    var ul = document.createElement("ul")
    ul.innerHTML = `<li> ${input.value}
                     <div class= "btns"><button class="btnEdit" onclick="editTodo(this)" >edit</button><button class="btnDelete" onclick="deleteTodo(this)">delete</button></div>
                </li>`
                if (input.value == "") {
                    alert("required fields are missing")
                    return
                }
               
    parent.appendChild(ul)
    
}

var editTodo = (elem) => {
    var editValue = elem.parentNode.parentNode.firstChild.nodeValue
    var newValue = prompt('Enter New Value', editValue);
    elem.parentNode.parentNode.firstChild.nodeValue = newValue
}

var deleteTodo = (elem) => {
     elem.parentNode.parentNode.remove()
}


