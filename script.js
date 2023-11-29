document.addEventListener('DOMContentLoaded', () => {
    const taskList = document.getElementById('taskList');
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
  
    displayTasks();
  
    addTaskBtn.addEventListener('click', addTask);
  
    function displayTasks() {
      taskList.innerHTML = '';
      let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
      tasks.forEach((task, index) => {
        const row = `<tr>
          <td>${index + 1}</td>
          <td>${task}</td>
          <td>
            <button class="editBtn">Editar</button>
            <button class="deleteBtn">Eliminar</button>
          </td>
        </tr>`;
        taskList.innerHTML += row;
      });
  

      const editButtons = document.querySelectorAll('.editBtn');
      const deleteButtons = document.querySelectorAll('.deleteBtn');
  
      editButtons.forEach((button, index) => {
        button.addEventListener('click', () => editTask(index));
      });
  
      deleteButtons.forEach((button, index) => {
        button.addEventListener('click', () => deleteTask(index));
      });
    }
  
    function addTask() {
      const taskValue = taskInput.value.trim();
      if (taskValue !== '') {
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.push(taskValue);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        displayTasks();
        taskInput.value = '';
      } else {
        alert('Por favor ingrese una tarea válida.');
      }
    }
  
    function editTask(index) {
      let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
      const newTask = prompt('Editar tarea:', tasks[index]);
      if (newTask !== null) {
        tasks[index] = newTask.trim();
        localStorage.setItem('tasks', JSON.stringify(tasks));
        displayTasks();
      }
    }
  
    function deleteTask(index) {
      let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
      tasks.splice(index, 1);
      localStorage.setItem('tasks', JSON.stringify(tasks));
      displayTasks();
    }
  });
  
