let Stato = 0
let item = 0
input.onButtonPressed(Button.B, () => {
    if (Stato == 0) {
        Stato = 2
        pins.digitalWritePin(DigitalPin.P2, 1)
    } else {
        if (Stato == 1) {
            Stato = 3
            pins.digitalWritePin(DigitalPin.P0, 1)
            pins.digitalWritePin(DigitalPin.P1, 1)
            pins.digitalWritePin(DigitalPin.P2, 1)
        } else {
            if (Stato == 2) {
                Stato = 3
                pins.digitalWritePin(DigitalPin.P0, 1)
                pins.digitalWritePin(DigitalPin.P2, 1)
                pins.digitalWritePin(DigitalPin.P1, 1)
            } else {
                Stato = 0
                pins.digitalWritePin(DigitalPin.P0, 0)
                pins.digitalWritePin(DigitalPin.P1, 0)
                pins.digitalWritePin(DigitalPin.P2, 0)
            }
        }
    }
})
input.onButtonPressed(Button.A, () => {
    if (Stato == 0) {
        Stato = 1
        pins.digitalWritePin(DigitalPin.P0, 1)
    } else {
        if (Stato == 1) {
            Stato = 3
            pins.digitalWritePin(DigitalPin.P0, 1)
            pins.digitalWritePin(DigitalPin.P1, 1)
            pins.digitalWritePin(DigitalPin.P2, 1)
        } else {
            if (Stato == 2) {
                Stato = 3
                pins.digitalWritePin(DigitalPin.P0, 1)
                pins.digitalWritePin(DigitalPin.P2, 1)
                pins.digitalWritePin(DigitalPin.P1, 1)
            } else {
                Stato = 0
                pins.digitalWritePin(DigitalPin.P0, 0)
                pins.digitalWritePin(DigitalPin.P1, 0)
                pins.digitalWritePin(DigitalPin.P2, 0)
            }
        }
    }
})
item = 0
pins.digitalWritePin(DigitalPin.P0, 0)
pins.digitalWritePin(DigitalPin.P1, 0)
pins.digitalWritePin(DigitalPin.P2, 0)
