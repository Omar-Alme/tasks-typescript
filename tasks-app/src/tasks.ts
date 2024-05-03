const taskForm = document.querySelector<HTMLFormElement>('.form');
const formInput = document.querySelector<HTMLInputElement>('.form-input');

const taskListElement = document.
querySelector<HTMLUListElement>('.list');

type Task = {
    description: string;
    isCompleted: boolean;
};

const tasks:Task[] =  [];


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
        //update localstorate
        formInput.value = '';
        return;
    }
})

function addTask(task: Task): void {
    tasks.push(task);
    console.log(tasks);
    
}