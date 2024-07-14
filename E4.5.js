class Device {
    constructor(name) {
        this.name = name;
        this.poweredOn = false;
    }

    turnOn() {
        if (!this.poweredOn) {
            this.poweredOn = true;
            console.log(`${this.name} включен`);
        } else {
            console.log(`${this.name} уже включен`);
        }
    }

    turnOff() {
        if (this.poweredOn) {
            this.poweredOn = false;
            console.log(`${this.name} выключен`);
        } else {
            console.log(`${this.name} уже выключен`);
        }
    }
}

class Lamp extends Device {
    constructor(name, brightness) {
        super(name);
        this.brightness = brightness;
    }

    adjustBrightness(level) {
        this.brightness = level;
        console.log(`Яркость лампы ${this.name} установлена на уровень ${level}`);
    }
}

class TV extends Device {
    constructor(name, brand) {
        super(name);
        this.brand = brand;
        this.channel = 1;
    }

    changeChannel(channel) {
        this.channel = channel;
        console.log(`${this.name} переключен на канал ${channel}`);
    }
}

const deskLamp = new Lamp('Настольная лампа', 50);
const livingRoomTV = new TV('Телевизор в гостиной', 'Рекорд');

deskLamp.turnOn();
deskLamp.adjustBrightness(75);
deskLamp.turnOff();

livingRoomTV.turnOn();
livingRoomTV.changeChannel(5);
livingRoomTV.turnOff();
