const UserDao = require('./UserDao');

class UserService {
    constructor() {
        if (!UserService._instance) {
            UserService._instance = this;
        }
        return UserService._instance;
    }

    userDao = new UserDao();

    registerUser(phone, name, pinCode, gender) {
        if (!phone || phone <= 0) {
            console.log("Phone number can not be null\n");
            return null;
        }
        else if (!pinCode || pinCode <= 0) {
            console.log("invalid value for pinCode\n");
            return null;
        }
        else if (!name) {
            console.log("invalid value for name\n");
            return null;
        }
        return this.userDao.registerUser(phone, name, pinCode, gender);
    }

    login(id) {
        return this.userDao.login(id);
    }
}


module.exports = UserService;