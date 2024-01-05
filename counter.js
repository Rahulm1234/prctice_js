//selecting ids from html

const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const counterLabel1 = document.getElementById("countLable1");
 let count=0;

 increaseBtn.onclick=function(){
    count++;
    counterLabel1.textContent = count;
 }

 resetBtn.onclick=function(){
    count = 0;
    counterLabel1.textContent = count;
 }

 decreaseBtn.onclick=function(){
    while (count > 0) {
        // console.log(count);
        count--;
    }
    counterLabel1.textContent = count;
 }