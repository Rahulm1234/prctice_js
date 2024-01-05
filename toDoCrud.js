// // fetching an element


// const tableBody = document.getElementById("tableBody")
// // Function to add data
// function addData() {
//   const inputName = document.getElementById("taskInput").value;
// const inputAge = document.getElementById("taskInput2").value;
//   console.log(inputName,"inputName");
//   const name = inputName.innerText;
//   const age = inputAge.value;
// debugger
//   if (name && age) {
//     const row = tableBody.insertRow();
//     const cell1 = row.insertCell(0);
//     const cell2 = row.insertCell(1);
//     const cell3 = row.insertCell(2);
//     cell1.innerHTML = name;
//   }
 
//   else {
//     alert('Please enter both name and age.');
//   }
// }

// // cell1.innerHTML = name;
// //     cell2.innerHTML = age;
    
    
// //     nameInput.value = '';
// //     ageInput.value = '';

// // Selecting elements
// const nameInput = document.getElementById('nameInput');
// const ageInput = document.getElementById('ageInput');
// const tableBody = document.getElementById('tableBody');

// // Function to add data
// function addData() {
//   const name = nameInput.value;
//   const age = ageInput.value;

//   if (name && age) {
//     const row = tableBody.insertRow();
//     const cell1 = row.insertCell(0);
//     const cell2 = row.insertCell(1);
//     const cell3 = row.insertCell(2);

//     cell1.innerHTML = name;
//     cell2.innerHTML = age;
//     cell3.innerHTML = `<button onclick="editRow(this)">Edit</button> 
//                       <button onclick="deleteRow(this)">Delete</button>`;

//     nameInput.value = '';
//     ageInput.value = '';
//   } else {
//     alert('Please enter both name and age.');
//   }
// }

// // Function to edit row
// function editRow(button) {
//   const row = button.parentNode.parentNode;
//   const cells = row.getElementsByTagName('td');

//   const name = cells[0].innerText;
//   const age = cells[1].innerText;

//   nameInput.value = name;
//   ageInput.value = age;

//   tableBody.removeChild(row);
// }

// // Function to delete row
// function deleteRow(button) {
//   const row = button.parentNode.parentNode;
//   tableBody.removeChild(row);
// }




