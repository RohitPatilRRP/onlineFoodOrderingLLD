class Order {
    id;
    restaurantId;
    userId;
    quantity;
    item;
    timestamp;
    cost;

    getCost() {
        return this.cost;
    }

    setCost(_cost) {
        this.cost = _cost;
    }

    getId() {
        return this.id;
    }

    setId(_id) {
        this.id = _id;
    }

    getRestaurantId() {
        return this.restaurantId;
    }

    setRestaurantId(_restaurantId) {
        this.restaurantId = _restaurantId;
    }

    getUserId() {
        return this.userId;
    }

    setUserId(_userId) {
        this.userId = _userId;
    }

    getQuantity() {
        return this.quantity;
    }

    setQuantity(_quantity) {
        this.quantity = _quantity;
    }

    getItem() {
        return this.item;
    }

    setItem(_item) {
        this.item = _item;
    }

    getTimestamp() {
        return this.timestamp;
    }

    setTimestamp(_timestamp) {
        this.timestamp = _timestamp;
    }
}


module.exports = Order;
