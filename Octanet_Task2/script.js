const input=document.querySelector('#Task');

document.querySelector('#add_button').addEventListener('click',() => {
    const newTask=input.value;
    input.value="";

    const todo_container=document.createElement('div');
    todo_container.classList.add('todo_item');

    const todo_text=document.createElement('input');
    todo_text.classList.add('text');
    todo_text.type='text';
    todo_text.value=newTask;
    todo_text.setAttribute('readonly','readonly');

    const todo_content=document.createElement('div');
    todo_container.appendChild(todo_content);
    todo_content.appendChild(todo_text);

    const todo_action= document.createElement('div');
    todo_action.classList.add('actions');

    const todo_edit=document.createElement('button');
    todo_edit.classList.add('edit');
    let edit_name=document.createTextNode("EDIT");
    todo_edit.appendChild(edit_name);

    const todo_delete=document.createElement('button');
    todo_delete.classList.add('delete');
    let delete_name=document.createTextNode("REMOVE");
    todo_delete.appendChild(delete_name);

    todo_action.appendChild(todo_edit);
    todo_action.appendChild(todo_delete);

    todo_container.appendChild(todo_action);
    console.log(todo_container);

    document.querySelector('.task-list').appendChild(todo_container);

    //edit button
    todo_edit.addEventListener('click',(e) =>{
        if(todo_edit.classList.contains("edit")){
            todo_edit.classList.remove("edit");
            todo_edit.classList.add("save");
            todo_text.removeAttribute("readonly");
            todo_text.focus();
        }
        else{
            todo_edit.classList.remove("save");
            todo_edit.classList.add("edit");
            todo_text.setAttribute("readonly","readonly");
        }

        
    });

    //delete button
    todo_delete.addEventListener('click',(e) =>{
        console.log(todo_container);
        document.querySelector('.task-list').removeChild(todo_container);
    });
})