input.onGesture(Gesture.ScreenUp, function () {
    pins.analogWritePin(AnalogPin.P0, pwmUp)
    pins.analogWritePin(AnalogPin.P1, pwmUp)
    pins.analogWritePin(AnalogPin.P2, pwmUp)
    pins.analogWritePin(AnalogPin.P3, pwmUp)
})
input.onGesture(Gesture.TiltRight, function () {
    pins.analogWritePin(AnalogPin.P1, pwmDown)
})
input.onGesture(Gesture.TiltLeft, function () {
    pins.analogWritePin(AnalogPin.P2, pwmDown)
})
input.onGesture(Gesture.LogoUp, function () {
    pins.analogWritePin(AnalogPin.P3, pwmDown)
})
input.onGesture(Gesture.LogoDown, function () {
    pins.analogWritePin(AnalogPin.P0, pwmDown)
})
let pwmDown = 0
let pwmUp = 0
pwmUp = 256
pwmDown = 64
let pwmGo = 64
basic.showNumber(3)
basic.pause(1000)
basic.showNumber(2)
basic.pause(1000)
basic.showNumber(1)
basic.pause(1000)
basic.showIcon(IconNames.Heart)
pins.digitalWritePin(DigitalPin.P15, 1)
pins.digitalWritePin(DigitalPin.P16, 0)
pins.analogWritePin(AnalogPin.P0, pwmUp)
pins.analogWritePin(AnalogPin.P1, pwmUp)
pins.analogWritePin(AnalogPin.P2, pwmUp)
pins.analogWritePin(AnalogPin.P3, pwmUp)
pins.analogWritePin(AnalogPin.P10, 0)
