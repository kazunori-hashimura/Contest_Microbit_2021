input.onGesture(Gesture.ScreenUp, function () {
    pins.analogWritePin(AnalogPin.P5, pwmUp)
    pins.analogWritePin(AnalogPin.P6, pwmUp)
    pins.analogWritePin(AnalogPin.P7, pwmUp)
    pins.analogWritePin(AnalogPin.P8, pwmUp)
})
input.onGesture(Gesture.TiltRight, function () {
    pins.analogWritePin(AnalogPin.P6, pwmDown)
})
input.onGesture(Gesture.TiltLeft, function () {
    pins.analogWritePin(AnalogPin.P7, pwmDown)
})
input.onGesture(Gesture.LogoUp, function () {
    pins.analogWritePin(AnalogPin.P8, pwmDown)
})
input.onGesture(Gesture.LogoDown, function () {
    pins.analogWritePin(AnalogPin.P5, pwmDown)
})
// 1. 開始時にモーターのPWM値を設定する
// 　・pmwUp（上昇）
// 　・pwmDown（下降）
// 　・pwmGo（前進）
// 2. 開始カウントダウン
// 3. モーター制御を正転とする
// 4. 姿勢制御モーターをpmwUpで起動
// 5. 前進モーターは停止状態とする
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
pins.analogWritePin(AnalogPin.P5, pwmUp)
pins.analogWritePin(AnalogPin.P6, pwmUp)
pins.analogWritePin(AnalogPin.P7, pwmUp)
pins.analogWritePin(AnalogPin.P8, pwmUp)
pins.analogWritePin(AnalogPin.P11, 0)
