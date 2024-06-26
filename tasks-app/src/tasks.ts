const taskForm = document.querySelector<HTMLFormElement>('.form');
const formInput = document.querySelector<HTMLInputElement>('.form-input');

const taskListElement = document.
querySelector<HTMLUListElement>('.list');

type Task = {
    description: string;
    isCompleted: boolean;
};

const tasks:Task[] =  loadTasks();

tasks.forEach(renderTask);


function loadTasks(): Task[]{
    const storedTasks = localStorage.getItem('tasks')
    return storedTasks? JSON.parse(storedTasks):[]
}


taskForm?.addEventListener('submit',(event)=>{
    event.preventDefault()
    const taskDescription = formInput?.value;
    if(taskDescription){
        const task: Task = {
            description: taskDescription,
            isCompleted: false,
        };
        // add task to list
        addTask(task);
        // view tasks 
        renderTask(task);
        //update localstorate
        updateStorage();

        formInput.value = '';
        return;
    }
})

function addTask(task: Task): void {
    tasks.push(task);
    console.log(tasks);
    
}

function renderTask(task: Task): void{
    const taskElement = document.createElement('li')
    taskElement.textContent = task.description
    taskListElement?.appendChild(taskElement);
}

function updateStorage(): void{
    localStorage.setItem('tasks', JSON.stringify(tasks))
}