// Function to add an item to the list
function addItem() {
    const name = document.getElementById('nameInput').value;
    const age = document.getElementById('ageInput').value;
  
    if (name.trim() === '' || age.trim() === '') {
      alert('Please enter both name and age.');
      return;
    }
  
    const todoList = document.getElementById('todoList');
    const li = document.createElement('li');
    li.innerHTML = `${name},  ${age} <button onclick="editItem(this)">Edit</button> <button onclick="deleteItem(this)">Delete</button>`;
    todoList.appendChild(li);
  
    // Clear input fields
    document.getElementById('nameInput').value = '';
    document.getElementById('ageInput').value = '';
  }
  
  // Function to edit an item in the list
  function editItem(element) {
    const li = element.parentNode;
    const text = li.firstChild.textContent.split(',  ');
    const name = text[0];
    const age = text[1];
  
    const newName = prompt('Edit name:', name);
    const newAge = prompt('Edit age:', age);
  
    if (newName !== null && newAge !== null) {
      li.firstChild.textContent = `${newName},  ${newAge}`;
    }
  }
  
  // Function to delete an item from the list
  function deleteItem(element) {
    const li = element.parentNode;
    li.remove();
  }
  