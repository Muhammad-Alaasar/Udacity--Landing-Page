/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


const navBar =      document.getElementById("navbar__list");
const allSections = document.getElementsByTagName("section");
const nullElement = new DocumentFragment;
const sectionsPosition = new Array;

for (let s = 0; s < allSections.length; s++){
    let sectionNameHTML         = document.createElement("li");
    sectionNameHTML.innerText   = allSections[s].getAttribute("data-nav");
    sectionNameHTML.className   = allSections[s].id
    nullElement.appendChild(sectionNameHTML);
    sectionsPosition.push(allSections[s].offsetTop)
}
navBar.appendChild(nullElement);

const navElement = document.querySelector("ul#navbar__list");
navElement.addEventListener("click", function(event){
    if (event.target.nodeName === "LI"){
        let sectionName = event.target.className;
        let getSection = document.getElementById(sectionName);

        window.scrollTo({
            top: window.scrollY + getSection.getBoundingClientRect().top - 90,
            behavior: "smooth"
        })
    }
})

document.addEventListener("scroll", function (e) {
    for (let i = 0; i < allSections.length; i++){
       if ((allSections[i].offsetTop < window.scrollY + (allSections[i].getBoundingClientRect().height / 2))
         && window.scrollY + (allSections[i].getBoundingClientRect().height / 2) < (allSections[i].offsetTop + allSections[i].getBoundingClientRect().height)) {
            allSections[i].classList.add("your-active-class");
            document.getElementsByClassName(allSections[i].id)[0].classList.add("nav-active-class")
        } else {
            allSections[i].classList.remove("your-active-class")
            document.getElementsByClassName(allSections[i].id)[0].classList.remove("nav-active-class")
        }
             
    }
    
})




// console.log((allSections[i].offsetTop < window.scrollY ) && (allSections[i].getBoundingClientRect().top - 100 + allSections[i].getBoundingClientRect().height > 0) , allSections[i].id, allSections[i].getBoundingClientRect().top, window.scrollY)