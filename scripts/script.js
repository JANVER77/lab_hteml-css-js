document.getElementById("titulo").textContent = "Contador";
let num = 0;
document.getElementById("btn").addEventListener('click', function(e){
    e.preventDefault();
    const li = document.createElement("li");
        li.textContent = num;
        num += 1;
    document.getElementById("contador-list").appendChild(li);


});

document.getElementById("btn2").addEventListener('click', function(e){
e.preventDefault();
const li = document.createElement("li");
    li.textContent = num;
    num -= 1;
document.getElementById("contador-list").appendChild(li);

});





