// let landingPage = document.querySelector(".landing-page");

// let arr = ["img1.jpeg", "img2.jpeg", "img3.jpeg", "img4.jpeg" , "img5.jpeg"]

// setInterval(() => {
//     let random = Math.floor(Math.random() * arr.length)

//     landingPage.style.backgroundImage = `url("images/${arr[random]}")`;
    
// }, 10000);



let landingPage = document.querySelector(".landing-page");

const arr = ["img1.jpeg", "img2.jpeg", "img3.jpeg", "img4.jpeg", "img5.jpeg",]

setInterval(() => {
    let random = Math.floor(Math.random() * arr.length)
    landingPage.style.backgroundImage = `url("images/${arr[random]}")`
}, 10000);




const spin = document.querySelector(".fa-gear");
const settingBox = document.querySelector(".setting-box");

spin.addEventListener("click" , function(){
    this.classList.toggle("fa-spin");
    settingBox.classList.toggle("open")
})
///////////////////////////////////////////

let colorsLi= document.querySelectorAll(".color-box li");
console.log(colorsLi);

let arrOfLi = Array.from(colorsLi)
console.log(arrOfLi);

for(let i=0 ; i<arrOfLi.length; i++){
    arrOfLi[i].addEventListener("click", (e)=>{

        document.documentElement.style.setProperty("--main-color" , e.target.dataset.color);
        e.target.parentElement.querySelectorAll(".active").forEach(ele =>{
            ele.classList.remove("active")
        })
        e.target.classList.add("active")

    })    
}




// Select Skills Selector
let ourSkills = document.querySelector(".skill");

window.onscroll = function (){

    let skillsOffsetTop = ourSkills.offsetTop ;
    let skilsOusterHeight = ourSkills.offsetHeight;
    let windowHeight = this.innerHeight ;
    let windowScrollTop = this.pageYOffset;

    if(windowScrollTop > (skillsOffsetTop + skilsOusterHeight - windowHeight)) {

        let allSkills = document.querySelectorAll(".skill-details .skill-progress span");

        allSkills.forEach(skill => {
            skill.style.width = skill.dataset.progress
        });
    
    }
};




/******************** */
// PopUp

let imgOfGallery = Array.from(document.querySelectorAll(".gallery .img-box img"));
let leftarrow = document.getElementById("leftarrow")
let rightarrow = document.getElementById("rightarrow")
let current =0;

let popupOverlay = document.querySelector(".popup-overlay");
let popupImg = document.querySelector(".popup-overlay .popup-box img");
let exitIcon = document.querySelector(".popup-overlay .fa-xmark");
// let x = document.querySelector(".popup-overlay .popup-box h2");

imgOfGallery.forEach((img , index) => {
    img.addEventListener("click" , (e)=>{
        current=index;
        popupImg.src = e.target.src
        popupOverlay.style.display="flex";   
        // x.innerHTML = e.target.alt
    })
})

popupOverlay.addEventListener("click" , (e)=>{
    if(e.target === popupOverlay){

        popupOverlay.style.display = "none"
    }
})

exitIcon.addEventListener("click" , (e)=>{
    popupOverlay.style.display = "none"  
})


function goToRightImage(){
   current++
   if (current >= imgOfGallery.length) { 
        current = 0; 
    }   
    let x = imgOfGallery[current].getAttribute("src");
    popupImg.src=x;
}

function goToLiftImage(){
   current--
   if (current < 0 ) { 
        current = imgOfGallery.length -1; 
    }   
    let x = imgOfGallery[current].getAttribute("src");
    popupImg.src=x;
}

for(let i=0 ; i<imgOfGallery.length ;i++){
    imgOfGallery[i].addEventListener("click" , function(e){
        console.log(e.target);
        let current = imgOfGallery.indexOf(e.target);
        console.log(current);
        
        
    })
}

rightarrow.addEventListener("click",function(){
    goToRightImage();
})

leftarrow.addEventListener("click" , function(){
    goToLiftImage()
})

document.addEventListener("keydown" , function(e){
    
    if(e.key == "Escape"){
        popupOverlay.style.display = "none"
    }
    else if(e.key == "ArrowRight"){
        goToRightImage();
    }    
    else if(e.key == "ArrowLeft"){
        goToLiftImage();
    }    
})