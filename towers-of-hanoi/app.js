// DEFINE FUNCTION TO CATCH INVALID MOVES
const showInvalidMove = () => {
    const $message = $('<h1>').text('Invalid move! Disk being moved is larger than the disk it is being placed on.').css('margin', 'auto').css('color', 'red');
    $message.appendTo($('body'));
    errorSound()
    setTimeout(() => {
        $message.remove();
    }, 4000);
}



// DEFINE FUNCTIONS TO PLAY ERROR AND WIN SOUNDS
const errorSound = () => {
    const audio = new Audio('./media/error.mp3')
    audio.play()
}

const winSound = () => {
    const audio = new Audio('./media/win.mp3')
    audio.play()
}



// DEFINE FUNCTION FOR INCREMENTING MOVE COUNTER
let moveCounter = 0
const incrementMoveCounter = () => {
    moveCounter++
    $('#move-counter').text(`Move Count: ${moveCounter}`)
}



// DEFINE FUNCTION TO VALIDATE LEGALITY OF MOVES
const validateMove = (diskBeingMoved, diskOnMoveToTower) => {
    if (diskBeingMoved.is($('#disk-two')) && diskOnMoveToTower.is($('#disk-one'))) {
        showInvalidMove()
        return false
    } else if (diskBeingMoved.is($('#disk-three')) && (diskOnMoveToTower.is($('#disk-one')) || diskOnMoveToTower.is($('#disk-two')))) {
        showInvalidMove()
        return false
    } else if (diskBeingMoved.is($('#disk-four')) && (diskOnMoveToTower.is($('#disk-one')) || diskOnMoveToTower.is($('#disk-two')) || diskOnMoveToTower.is($('#disk-three')))) {
        showInvalidMove()
        return false
    }
    incrementMoveCounter()
    return true
}



// DEFINE FUNCTIONS FOR MOVING PIECES FROM ONE TOWER TO ANOTHER
const leftToMiddle = () => {
    let diskBeingMoved = $('#left-tower-ul').children().eq(0)
    let diskOnMoveToTower = $('#middle-tower-ul').children().eq(0)
    if (validateMove(diskBeingMoved, diskOnMoveToTower) === true) {
        $('#left-tower-ul').children().eq(0).prependTo('#middle-tower-ul')
    }
    winCondition()
}

const leftToRight = () => {
    let diskBeingMoved = $('#left-tower-ul').children().eq(0)
    let diskOnMoveToTower = $('#right-tower-ul').children().eq(0)
    if (validateMove(diskBeingMoved, diskOnMoveToTower) === true) {
        $('#left-tower-ul').children().eq(0).prependTo('#right-tower-ul')
    }
    winCondition()
}

const middleToLeft = () => {
    let diskBeingMoved = $('#middle-tower-ul').children().eq(0)
    let diskOnMoveToTower = $('#left-tower-ul').children().eq(0)
    if (validateMove(diskBeingMoved, diskOnMoveToTower) === true) {
        $('#middle-tower-ul').children().eq(0).prependTo('#left-tower-ul')
    }
    winCondition()
}

const middleToRight = () => {
    let diskBeingMoved = $('#middle-tower-ul').children().eq(0)
    let diskOnMoveToTower = $('#right-tower-ul').children().eq(0)
    if (validateMove(diskBeingMoved, diskOnMoveToTower) === true) {
        $('#middle-tower-ul').children().eq(0).prependTo('#right-tower-ul')
    }
    winCondition()
}

const rightToLeft = () => {
    let diskBeingMoved = $('#right-tower-ul').children().eq(0)
    let diskOnMoveToTower = $('#left-tower-ul').children().eq(0)
    if (validateMove(diskBeingMoved, diskOnMoveToTower) === true) {
        $('#right-tower-ul').children().eq(0).prependTo('#left-tower-ul')
    }
    winCondition()
}

const rightToMiddle = () => {
    let diskBeingMoved = $('#right-tower-ul').children().eq(0)
    let diskOnMoveToTower = $('#middle-tower-ul').children().eq(0)
    if (validateMove(diskBeingMoved, diskOnMoveToTower) === true) {
        $('#right-tower-ul').children().eq(0).prependTo('#middle-tower-ul')
    }
    winCondition()
}



// DEFINE FUNCTION TO RESET GAME BACK TO START
const resetGame = () => {
    $('#disk-four').prependTo('#left-tower-ul')
    $('#disk-three').prependTo('#left-tower-ul')
    $('#disk-two').prependTo('#left-tower-ul')
    $('#disk-one').prependTo('#left-tower-ul')
    $('#move-counter').text('Move Count: 0')
    moveCounter = 0
}



// DEFINE FUNCTION TO DISPLAY MESSAGE ONCE GAME IS WON
const winCondition = () => {
    if ($('#right-tower-ul').children().eq(3).is($('#disk-four'))) {
        const $message = $('<h1>').text('Congratulations! You won!').css('margin', 'auto').css('color', 'blue')
        $message.appendTo($('body'))
        winSound()
        setTimeout(() => {
            $message.remove()
        }, 10000)
    }
}



// GAME PLAY EVENT LISTENERS
$(() => {
    $('#lt-to-mt').on('click', leftToMiddle)
    $('#lt-to-rt').on('click', leftToRight)
    $('#mt-to-lt').on('click', middleToLeft)
    $('#mt-to-rt').on('click', middleToRight)
    $('#rt-to-lt').on('click', rightToLeft)
    $('#rt-to-mt').on('click', rightToMiddle)
    $('#reset-game').on('click', resetGame)
})