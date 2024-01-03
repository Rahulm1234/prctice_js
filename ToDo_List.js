var myNodelist = document.getElementsByTagName("LI");
// var i;
for (let i = 0; i < myNodelist.length; i++) {
  const span = document.createElement("SPAN");
  const txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

const close = document.getElementsByClassName("close");
// var i;
close.forEach((element) => {
  Element.onclick = function() {
    const div = this.parentElement;
    div.style.display = "none";
  };
});

const list = document.querySelector('ul');
list.addEventListener('click',(ev)=> {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

function newElement() {
    const li = document.createElement("li");
    const inputValue = document.getElementById("myInput").value;
    const t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("You must write something!");
    } else {
      document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";
  
    const span = document.createElement("SPAN");
    const txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
  
    const close =document.querySelectorAll(".close");
    close.forEach((element)=>{
      element.onclick = function() {
        const div = this.parentElement;
        div.style.display = "none";
      }
    });
  }
  