let firstbox, secondbox, thirdbox, btn1, btn2, btn3, btnall, allcolors;

allcolors = ["red", "green", "blue", "yellow", "purple" , "orange", "black", "maroon", "silver", "gold", "lavender"]
allborders = []
firstbox = document.getElementById('first');
secondbox = document.getElementById('second');
thirdbox = document.getElementById('third');

btn1 = document.getElementById("changebtn1");
btn2 = document.getElementById("changebtn2");
btn3 = document.getElementById("changebtn3");
btnall = document.getElementById("changebtnall");


function changeBoxOne() {
    firstbox.style.backgroundColor = allcolors[Math.floor(Math.random() * allcolors.length)];
    firstbox.style.border = "5px solid" + allcolors[Math.floor(Math.random() * allcolors.length)];
}

function changeBoxTwo() {
    secondbox.style.backgroundColor = allcolors[Math.floor(Math.random() * allcolors.length)];
    secondbox.style.border = "5px solid" + allcolors[Math.floor(Math.random() * allcolors.length)];
}

function changeBoxThree() {
    thirdbox.style.backgroundColor = allcolors[Math.floor(Math.random() * allcolors.length)];
    thirdbox.style.border = "5px solid" + allcolors[Math.floor(Math.random() * allcolors.length)];
}
btn1.addEventListener("click", changeBoxOne);
btn2.addEventListener("click", changeBoxTwo);
btn3.addEventListener("click", changeBoxThree);





