// function for adding task

// declare variable along with value>target dom> target id 
// Get and trim the task input; keeps tight, no extra space on ends    

// Check input is not empty

// Create new list item for the task

// Set the text of the list item

// define/declare the delete button

// Remove task from list when clicked

// Button text

// Add delete button with list item
// Add list item to task list
// Clear the input field after adding the task


function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    const taskValue = taskInput.value.trim();
  
    if (taskValue !== "") {
      const listItem = document.createElement('li');
      listItem.textContent = taskValue;
  
  
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'BOOM, done';
      deleteButton.onclick = function () {
        taskList.removeChild(listItem);
      }
  
  
      listItem.appendChild(deleteButton);
  
  
      taskList.appendChild(listItem);
  
      taskInput.value = '';
    }
  }
  