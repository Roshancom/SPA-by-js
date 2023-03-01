const home = document.getElementsByClassName("home")[0];
const about = document.getElementsByClassName("about")[0];
const contact = document.getElementsByClassName("contact")[0];
const navHomeLink = document.getElementsByClassName("home_link")[0];
const navAboutLink = document.getElementsByClassName("about_link")[0];
const navContactLink = document.getElementsByClassName("contact_link")[0];
navHomeLink.addEventListener("click",()=>{
    
    //display toggle
    home.style.display = "block";
    about.style.display = "none";
    contact.style.display = "none";
    
    //color toggle
    navHomeLink.style.color = "red";
    navAboutLink.style.color = "green";
    navContactLink.style.color = "green";
    
    navHomeLink.style.pointerEvents = "none";
    navAboutLink.style.pointerEvents = "auto";
    navContactLink.style.pointerEvents = "auto";
    
})
navAboutLink.addEventListener("click",()=>{
   
    //display toggle
    about.style.display = "block";
    home.style.display = "none";
    contact.style.display = "none";

    //color toggle
    navAboutLink.style.color = "red";
    navContactLink.style.color = "green";
    navHomeLink.style.color = "green";
    
    navHomeLink.style.pointerEvents = "auto";
    navAboutLink.style.pointerEvents = "none";
    navContactLink.style.pointerEvents = "auto";
})
navContactLink.addEventListener("click",()=>{
   
    //display toggle
    contact.style.display = "block";
    about.style.display = "none";
    home.style.display = "none";
    
    //color toggle
    navContactLink.style.color = "red";
    navHomeLink.style.color = "green";
    navAboutLink.style.color = "green";

    navHomeLink.style.pointerEvents = "auto";
    navAboutLink.style.pointerEvents = "auto";
    navContactLink.style.pointerEvents = "none";
})




