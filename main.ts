basic.forever(function () {
    if (cuteBot.ultrasonic(cuteBot.SonarUnit.Centimeters) < 10) {
        cuteBot.moveTime(cuteBot.Direction.backward, 25, 1)
        cuteBot.moveTime(cuteBot.Direction.right, 50, 1)
    } else {
        cuteBot.motors(25, 25)
    }
})
