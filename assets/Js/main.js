// For Navigation Bar
const burgerBtn = document.querySelector('.burgerbtn');
const burgerBtnIcon = document.querySelector('.burgerbtn i');
const dropDownMenu = document.querySelector('.dropDownMenu');
const header = document.getElementById('navbar');

burgerBtn.addEventListener("click", function() {
    dropDownMenu.classList.toggle('open');
    const isOpen = dropDownMenu.classList.contains('open');
    burgerBtnIcon.classList = isOpen ? 'fa fa-close' : 'fa fa-bars';
});

dropDownMenu.addEventListener("click", function() {
    dropDownMenu.classList.remove('open');
    const isOpen = dropDownMenu.classList.remove('open');
    burgerBtnIcon.classList = isOpen ? 'fa fa-close' : 'fa fa-bars';
});

// For About Me
let skillsBtn = document.querySelector('.skillsBtn');
let educationBtn = document.querySelector('.educationBtn');
let skills = document.querySelector(".skills");
let education = document.querySelector(".education");

skillsBtn.addEventListener( "click" , function(){
    education.style.display = 'none';   
    skills.style.display = 'flex';
});

educationBtn.addEventListener( "click" , function(){ 
    skills.style.display = 'none';
    education.style.display = 'flex'; 
});
