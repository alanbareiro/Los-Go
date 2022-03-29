// Scripts

window.addEventListener('DOMContentLoaded', event => {

    event.preventDefault();

    //console.log('Estoy en el front');

    // funcion para agregar navbar-shrink
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');

        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink de navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    const proposal = document.querySelector('#proposal');
    const collapsePropsal = document.querySelector('#collapse-proposal');
    const propuesta = document.querySelector('#propuesta');

    proposal.addEventListener('click', ()=>{
        collapsePropsal.classList.remove('propsal')   
    })

    propuesta.addEventListener('mouseout',()=>{
        setTimeout(() => {
            collapsePropsal.classList.add('propsal')
           }, 4000);
    });  

});




