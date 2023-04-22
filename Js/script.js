// Variables & Constants.

// Buttons for Options.
const selectOption = document.querySelector(".option");
// Button for Responsive Menu.
const verticalMenu = document.getElementById("nav-responsive");
// Button for Lenguage.
const toggleCheck = document.querySelector(".check");
// Buttons for Titles & Certifications.
const curriculumEnglish = document.getElementById("buttonCVEnglish");
const universityTitle = document.getElementById("universityTitle");
const minticTitle = document.getElementById("MinTic");
const mimoTitle = document.getElementById("Mimo");

// Functions.
verticalMenu.addEventListener('click', function showMenu()
{
    const horizontalMenu = document.getElementById("nav");
    let menuView = false;
    if (menuView)
    {
        horizontalMenu.classList ="";
        menuView = false;
    }
    else
    {
        horizontalMenu.classList ="responsive";
        menuView = true;
    }
});

toggleCheck.addEventListener('click', function lenguage()
{
    let id = toggleCheck.checked;

    if(id==true)
    {
        location.href="spanish/index-es.html";
    }
    else
    {
        location.href="../index.html"
    }
});

curriculumEnglish.addEventListener('click', function displayCV()
{
    window.location.href='https://1drv.ms/b/s!ArZmv0IiZ04JgYQIKGn56Z1wJP58EA?e=5tWGlT'; 
})

universityTitle.addEventListener('click', function displayUniversityTitle()
{
    window.location.href='https://1drv.ms/b/s!ArZmv0IiZ04JgYQF7X_H9MRSL25xKA?e=02AMjG';
})

minticTitle.addEventListener('click', function displayMinTic()
{
    window.location.href='https://1drv.ms/b/s!ArZmv0IiZ04J-0UbQ0Z8cDFwTmVI?e=dVUDND';
});

mimoTitle.addEventListener('click', function displayMimo()
{
    window.location.href='https://1drv.ms/b/s!ArZmv0IiZ04JgYQG6qbtmXJr1kXrhg?e=A4D9RL';
})

