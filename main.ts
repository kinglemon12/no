let haloDisplay: kitronik_halo_hd.ZIPHaloHd = null
input.onButtonPressed(Button.A, function () {
    haloDisplay.show()
})
input.onButtonPressed(Button.B, function () {
    haloDisplay.clear()
})
basic.forever(function () {
    haloDisplay.setColor(kitronik_halo_hd.colors(ZipLedColors.Black))
})
