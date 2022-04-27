$(() => {
    $(document).ready(function() { 
        // $('.welcome-img').hide()
        // $('.first-intro-message').hide()
        // $('.second-intro-message').hide()
        // $('.welcome-message-h2').hide()
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