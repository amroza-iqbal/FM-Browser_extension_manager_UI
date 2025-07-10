


let lightmode=localStorage.getItem('lightmode');

var themeswitch=document.getElementById('theme-switch');

var enablelightmode = () =>
{
    document.body.classList.add('lightmode');
    localStorage.setItem('lightmode', 'active');
};

var disablelightmode = () =>
{
    document.body.classList.remove('lightmode');
    localStorage.setItem('lightmode', 'null');
};

if(lightmode === 'active')
{
    enablelightmode();
};

themeswitch.addEventListener("click", () =>
{
    lightmode=localStorage.getItem('lightmode');
    if(!document.body.classList.contains('lightmode'))
    {
        enablelightmode();
    }
    else
    {
        disablelightmode();
    }
});



        const activeButton = document.getElementById("activeButton");
        const inactiveButton = document.getElementById("inactiveButton");
        const activeExtensions = document.querySelectorAll(".active-extension");
        const inactiveExtensions = document.querySelectorAll(".inactive-extension");

        activeButton.addEventListener("click", function ()
        {
            inactiveExtensions.forEach(extension => extension.style.display = "none");
            activeExtensions.forEach(extension => extension.style.display = "block");
        });

        inactiveButton.addEventListener("click", function ()
        {
            activeExtensions.forEach(extension => extension.style.display = "none");
            inactiveExtensions.forEach(extension => extension.style.display = "block");
            inactiveExtensions.classList.add('.active');
        });







