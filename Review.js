class Review {
    id;
    score;
    comment;

    getId() {
        return this.id;
    }

    setId(_id) {
        this.id = _id;
    }

    getScore() {
        return this.score;
    }

    setScore(_score) {
        this.score = _score;
    }

    getComment() {
        return this.comment;
    }

    setComment(comment) {
        this.comment = comment;
    }
}

module.exports = Review;