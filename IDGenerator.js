class IDGenerator {
    static id;
    constructor() {
        this.id = 0;
    }
    getId() {
        this.id++;
        return this.id;
    }
}

module.exports = IDGenerator;