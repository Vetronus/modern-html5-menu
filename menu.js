var menuIcon = document.getElementById("menu");
var menu = document.getElementById("navBar");

function ToogleMenu()
{
    if(menuIcon.textContent == '=/\\=')
    {
        menuIcon.textContent = '=\\/=';
        menu.style.display = 'none';
    }
    else
    {
        menuIcon.textContent = '=/\\=';
        menu.style.display = 'block';
    }
    
}

menuIcon.addEventListener("click", ToogleMenu);
