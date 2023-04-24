// 1. Constants.

// 1.1 Buttons for Options.
const selectOption = document.querySelectorAll(".option");
// 1.2 Button for Responsive Menu.
const navMenu = document.getElementById("nav-responsive");
// 1.3 toggleButton for Lenguage.
const toggleCheck = document.querySelector(".check");
// 1.4 Buttons for Titles & Certifications.
const buttons = document.querySelectorAll("button");

// 2.Functions & Events.

// 2.1 Event who has a function to display the menu on the right side of the screen in a vertical view style.
navMenu.addEventListener('click', function showMenu()
{
    // constant that receives the nav tag in Html.
    const menu = document.querySelector("nav");
    // variable that blocks the view of the responsive button in the page.
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

// 2.3 For each cycle that is going to receive all the buttons on the webpage. 
buttons.forEach(function allButtons(button) 
{
    // Event that has a function that receives the event of the buttons when they are clicked.
    button.addEventListener('click', function displayDocuments(e)
    {
        // Show my CV.
        if(e.target.id === "buttonCVEnglish") 
        {
            window.location.href='https://1drv.ms/b/s!ArZmv0IiZ04JgYQIKGn56Z1wJP58EA?e=5tWGlT';
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



