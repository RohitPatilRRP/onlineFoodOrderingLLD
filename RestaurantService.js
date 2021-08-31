const UserDao = require('./UserDao');

class RestaurantService {

    constructor() {
        if (!RestaurantService._instance) {
            RestaurantService._instance = this;
        }
        return RestaurantService._instance;
    }

    userDao = new UserDao();

    registerRestaurant(name, pinCodes, item, price, quantity) {
        if (price <= 0 || quantity < 0) {
            console.log("Invalid value for mandatory fields");
            return null;
        }
        else if (!name) {
            console.log("invalid value for name");
            return null;
        }
        return this.userDao.registerRestaurant(name, pinCodes, item, price, quantity);
    }

    rateRestaurant(name, rating, comment) {
        if (rating == null || rating <= 0 || rating > 5) {
            console.log("Invalid value for mandatory fields");
            return null;
        }
        return this.userDao.rateRestaurant(name, rating, comment);
    }

    updateQuantity(name, quantity) {
        if (quantity <= 0) {
            console.log("Invalid value for mandatory fields");
            return null;
        }
        return this.userDao.updateQuantity(name, quantity);
    }
    
    showRestaurant(sortBy) {
        return this.userDao.showRestaurant(sortBy);
    }
}

module.exports = RestaurantService;