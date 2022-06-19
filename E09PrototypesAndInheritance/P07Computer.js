function createComputerHierarchy() {
    class Keyboard{
        constructor(manufacturer, responseTime){
            this.manufacturer = manufacturer;
            this.responseTime = responseTime;
        }
    }
    class Monitor{
        constructor(manufacturer, width, height){
            this.manufacturer = manufacturer;
            this.width = width;
            this.height = height;
        }
    }
    class Battery{
        constructor(manufacturer, expectedLife){
            this.manufacturer = manufacturer;
            this.expectedLife = expectedLife;
        }
    }
    class Computer{
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace){
            if (this.constructor == Computer) {
                throw new Error("Abstract class Computer can't be instantiated.");
            }
            this.manufacturer = manufacturer;
            this.processorSpeed = processorSpeed;
            this.ram = ram;
            this.hardDiskSpace = hardDiskSpace;
        }
    }
    class Laptop extends Computer{
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, weight, color, battery) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            this.weight = weight;
            this.color = color;
            this.battery = battery;

        }
        get battery() {
            return this._battery;
        }
        set battery(battery) {
            if (!(battery instanceof Battery)) {
                throw new TypeError('Invalid instance!');
            }
            this._battery = battery;
        }
    }
    class Desktop extends Computer{
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, keyboard, monitor){
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            this.keyboard = keyboard;
            this.monitor = monitor;
        }

        get keyboard(){
            return this._keyboard;
        }
        set keyboard(keyboard){
            if(!(keyboard instanceof Keyboard)){
                throw new TypeError('Invalid instance!');
            }
            this._keyboard = keyboard;
        }
        get monitor(){
            return this._monitor;
        }
        set monitor(monitor){
            if(!(monitor instanceof Monitor)){
                throw new TypeError('Invalid instance!')
            }
            this._monitor = monitor;
        }
    }

    return {
        Battery,
        Keyboard,
        Monitor,
        Computer,
        Laptop,
        Desktop
    }
}

let classes = createComputerHierarchy();
let Computer = classes.Computer;
let Laptop = classes.Laptop;
let Desktop = classes.Desktop;
let Monitor = classes.Monitor;
let Battery = classes.Battery;
let Keyboard = classes.Keyboard;

let battery = new Battery('Energy', 3);
console.log(battery);
let laptop = new Laptop("Hewlett Packard", 2.4, 4, 0.5, 3.12, "Silver", battery);
console.log(laptop);