const btn1 = document.getElementById("btn-producto1");
const btn2 = document.getElementById("btn-producto2");
const btn3 = document.getElementById("btn-producto3");

btn1.addEventListener("click", (e) => {
    e.preventDefault();
    alert("Gracias por elegir el cafe negro☕");
})

btn2.addEventListener("click", (e) => {
    e.preventDefault();
    alert("Gracias por elegir el cafe latte🥛")
})

btn3.addEventListener("click", (e) => {
    e.preventDefault();
    alert("Gracias por elegir el Capuccino✨");
})