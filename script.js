$(() => {
    // FUNCTIONS FOR LINKS SUBMENU IN NAV BAR
    $('#links-submenu-link').on('click', () => {
        $('.links-submenu-ul').toggleClass('visible')
    })

    // FUNCTION FOR ANIMATING PICTURE OF ME
    $('.image-of-me img').on('mouseover', () => {
        $('.image-of-me img').css('height', '18em')
    })

    $('.image-of-me img').on('mouseout', () => {
        $('.image-of-me img').css('height', '10em')
    })

    // FUNCTIONS FOR HOME PAGE ANIMATIONS
    $(document).ready(function() { 
        $('.welcome-img').fadeTo(3000, 1)
    })

    setTimeout(() => {$(document).ready(function() { 
        $('.first-intro-message').fadeTo(3000, 1)
    })}, 3000)

    setTimeout(() => {$(document).ready(function() { 
        $('.second-intro-message').fadeTo(3000, 1)
    })}, 6000)

    setTimeout(() => {$(document).ready(function() { 
        $('.welcome-message-h2').fadeTo(3000, 1)
    })}, 9000)

})