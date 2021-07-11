input.onButtonPressed(Button.A, function () {
    basic.showArrow(ArrowNames.East)
    coordenada_X += 1
    basic.showNumber(coordenada_X)
    basic.pause(200)
})
function validar_Coordenadas () {
    if (coordenada_X <= 0 && coordenada_Y <= 0) {
        coordenadas = game.createSprite(coordenada_X, coordenada_Y)
        return true
    } else {
        return false
    }
}
input.onButtonPressed(Button.AB, function () {
    coordenada_X = 0
    coordenada_Y = 0
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showArrow(ArrowNames.South)
    coordenada_Y += 1
    basic.showNumber(coordenada_Y)
    basic.pause(200)
})
let coordenadas: game.LedSprite = null
let coordenada_Y = 0
let coordenada_X = 0
let vuelos = 0
coordenada_X = 0
coordenada_Y = 0
basic.forever(function () {
    if (!(validar_Coordenadas())) {
        basic.showIcon(IconNames.Angry)
    }
})
