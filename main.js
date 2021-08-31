const UserService = require('./UserService');
const RestaurantService = require('./RestaurantService');
const OrderService = require('./OrderService');


class mainClass {

    constructor() {
        console.log("Execution started");

        const userService = new UserService();
        const restaurantService = new RestaurantService();
        const orderService = new OrderService();

        const user1 = userService.registerUser('9898989891', "Pralove", '1', "MALE");
        const user2 = userService.registerUser('9898989892', "User_b", '2', "MALE");
        const user3 = userService.registerUser('9898989893', "User_c", '3', "MALE");


        let logIn = userService.login(user1.getPhone());
        let r1 = restaurantService.registerRestaurant("r_a", "1,2,4", "pizza", 100, 10);
        const r2 = restaurantService.registerRestaurant("r_b", "1,4", "burger", 50, 15);
        r1 = restaurantService.updateQuantity("r_a", 5);

        logIn = userService.login(user2.getPhone());
        const r4 = restaurantService.registerRestaurant("r_d", "3,4", "burger", 50, 15);

        logIn = userService.login(user1.getPhone());
        restaurantService.showRestaurant("rating");
        orderService.placeOrder("r_a", 5);
        restaurantService.rateRestaurant("r_a", 5, "good");
        restaurantService.rateRestaurant("r_a", 2, "no so good");
        restaurantService.rateRestaurant("r_b", 4, "ok good");
        orderService.listOrders();
        restaurantService.showRestaurant("rating");

        console.log("ended..");
    }
}

(() => {
    new mainClass();
})()