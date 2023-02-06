window.addEventListener('load',() => {
    const form = document.querySelector('#new-task-form')
    const input = document.querySelector('#new-task-input')
    const elementList = document.querySelector('#tasks')
    console.log(elementList)

    form.addEventListener('submit',(e) => {
        e.preventDefault();

        const task = input.value;
        console.log(task)
        if(!task){
            alert("Please fill out the task")
            return;
        }
        const taskElement = document.createElement('div')
        taskElement.classList.add('task')
        //console.log(taskElement)

        const taskContentElement = document.createElement('div')
        taskContentElement.classList.add('content')
        taskContentElement.innerText = task

        taskElement.appendChild(taskContentElement);
        //console.log(taskElement)

        const taskInputElwment = document.createElement("input");
        taskInputElwement.classList.add("text");
        taskContentElement.type = 'text';
        taskContentElement.value = task;
        taskContentElement.setAttribute("readonly", "readonly")
        console.log(taskInputElwement)

        taskContentElement.appendChild(taskInputElwement)
        console.log(taskContentElement)

        const taskActionElement = document.createElement('div')
        taskActionElement.classList.add('actions')

        const taskEditElement = document.createElement("button")
        taskEditElement.classList.add('edit')
        taskEditElement.innerHTML = "Edit"
        console.log(taskEditElement)

        const taskDeleteElement = document.createElement('button')
        taskDeleteElement.classList.add('delete')
        taskDeleteElement.innerHTML = "Delete"

        taskActionElement.appendChild(taskEditElement)
        console.log(taskContentElement)
        taskActionElement.appendChild(taskDeleteElement)

        taskElement.appendChild(taskActionElement)

        elementList.appendChild(taskElement)
        console.log(elementList)

        input.value = ""

        taskEditElement.addEventListener('click', (e) => {
           if (taskEditElement.innerText.toLowerCase == "edit") {
                taskEditElement.innerText = "Save"
                taskInputElwement.removeAttribute("readonly")
                taskInputElwement.focus()
           } else {
                taskInputElwement.setAttribute("readonly", "readonly")
                taskEditElement.innerText = "Edit"

           }
        })
        taskDeleteElement.addEventListener('click', (e) => {
            elementList.removeChild(taskElement);
        })
    })
})