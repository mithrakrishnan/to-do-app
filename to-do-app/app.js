function onReady() {
  let id = 0;

  let toDos = [];

  const addToDoForm = document.getElementById("addToDoForm");
  const newToDoText = document.getElementById("newToDoText");
  const toDoList = document.getElementById("toDoList");

  function createNewToDo() {
    if (!newToDoText.value) { return; }
  toDos.push({
    title: newToDoText.value,
    complete: false,
    id: id
  })
  id++;
  }

  function deleteToDo(id) {
    toDos = toDos.filter(item => item.id !== id);
    renderTheUI();
  };

  function renderTheUI(){
      toDoList.textContent = "";

    toDos.forEach(function(toDo) {
    const newToDo = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const title = document.createElement("span");
    title.textContent = toDo.title;

    newToDo.appendChild(title);

    toDoList.appendChild(newToDo);
    newToDo.appendChild(checkbox);

    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "delete";

    deleteButton.addEventListener("click", event => {
      event.preventDefault();
      deleteToDo(toDo.id);
      renderTheUI();

    });
    newToDo.appendChild(deleteButton);
  });
  }

  addToDoForm.addEventListener("submit", event => {
    event.preventDefault();
    createNewToDo();
    newToDoText.value = "";
    renderTheUI();
  });

  renderTheUI();
}

window.onload = function() {
  onReady();
};
