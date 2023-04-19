'use strict'
function showHideMenu()
{
    let menuVisibility = false;
    if (menuVisibility)
    {
        document.getElementById("nav").classList ="";
        menuVisibility = false;
    }
    else
    {
        document.getElementById("nav").classList ="responsive";
        menuVisibility = true;
    }
}

function select()
{
    document.getElementById("nav").classList ="";
    menuVisibility = false;
}

function lenguage()
{
    let check = document.querySelector(".check");
    let id = check.checked;

    if(id==true)
    {
        location.href="spanish/index-es.html";
    }
    else
    {
        location.href="../index.html"
    }
}

check.addEventListener('click',lenguage);