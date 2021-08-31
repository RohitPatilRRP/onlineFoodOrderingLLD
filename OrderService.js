const UserDao = require('./UserDao');

class OrderService {

    constructor() {
        if (!OrderService._instance) {
            OrderService._instance = this;
        }
        return OrderService._instance;
    }

    userDao = new UserDao();

    placeOrder(name, quantity) {
        if (quantity <= 0) {
            console.log("Invalid value for mandatory fields");
            return null;
        }
        return this.userDao.placeOrder(name, quantity);
    }

    listOrders() {
        return this.userDao.listOrders();
    }

}

module.exports = OrderService;