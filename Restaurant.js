class Restaurant {

    id;
    name;
    item;
    price;
    serviceablePincode;
    quantity;
    rating;
    reviews = [];
    createdBy;

    constructor() { }

    getCreatedBy() {
        return this.createdBy;
    }

    setCreatedBy(_createdBy) {
        this.createdBy = _createdBy;
    }

    getRating() {
        return this.rating;
    }

    setRating(_rating) {
        this.rating = _rating;
    }

    getReviews() {
        return this.reviews;
    }

    setReviews(_reviews) {
        this.reviews = _reviews;
    }

    getQuantity() {
        return this.quantity;
    }

    setQuantity(_quantity) {
        this.quantity = _quantity;
    }

    getId() {
        return this.id;
    }

    setId(_id) {
        this.id = _id;
    }

    getName() {
        return this.name;
    }

    setName(_name) {
        this.name = _name;
    }

    getItem() {
        return this.item;
    }

    setItem(_item) {
        this.item = _item;
    }

    getPrice() {
        return this.price;
    }

    setPrice(_price) {
        this.price = _price;
    }

    getServiceablePincode() {
        return this.serviceablePincode;
    }

    setServiceablePincode(_serviceablePincode) {
        this.serviceablePincode = _serviceablePincode;
    }
}

module.exports = Restaurant;