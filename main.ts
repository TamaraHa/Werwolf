function scrollmenu (direction: number) {
    Auswahl += -1
    if (Auswahl < 0) {
        Auswahl += Rollen.length
    } else if (Auswahl >= Rollen.length) {
        Auswahl = Auswahl - Rollen.length
    }
    basic.showString("" + (Rollen[Auswahl]))
}
input.onButtonPressed(Button.A, function () {
    if (mode == 0) {
        scrollmenu(-1)
    } else if (Auswahl == 1) {
        basic.showIcon(IconNames.Angry)
        basic.pause(100)
        basic.clearScreen()
    } else if (Auswahl == 2) {
        basic.showLeds(`
            # # # # #
            . # . # .
            # . . . #
            # # # # #
            . # # # .
            `)
        basic.pause(100)
        basic.clearScreen()
    } else if (Auswahl == 3) {
        basic.showIcon(IconNames.Happy)
        basic.pause(100)
        basic.clearScreen()
    } else {
        basic.showLeds(`
            . # # . .
            . . . # .
            . . # . .
            . . . . .
            . . # . .
            `)
    }
})
input.onButtonPressed(Button.AB, function () {
    if (Auswahl != 0) {
        mode = Auswahl
        basic.showIcon(IconNames.Heart)
    }
})
input.onButtonPressed(Button.B, function () {
    if (mode == 0) {
        scrollmenu(1)
    }
})
radio.onReceivedValue(function (name, value) {
    basic.showIcon(IconNames.No)
})
let mode = 0
let Auswahl = 0
let Rollen: string[] = []
Rollen = [
"Rollen",
"W",
"H",
"D"
]
Auswahl = 0
mode = 0
basic.showString("" + (Rollen[Auswahl]))
