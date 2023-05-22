'use strict.'
// 1. Constants & Variables of the DOM.

// 1.1 Constant that receives the container of the svg icon of the responsive menu.
const navMenu = document.getElementById("nav-responsive");
// 1.2 Constant that receives the options inside the nav tag in the header.
const menu = document.querySelector("nav");

// 1.3 toggleButton for Lenguage.
const toggleCheck = document.querySelector(".check");

// 1.4 Buttons for Titles & Certifications.
const buttons = document.querySelectorAll("button");

const projectTab = document.querySelectorAll(".project-tab-option");
const projectBlock = document.querySelectorAll(".carousel");

// 1.6 Accordion header to make the click on.
const accordionHeaders = document.querySelectorAll(".accordion-header");
const skillsContainer = document.querySelectorAll(".skillsContainer");
const skillTab = document.querySelectorAll(".skill-tab-option");
const skillBlock = document.querySelectorAll(".skill-block");

// 1.8 Slider of projects.
const slider = document.querySelector(".slider");
// 1.9 Options of the to select the project inside the slider.
const option = document.querySelectorAll(".slide-option");

// 2.Functions & Events.

// 2.1 Event who has a function to display the menu on the right side of the screen in a vertical view style.
navMenu.addEventListener('click', function showMenu()
{
    // Variable that receives the condition that enables a to change the classlist to show the options in a vertical side view.  
    let menuButton = false;
    // If the variable is false
    if (menuButton)
    {
        // Maintain the button hidden
        menu.classList ="";
        menuButton = false;
    }
    else
    {
        // Show the button and the class called responsive.
        menu.classList ="responsive";
        menuButton = true;
    }
});

// 2.2 Event who has a Function to change the lenguage of the webpage from english to spanish and vice versa.
toggleCheck.addEventListener('click', function lenguage()
{
    // Variable that changes its value when the user click in them.
    let id = toggleCheck.checked;
    // If that button is clicked
    if(id==true)
    {
        // Change the webpage to spanish.
        location.href="spanish/index-es.html";
    }
    else
    {
        // Change the webpage to english.
        location.href="../index.html"
    }
});

// 2.3 For each to receive an event of all the buttons on the webpage. 
buttons.forEach(function allButtons(button) 
{
    // Event that has a function that receives the event of the buttons when they are clicked.
    button.addEventListener('click', function displayDocuments(e)
    {
        // Show my CV.
        if(e.target.id === "buttonCVEnglish") 
        {
            window.location.href='https://1drv.ms/b/s!ArZmv0IiZ04JgYRK-81q-qGVJ4c-xg?e=5la06o';
        }
        // Show my Degree.
        else if (e.target.id === "universityTitle") 
        {
            window.location.href='https://1drv.ms/b/s!ArZmv0IiZ04JgYQF7X_H9MRSL25xKA?e=02AMjG';
        }
        // Show my Degree in Software Development.
        else if (e.target.id === "MinTic") 
        {
            window.location.href='https://1drv.ms/b/s!ArZmv0IiZ04J-0UbQ0Z8cDFwTmVI?e=dVUDND';
        }
        // Show my Degree in Webpage Development.
        else if (e.target.id === "Mimo") 
        {
            window.location.href='https://1drv.ms/b/s!ArZmv0IiZ04JgYQG6qbtmXJr1kXrhg?e=A4D9RL';
        }
    });
});

projectTab.forEach((everyTab, i)=>
{
    projectTab[i].addEventListener('click',()=>
    {
        projectTab.forEach((everyTab , j) =>
        {
            projectTab[j].classList.remove('active');
            projectBlock[j].classList.remove('active');
        })

        projectTab[i].classList.add('active');
        projectBlock[i].classList.add('active');
    })
})

skillTab.forEach((everyTab, i)=>
{
    skillTab[i].addEventListener('click',()=>
    {
        skillTab.forEach((everyTab , j) =>
        {
            skillTab[j].classList.remove('active');
            skillBlock[j].classList.remove('active');
        })

        skillTab[i].classList.add('active');
        skillBlock[i].classList.add('active');
    })
})

accordionHeaders.forEach(header => 
{
    header.addEventListener('click', () => 
    {
        const accordionBlock = header.parentElement;
        accordionBlock.classList.toggle('active');

        if (accordionBlock.classList.contains('active')) 
        {
            skillsContainer.style.height = '60vh';
        } 
        else 
        {
            skillsContainer.style.height = null;
        }
    });
});

// 2.4 For each cycle that is going to receive all the options of the slider.
option.forEach((everyOption,i) =>
{
    option[i].addEventListener('click',()=>
    {
        let position = i;
        let operation = position * -50;

        slider.style.transform = `translateX(${ operation }%)`;

        option.forEach((everyOption,i) =>
        {
            option[i].classList.remove('active');
        });

        option[i].classList.add('active');
    });
});

