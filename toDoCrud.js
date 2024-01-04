// fetching an element

const inputName = document.getElementById("taskInput");
const inputAge = document.getElementById("taskInput2");
const tableBody = document.getElementById("tableBody")

// Function to add data
function addData() {
  const name = nameInput.value;
  const age = ageInput.value;

  if (name && age) {
    const row = tableBody.insertRow();
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
  }
 
  else {
    alert('Please enter both name and age.');
  }
}

cell1.innerHTML = name;
    cell2.innerHTML = age;
    
    
    nameInput.value = '';
    ageInput.value = '';