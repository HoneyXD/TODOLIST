function addTask() {
  var taskInput = document.getElementById("taskInput");
  var taskList = document.getElementById("taskList");

  if (taskInput.value === "") {
    alert("Please enter a task");
    return;
  }

  var task = document.createElement("li");
  task.innerText = taskInput.value;
  taskList.appendChild(task);

  taskInput.value = "";

  var switchButton = document.createElement("div");
  switchButton.className = "switch";
  switchButton.addEventListener("click", function(event) {
    event.stopPropagation();
    task.classList.toggle("done");
    switchButton.classList.toggle("on");
  });
  task.appendChild(switchButton);

  task.addEventListener("mouseover", function() {
    task.style.backgroundColor = "#BF0A30";
  });
  
  task.addEventListener("mouseout", function() {
    task.style.backgroundColor = "#484848";
  });

  task.addEventListener("click", function() {
    taskList.removeChild(task);
  });
}
