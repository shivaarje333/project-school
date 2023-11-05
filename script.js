let cardImg = document.getElementById("cardImg");

let Obj = [
    {
        img :"images/ayuC.jpg",
        title : "Ayushman C"
    },
    {
        img :"images/ayuC.jpg",
        title : "Harsh S"
    },
    {
        img :"images/ayuC.jpg",
        title : "Shivam A"
    },
]
for(let i=0; i< Obj.length; i++){
    cardImg.innerHTML += ` <div class="card mt-3" style="width: 18rem;">
    <img src="${Obj[i].img}" class="card-img-top" alt="...">
    <div class="card-body">
    <p class="card-text">${Obj[i].title} C</p>
    </div>
</div>`
}
