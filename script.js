const cursor = document.querySelector(".cursor");
var timeout;

//follow cursor when mouse moves
document.addEventListener("mousemove", (e) => {
    let x = e.pageX;
    let y = e.pageY;

    cursor.style.top = y + "px";
    cursor.style.left = x + "px";
    cursor.style.display = "block";

    function mouseStopped(){
        cursor.style.display = "none";
    }
    clearTimeout(timeout);
    timeout = setTimeout(mouseStopped, 1000);
});

document.addEventListener("mouseout", () => {
    cursor.style.display = "none";
});

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))


const slider = document.querySelector(".slider");

const leftArrow = document.querySelector(".left");
const rightArrow = document.querySelector(".right");

var sectionIndex = 0;

// rightArrow.addEventListener('click', function() {
//     sectionIndex = sectionIndex + 1
//     slider.style.transform = 'translate(' + (sectionIndex) * -25 + '%)';
// });

var carouselData = [
    {
    id: 1 ,
    img: "KetoC1.png",
    a : "https://www.amazon.com/Essential-Keto-Bread-Satisfy-Craving/dp/1641528931"
},
{
    id: 1 ,
    img: "KetoC1.png",
    a : "https://www.amazon.com/Essential-Keto-Bread-Satisfy-Craving/dp/1641528931"
},
    {
    id: 1 ,
    img: "KetoC1.png",
    a : "https://www.amazon.com/Essential-Keto-Bread-Satisfy-Craving/dp/1641528931"
},
    {
    id: 1 ,
    img: "KetoC1.png",
    a : "https://www.amazon.com/Essential-Keto-Bread-Satisfy-Craving/dp/1641528931"
},
    {
    id: 1 ,
    img: "KetoC1.png",
    a : "https://www.amazon.com/Essential-Keto-Bread-Satisfy-Craving/dp/1641528931"
}
]
console.log(carouselData)
// let imageSource = carouselData[i].img'
//let newItemCard = document.createElement("li")
//let image = `<img src='images/${imageSource}' href='${imageAnchor}' class='model' height='350px' width='300px'`
// newItemCard.append()
//let locationOfUL = document.getElementById("autowidth") this is the id of the UL
//locationOfUL.appendchild(newItemCard)

// <li>box 1
//                 <img src="images/KetoC1.png" class="model" height="350px" width="300px">
//                 <a class="buy me" href="x">Click Here to Purchase</a>
//                 <p>lkdvckjorjeqj pfdjakoioreqjofdoij</p>
//             </li>

//created an image
// var oImg = document.createElement("img");
// oImg.setAttribute('src', 'http://www.testtrackinglink.com');
// oImg.setAttribute('alt', 'na');
// oImg.setAttribute('height', '1px');
// oImg.setAttribute('width', '1px');
// document.body.appendChild(oImg);

