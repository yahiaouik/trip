"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(userId, firstname, lastname, promo, email, password) {
        this.userId = userId;
        this.firstname = firstname;
        this.lastname = lastname;
        this.promo = promo;
        this.email = email;
        this.password = password;
    }
    getUserId() {
        return this.userId;
    }
    setUserId(userId) {
        this.userId = userId;
    }
    getFirstname() {
        return this.firstname;
    }
    setFirstname(firstname) {
        this.firstname = firstname;
    }
    getLastname() {
        return this.lastname;
    }
    setLastname(lastname) {
        this.lastname = lastname;
    }
    getPromo() {
        return this.promo;
    }
    setPromo(promo) {
        this.promo = promo;
    }
    getEmail() {
        return this.email;
    }
    setEmail(email) {
        this.email = email;
    }
    getPassword() {
        return this.password;
    }
    setPassword(password) {
        this.password = password;
    }
}
exports.default = User;
//# sourceMappingURL=User.js.map