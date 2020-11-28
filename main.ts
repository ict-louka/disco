let figuur = 0
basic.forever(function () {
    figuur = randint(1, 5)
    if (randint(1, 5) == 1) {
        basic.showIcon(IconNames.Target)
        basic.pause(5)
    } else if (randint(1, 5) == 2) {
        basic.showIcon(IconNames.SmallDiamond)
        basic.pause(5)
    } else if (randint(1, 5) == 3) {
        basic.showIcon(IconNames.Diamond)
        basic.pause(5)
    } else if (randint(1, 5) == 4) {
        basic.showIcon(IconNames.Chessboard)
        basic.pause(5)
    } else if (randint(1, 5) == 5) {
        basic.showIcon(IconNames.SmallSquare)
        basic.pause(5)
    } else {
    	
    }
})
