(function($){

    // add arrows to nav items with children / link arrow
    const arrowDown = document.createElement('span'),
          arrowParent = document.querySelectorAll('.has-children'),
          arrowRight = document.createElement('span'),
          arrowRightLink = document.querySelectorAll('.js-link-arrow-right');

    arrowDown.classList.add('dropdown-arrow');
    arrowDown.innerHTML = `<svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.00911 5.72217C4.74529 5.72217 4.50126 5.63141 4.31329 5.46746L0.204307 1.81951C0.03942 1.67313 -0.0397257 1.45648 0.0196336 1.25739C0.191116 0.686486 0.900129 0.572305 1.28596 0.914849L4.93656 4.15584C4.97613 4.19097 5.04539 4.19097 5.08496 4.15584L8.71577 0.929487C9.1016 0.586944 9.80732 0.701125 9.9821 1.27203C10.0382 1.47404 9.95901 1.68777 9.79413 1.83415L5.70164 5.46746C5.51696 5.63141 5.26963 5.72217 5.00911 5.72217Z" fill="currentColor"/>
    </svg>`;
    arrowParent.forEach(elem => {
        elem.firstElementChild.append(arrowDown);
    });

    arrowRight.classList.add('right-arrow');
    arrowRight.innerHTML = `<svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.25 5.70081L1.5 5.70081" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M12.4658 6.59444L12.4658 6.59445L12.4674 6.59288C12.7062 6.3518 12.8408 6.03517 12.8408 5.69293C12.8408 5.35493 12.7067 5.03375 12.4658 4.79484L8.17185 0.536598C7.94361 0.310254 7.60392 0.194612 7.27215 0.275672L7.27213 0.275603L7.26642 0.277142C6.40448 0.509467 6.20976 1.47729 6.75062 2.01366L6.7507 2.01374L10.4624 5.69125L6.73332 9.38935C6.19341 9.92476 6.38577 10.8976 7.25027 11.1262L7.25071 11.1263C7.58158 11.2131 7.92642 11.0961 8.15455 10.8698L12.4658 6.59444Z" fill="currentColor" stroke="currentColor" stroke-width="0.5"/>
    </svg>`;
    arrowRightLink.forEach(elem => {
        elem.appendChild(arrowRight);
    });

    $(document).ready(function(){
        // slick slider
        $('.js-slider').slick({
            arrow: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1
        });
    });
    
})(jQuery);

