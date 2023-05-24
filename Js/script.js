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

// 1.5 Projects section.
const projectTab = document.querySelectorAll(".project-tab-option");
const projectBlock = document.querySelectorAll(".carousel");
const projectSlider = document.querySelector(".slider");
const projectArrowLeft = document.querySelector(".arrowButtonLeft");
const projectArrowRight = document.querySelector(".arrowButtonRight"); 
const projectSliderOption = document.querySelectorAll(".slide-option");
const overlayContainer = document.querySelectorAll(".overlay-block.practice");
// Global Variables
let currentPosition = 1;
const numProjects = overlayContainer.length;
// Configurar el slider para que sea infinito
const firstSlideClone = projectSliderOption[0].cloneNode(true);
const lastSlideClone = projectSliderOption[numProjects - 1].cloneNode(true);

// 1.6 Skills section. 
const skillAccordionHeaders = document.querySelectorAll(".accordion-header");
const skillsContainer = document.querySelectorAll(".skillsContainer");
const skillTab = document.querySelectorAll(".skill-tab-option");
const skillBlock = document.querySelectorAll(".skill-block");

// 2. Events & Functions.

// Función para actualizar la posición del slider y los iconos
function updateSliderPosition() 
{
    const slideWidth = 100 / numProjects; // Ancho de cada slide en porcentaje
    let operation = currentPosition * -slideWidth;
    projectSlider.style.transform = `translateX(${operation}%)`;

    projectSliderOption.forEach((option, index) => 
    {
        option.classList.remove('active');
    });

    projectSliderOption[currentPosition].classList.add('active');
}

// Función para cambiar la imagen hacia la derecha
function moveSlideRight() 
{
  currentPosition = (currentPosition + 1) % numProjects;
  updateSliderPosition();
}

// 2.2 Local Functions and events.

// Event who has a function to display the menu on the right side of the screen in a vertical view style.
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

// Event who has a Function to change the lenguage of the webpage from english to spanish and vice versa.
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

// For each to receive an event of all the buttons on the webpage. 
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

skillAccordionHeaders.forEach(header => 
{
    header.addEventListener('click', () => 
    {
        const skillAccordionBlock = header.parentElement;
        skillAccordionBlock.classList.toggle('active');

        if (skillAccordionBlock.classList.contains('active')) 
        {
            skillsContainer.style.height = '60vh';
        } 
        else 
        {
            skillsContainer.style.height = null;
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

// Asignar eventos a las flechas
projectArrowRight.addEventListener('click', moveSlideRight);

projectArrowLeft.addEventListener('click', function moveSlideLeft() 
{
    // Función para cambiar la imagen hacia la izquierda
    currentPosition = (currentPosition - 1 + numProjects) % numProjects;
    updateSliderPosition();
});

// Asignar eventos a los botones de numeración
projectSliderOption.forEach((option, index) => 
{
  option.addEventListener('click', () => 
  {
    currentPosition = index;
    updateSliderPosition();
  });
});

// Iniciar el intervalo de cambio automático
setInterval(moveSlideRight, 5000);

// Configuracion del Slider para que sea infinito.
projectSlider.appendChild(firstSlideClone);
projectSlider.insertBefore(lastSlideClone, projectSliderOption[0]);


