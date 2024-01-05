// fetching an element


const tableBody = document.getElementById("tableBody")
// Function to add data
function addData() {
  const inputName = document.getElementById("taskInput").value;
const inputAge = document.getElementById("taskInput2").value;
  console.log(inputName,"inputName");
  const name = inputName.innerText;
  const age = inputAge.value;
debugger
  if (name && age) {
    const row = tableBody.insertRow();
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    cell1.innerHTML = name;
  }
 
  else {
    alert('Please enter both name and age.');
  }
}

// cell1.innerHTML = name;
//     cell2.innerHTML = age;
    
    
//     nameInput.value = '';
//     ageInput.value = '';