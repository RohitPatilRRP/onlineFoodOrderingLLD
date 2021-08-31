class User {

    id;
    name;
    gender;
    phone;
    pinCode;
    restaurants = [];
    orders = [];

    constructor(_id, _phone, _name, _pinCode, _gender) {
        this.id = _id;
        this.name = _name;
        this.gender = _gender;
        this.phone = _phone;
        this.pinCode = _pinCode;
    }

    getOrders() {
        return this.orders;
    }

    setOrders(_orders) {
        this.orders = _orders;
    }

    getRestaurants() {
        return this.restaurants;
    }

    setRestaurants(_restaurants) {
        this.restaurants = _restaurants;
    }

    getId() {
        return this.id;
    }

    setId(id) {
        this.id = id;
    }

    getName() {
        return this.name;
    }

    setName(_name) {
        this.name = _name;
    }

    getGender() {
        return this.gender;
    }

    setGender(_gender) {
        this.gender = _gender;
    }

    getPhone() {
        return this.phone;
    }

    setPhone(_phone) {
        this.phone = _phone;
    }

    getPinCode() {
        return this.pinCode;
    }

    setPinCode(_pinCode) {
        this.pinCode = _pinCode;
    }
}

module.exports = User;