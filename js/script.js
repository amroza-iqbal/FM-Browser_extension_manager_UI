


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



        const allButton = document.getElementById("allButton");
        const activeButton = document.getElementById("activeButton");
        const inactiveButton = document.getElementById("inactiveButton");
        const activeExtensions = document.querySelectorAll(".active-extension");
        const inactiveExtensions = document.querySelectorAll(".inactive-extension");

        allButton.addEventListener("click", function()
        {
            inactiveExtensions.forEach(extension => extension.style.display = "block");
            activeExtensions.forEach(extension => extension.style.display = "block");
            inactiveButton.classList.remove('active');
            activeButton.classList.remove('active');
            allButton.classList.add('active');
        });

        activeButton.addEventListener("click", function ()
        {
            inactiveExtensions.forEach(extension => extension.style.display = "none");
            activeExtensions.forEach(extension => extension.style.display = "block");
            allButton.classList.remove('active');
            inactiveButton.classList.remove('active');
            activeButton.classList.add('active');
        });

        inactiveButton.addEventListener("click", function ()
        {
            activeExtensions.forEach(extension => extension.style.display = "none");
            inactiveExtensions.forEach(extension => extension.style.display = "block");
            allButton.classList.remove('active');
            activeButton.classList.remove('active');
            inactiveButton.classList.add('active');
        });



        const sliders = document.querySelectorAll('.switch input');

        sliders.forEach(slider =>
        {
            slider.addEventListener('change', function()
            {
                const box =  this.closest('.box');
                if (this.checked)
                {
                    box.classList.add('active-ext');
                    box.classList.add('inactive-ext');
                }
                else
                {
                    box.classList.remove('active-ext');
                    box.classList.add('inactive-ext');
                }
            });
        });







