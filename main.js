// setting up variables
let theInput = document.querySelector('.add-task input'),

    theAddButton = document.querySelector('.add-task .plus'),

    tasksContainer = document.querySelector('.tasks-content'),

    tasksCount = document.querySelector('.task-count span'),

    tasksCompleted = document.querySelector('.completed-tasks span');
//focus on input field when the page loaded
window.onload = function () {

    theInput.focus();
};
// Adding a task
theAddButton.onclick = function(){
    if(theInput.value === '')
    {
        console.log('no Value');
    }else{

        noTasksMsg = document.querySelector('.no-tasks-message');

        if(document.body.contains(document.querySelector('.no-tasks-message')))
        {
            //remove no tasks message
            noTasksMsg.remove();
        }

        //create span element
        let mainSpan = document.createElement('span');

        //create Delete Button
        let deleteElement = document.createElement('span');

        // create the MAin Span text
        let text = document.createTextNode(theInput.value);

        // create the Delete Button text
        let deleteText = document.createTextNode('Delete');

        //add text to span
        mainSpan.appendChild(text);

        // add class to span
        mainSpan.className = 'task-box';

        // add text to Delete Button
        deleteElement.appendChild(deleteText);

        //add class to Delete Button
        deleteElement.className='delete';

        // add Delete Button to span
        mainSpan.appendChild(deleteElement);

        //add the task to the task container
        tasksContainer.appendChild(mainSpan);

        // empty the input field
        theInput.value = '';

        // return the focus to the input field
        theInput.focus();
        CalcTasks();
    }
}
document.addEventListener('click', function(e){

    if(e.target.className == 'delete')
    {
        // remove this task
        e.target.parentNode.remove();
        if(tasksContainer.childElementCount == 0)
        {
            createNoTasksMsg();
        }
    }
    if(e.target.classList.contains('task-box'))
    {
        // remove this task
        e.target.classList.toggle('finished');
    }
    CalcTasks();
});

function CalcTasks(){

    tasksCount.innerHTML = document.querySelectorAll('.tasks-content .task-box').length;

    tasksCompleted.innerHTML = document.querySelectorAll('.tasks-content .task-box.finished').length;
}
function createNoTasksMsg(){

    //craete message span element
    let msgSpan = document.createElement('span');

    //create the text message
    let msgText = document.createTextNode('No Tasks To Show');

    //add text to message span element
    msgSpan.appendChild(msgText);

    //add class to message span
    msgSpan.className='no-tasks-message';

    // append the message span to the task container
    tasksContainer.appendChild(msgSpan);
}