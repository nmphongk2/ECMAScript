class Entity {
    constructor(name, delay) {
        this.name = name;
        this.delay = delay;
    }

    greet = () => {
        setTimeout(() => {
            console.log('Xin chào, tên tôi là ', this.name);
        }, this.delay);
    }
}

const java = new Entity('Java', 5000);
const cpp = new Entity('C++', 30);

java.greet();
cpp.greet();
