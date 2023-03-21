let g = 0
input.calibrateCompass()
basic.forever(function on_forever() {
    
    g = input.compassHeading()
    if (g >= 45 && g < 135) {
        basic.showString("E")
    } else if (g >= 135 && g < 225) {
        basic.showString("S")
    } else if (g >= 225 && g < 315) {
        basic.showString("W")
    } else if (g >= 315 || g < 45) {
        basic.showString("N")
    }
    
})
