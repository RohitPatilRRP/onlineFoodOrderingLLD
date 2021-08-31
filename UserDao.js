const User = require('./User');
const IDGenerator = require('./IDGenerator');
const Restaurant = require('./Restaurant');
const Review = require('./Review');
const Order = require('./Order');

class UserDao {

    constructor() {
        if (!UserDao._instance) {
            UserDao._instance = this;
        }
        return UserDao._instance;

    }

    loggedInUser = null;
    userHashMap = new Map();
    phoneNumberMap = new Map();
    restaurantNameMap = new Map();
    _IDGenerator = new IDGenerator();

    registerUser(phone, name, pinCode, gender) {
        if (this.phoneNumberMap.get(phone)) {
            const user = this.userHashMap.get(this.phoneNumberMap.get(phone));
            console.log("User already exist with phone number " + phone + " with user id : " + user.getId() + "\n");
            return user;
        }
        const user = new User(this._IDGenerator.getId(), phone, name, pinCode, gender);
        this.phoneNumberMap.set(phone, user.getId());
        this.userHashMap.set(user.getId(), user);
        console.log("Successfully created user with user id:" + user.getId() + "\n");
        return user;
    }

    login(phone) {
        if (!this.phoneNumberMap.get(phone)) {
            console.log("No user exists with phone " + phone);
            return null;
        }
        const user = this.userHashMap.get(this.phoneNumberMap.get(phone));
        this.loggedInUser = user;
        console.log("Successfully logged in  user with user id" + user.getId() + "\n");
        return user;
    }

    registerRestaurant(name, pinCodes, item, price, quantity) {
        if (!this.loggedInUser) {
            console.log("No logged in user found,request can't be served\n");
            return null;
        }
        if (this.restaurantNameMap.get(name)) {
            console.log("Restaurant already exist with given name, please give unique name\n");
            return null;
        }
        const pinCodeList = pinCodes.split(",");
        const pins = [];
        if (pinCodes) {
            for (let s in pinCodeList) {
                pins.push(s);
            }
        }
        const restaurant = new Restaurant();
        restaurant.setId(this._IDGenerator.getId());
        restaurant.setName(name);
        restaurant.setItem(item);
        restaurant.setQuantity(quantity);
        restaurant.setPrice(price);
        restaurant.setServiceablePincode(pins);
        restaurant.setCreatedBy(this.loggedInUser.getId());
        this.restaurantNameMap.set(name, restaurant);
        this.loggedInUser.getRestaurants().push(restaurant);
        console.log("Successfully registered restaurant  id" + restaurant.getId() + "\n");
        return restaurant;
    }

    rateRestaurant(name, rating, comment) {
        const restaurant = this.restaurantNameMap.get(name);
        if (restaurant == null) {
            console.log("No restaurant found with given name " + name);
            return null;
        }
        if (this.loggedInUser.getId() != restaurant.getCreatedBy()) {
            console.log("Logged in user is not the owner of the restaurant");
            return null;
        }
        const review = new Review();
        review.setId(this._IDGenerator.getId());
        review.setComment(comment);
        review.setScore(rating);
        if (!restaurant.getReviews() || restaurant.getReviews().length == 0) {
            restaurant.setRating(rating);
        } else {
            const currentScore = (restaurant.getRating() * restaurant.getReviews().length + rating) / (restaurant.getReviews().length + 1);
            restaurant.setRating(currentScore);
        }
        restaurant.getReviews().push(review);
        return review;
    }

    updateQuantity(name, quantity) {
        const restaurant = this.restaurantNameMap.get(name);
        if (!restaurant) {
            console.log("No restaurant found with given name " + name);
            return null;
        }
        if (this.loggedInUser.getId() != restaurant.getCreatedBy()) {
            console.log("Logged in user is not the owner of the restaturant");
            return null;
        }
        restaurant.setQuantity(restaurant.getQuantity() + quantity);
        return restaurant;
    }

    placeOrder(name, quantity) {
        const restaurant = this.restaurantNameMap.get(name);
        if (restaurant == null) {
            console.log("No restaurant found with given name " + name);
            return null;
        }
        if (this.loggedInUser.getId() != restaurant.getCreatedBy()) {
            console.log("Logged in user is not the owner of the restaurant");
            return null;
        }
        if (restaurant.getQuantity() == 0) {
            console.log("restaurant is out of stock, please try later");
            return null;
        }
        if (restaurant.getQuantity() < quantity) {
            console.log("Restaurant has only" + restaurant.getQuantity() + " Items, please check your cart");
            return null;
        }
        const order = new Order();
        order.setId(this._IDGenerator.getId());
        order.setItem(restaurant.getItem());
        order.setQuantity(quantity);
        order.setUserId(this.loggedInUser.getId());
        order.setTimestamp(new Date().getTime());
        order.setCost((quantity * restaurant.getPrice()));
        restaurant.setQuantity(restaurant.getQuantity() - quantity);
        this.loggedInUser.getOrders().push(order);
        return order;
    }

    listOrders() {
        for (let order of this.loggedInUser.getOrders()) {
            console.log("Order id :" + order.getId() + " item:" + order.getItem() + " quantity:" + order.getQuantity() + " cost:" + order.getCost());
        }
        return this.loggedInUser.getOrders();
    }

    showRestaurant(sortBy) {
        const r = this.loggedInUser.getRestaurants();
        const restaurants = [];
        for (let restaurant of r) {
            if (restaurant.getServiceablePincode().includes(this.loggedInUser.getPinCode()) && restaurant.getQuantity() > 0) {
                restaurants.push(restaurant);
            }
        }
        if (sortBy == "rating") {
            restaurants.sort(function (a, b) { return b.getRating() - a.getRating(); });
            for (let restaurant of restaurants) {
                console.log("Restaurant id :" + restaurant.getId() + ": name-> " +
                    restaurant.getName() + ": price-> " + restaurant.getPrice() + ": rating -> " + restaurant.getRating());
            }
            return restaurants;
        }
        //by default price
        restaurants.sort(function (a, b) { return b.getPrice() - a.getPrice(); });
        for (let restaurant of restaurants) {
            console.log("Restaurant id :" + restaurant.getId() + ": name-> " +
                restaurant.getName() + ": price-> " + restaurant.getPrice() + ": rating -> " + restaurant.getRating());
        }
        return restaurants;
    }
}

module.exports = UserDao;