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
const projectTabs = document.querySelectorAll(".project-tab-option");
const projectCarousels = document.querySelectorAll(".carousel");

// 1.6 Skills section. 
const skillAccordionHeaders = document.querySelectorAll(".accordion-header");
const skillsContainer = document.querySelectorAll(".skillsContainer");
const skillTab = document.querySelectorAll(".skill-tab-option");
const skillBlock = document.querySelectorAll(".skill-block");

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

// Asignar eventos a las pestañas del proyecto
projectTabs.forEach((tab, index) => 
{
  tab.addEventListener("click", () => 
  {
    updateActiveCarousel(index);
  });
});

// Función para actualizar el carrusel activo
function updateActiveCarousel(index) 
{
  // Remover clase 'active' de todas las pestañas y carruseles
  projectTabs.forEach((tab) => tab.classList.remove("active"));
  projectCarousels.forEach((carousel) => carousel.classList.remove("active")); 

  // Agregar clase 'active' al carrusel seleccionado
  projectTabs[index].classList.add("active");
  projectCarousels[index].classList.add("active");

  // Obtener elementos del carrusel activo
  const activeCarousel = document.querySelector(".carousel.active");
  const slider = activeCarousel.querySelector(".slider");
  const sliderOptions = activeCarousel.querySelectorAll(".slide-option");
  const arrowLeft = activeCarousel.querySelector(".arrowButtonLeft");
  const arrowRight = activeCarousel.querySelector(".arrowButtonRight");

  // Configurar variables y estado inicial
  const slideWidth = 100 / sliderOptions.length;
  let currentPosition = 0;

  // Función para actualizar la posición del carrusel
  function updateSliderPosition() 
  {
    const operation = currentPosition * -slideWidth;
    slider.style.transform = `translateX(${operation}%)`;

    sliderOptions.forEach((option) => option.classList.remove("active"));
    sliderOptions[currentPosition].classList.add("active");
  }

  // Función para cambiar al siguiente slide
  function moveNextSlide() 
  {
    currentPosition = (currentPosition + 1) % sliderOptions.length;
    updateSliderPosition();
  }

  // Función para cambiar al slide anterior
  function movePrevSlide() 
  {
    currentPosition = (currentPosition - 1 + sliderOptions.length) % sliderOptions.length;
    updateSliderPosition();
  }

  // Asignar eventos a las flechas del carrusel
  arrowRight.addEventListener("click", moveNextSlide);
  arrowLeft.addEventListener("click", movePrevSlide);

  // Iniciar el intervalo de cambio automático
  let intervalId;

  function startAutoSlide() 
  {
    intervalId = setInterval(moveNextSlide, 5000);
  }

  function stopAutoSlide() 
  {
    clearInterval(intervalId);
  }

  startAutoSlide();

  // Detener el intervalo de cambio automático al pasar el mouse sobre el carrusel
  activeCarousel.addEventListener("mouseenter", stopAutoSlide);

  // Reanudar el intervalo de cambio automático al quitar el mouse del carrusel
  activeCarousel.addEventListener("mouseleave", startAutoSlide);

  // Obtener la posición de la opción activa
  const activeOptionIndex = Array.from(sliderOptions).findIndex((option) => option.classList.contains("active"));

  // Establecer la posición inicial del carrusel en la opción activa
  currentPosition = activeOptionIndex >= 0 ? activeOptionIndex : 0;

  // Asignar eventos a las opciones del carrusel
  sliderOptions.forEach((option, optionIndex) => 
  {
    option.addEventListener("click", () => 
    {
      currentPosition = optionIndex;
      updateSliderPosition();
    });
  });
}

updateActiveCarousel(0);


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

