function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');
  const removeToDoText = document.getElementById('removeToDoText');

    addToDoForm.addEventListener('submit', () => {
    event.preventDefault();

    //get the text
    let title = newToDoText.value;

    //create a new li
    let newLi = document.createElement('li');

    //create a new input
    let checkbox = document.createElement('input');

    //set the input's type to checkbox
    checkbox.type = "checkbox";

    //set the title
    newLi.textContent = title;

    //attach the checkbox to the li
    newLi.appendChild(checkbox);

    //attach the li to the ul
    toDoList.appendChild(newLi);

    //empty the input
    newToDoText.value = '';

    //make existing delete button work

    // removeToDoText.addEventListener('click', () => {
    // if (checkbox.checked === true) {
    //   newLi.parentNode.removeChild(newLi);

    // else if (checkbox.checked === false){
    // return (newLi)

    removeToDoText.addEventListener('click', () => {
    if (checkbox.checked === true) {
      toDoList.removeChild(newLi);

    }
    })

    //if to-do field is empty, don't submit?? See if possible to do next meeting


    //the code to append delete button to each newLi

    // button.addEventListener('click', function(event){
    // toDoList.removeChild(this.parentElement);
    // })
    //
    // newLi.appendChild(button);

 });

}

window.onload = function() {
  onReady();
};
