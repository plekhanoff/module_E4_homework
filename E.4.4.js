// Родительская функция с методами для включения/выключения прибора из розетки
function Device(name) {
    this.name = name;
    this.poweredOn = false;
}

Device.prototype.turnOn = function() {
    if (!this.poweredOn) {
        this.poweredOn = true;
        console.log(`${this.name} включен`);
    } else {
        console.log(`${this.name} уже включен`);
    }
};

Device.prototype.turnOff = function() {
    if (this.poweredOn) {
        this.poweredOn = false;
        console.log(`${this.name} выключен`);
    } else {
        console.log(`${this.name} уже выключен`);
    }
};

// Создаем делегирующую связь [Prototype] для конкретных приборов
function Lamp(name, brightness) {
    Device.call(this, name);
    this.brightness = brightness;
}

Lamp.prototype = Object.create(Device.prototype);
Lamp.prototype.constructor = Lamp;

Lamp.prototype.adjustBrightness = function(level) {
    this.brightness = level;
    console.log(`Яркость лампы ${this.name} установлена на уровень ${level}`);
};

function TV(name, brand) {
    Device.call(this, name);
    this.brand = brand;
    this.channel = 1;
}

TV.prototype = Object.create(Device.prototype);
TV.prototype.constructor = TV;

TV.prototype.changeChannel = function(channel) {
    this.channel = channel;
    console.log(`${this.name} переключен на канал ${channel}`);
};

// Создаем экземпляры каждого прибора
const deskLamp = new Lamp('Настольная лампа', 50);
const livingRoomTV = new TV('Телевизор в гостиной', 'Рекорд');

deskLamp.turnOn();
deskLamp.adjustBrightness(75);
deskLamp.turnOff();

livingRoomTV.turnOn();
livingRoomTV.changeChannel(5);
livingRoomTV.turnOff();
