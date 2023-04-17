(function($){

    // add arrows to nav items with children / link arrow
    const arrowDown = document.createElement('span'),
          arrowParent = document.querySelectorAll('.has-children');
          
    arrowDown.classList.add('dropdown-arrow');
    arrowDown.innerHTML = `<svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.00911 5.72217C4.74529 5.72217 4.50126 5.63141 4.31329 5.46746L0.204307 1.81951C0.03942 1.67313 -0.0397257 1.45648 0.0196336 1.25739C0.191116 0.686486 0.900129 0.572305 1.28596 0.914849L4.93656 4.15584C4.97613 4.19097 5.04539 4.19097 5.08496 4.15584L8.71577 0.929487C9.1016 0.586944 9.80732 0.701125 9.9821 1.27203C10.0382 1.47404 9.95901 1.68777 9.79413 1.83415L5.70164 5.46746C5.51696 5.63141 5.26963 5.72217 5.00911 5.72217Z" fill="currentColor"/>
    </svg>`;
    arrowParent.forEach(elem => {
        elem.firstElementChild.append(arrowDown.cloneNode(true));
    });

    const arrowRight = document.createElement('span'),
          arrowRightLink = document.querySelectorAll('.js-link-arrow-right');

    arrowRight.classList.add('right-arrow');
    arrowRight.innerHTML = `<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="1.5" y="1.5" width="22" height="22" rx="11" stroke="currentColor" stroke-width="3"/>
    <path d="M16.25 12.7009L7.5 12.7009" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M18.4663 13.5945L18.4663 13.5945L18.4678 13.5929C18.7067 13.3519 18.8413 13.0352 18.8413 12.693C18.8413 12.355 18.7072 12.0338 18.4663 11.7949L14.1723 7.53666C13.9441 7.31032 13.6044 7.19467 13.2726 7.27573L13.2726 7.27566L13.2669 7.2772C12.405 7.50953 12.2102 8.47736 12.7511 9.01372L12.7512 9.0138L16.4629 12.6913L12.7338 16.3894C12.1939 16.9248 12.3863 17.8976 13.2508 18.1262L13.2512 18.1263C13.5821 18.2132 13.9269 18.0961 14.155 17.8699L18.4663 13.5945Z" fill="currentColor" stroke="currentColor" stroke-width="0.5"/>
    </svg>`;

    arrowRightLink.forEach(elem => {
        elem.appendChild(arrowRight.cloneNode(true));
    });


    // show/hide dropdown

    const dropdownParent = document.querySelectorAll('.has-children');

    dropdownParent.forEach(elem => {
        elem.addEventListener('mouseover', () => {
           
        });
    });

    // add the same height of img in js-grid

    //const gridImgsParent = document.querySelector('.js-grid'), 
          //gridImgsHeight = gridImgsParent.getElementsByTagName('img');

    //console.log(gridImgsHeight);
    /*gridImgsHeight.forEach(img => {
        console.log(img);
        console.log(img.clientHeight);
    });*/
    







    $(document).ready(function(){
        // slick slider
        $('.js-slider').slick({
            arrow: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                      slidesToShow: 2,
                      slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 639,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1
                    }
                }
            ]
        });

        // Accordion
        $('.js-accordion').on('click', '.js-accordion-btn', function(){
            let parent = $(this).parent();
    
            if (parent.hasClass('opened')) {
            parent.removeClass('opened').find('.js-accordion-content').slideUp();
            } else {
            parent.addClass('opened').find('.js-accordion-content').slideDown();
            }
        });
    });
    
})(jQuery);

