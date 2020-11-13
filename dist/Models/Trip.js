"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Trip {
    constructor(tripId, country, city, arrivalDate, departureDate, longitude, latitude, userId) {
        this.tripId = tripId;
        this.country = country;
        this.city = city;
        this.arrivalDate = arrivalDate;
        this.departureDate = departureDate;
        this.longitude = longitude || null;
        this.latitude = latitude || null;
        this.userId = userId;
    }
    getTripId() {
        return this.tripId;
    }
    setTripId(tripId) {
        this.tripId = tripId;
    }
    getCountry() {
        return this.country;
    }
    setCountry(country) {
        this.country = country;
    }
    getCity() {
        return this.city;
    }
    setCity(city) {
        this.city = city;
    }
    getArrivalDate() {
        return this.arrivalDate;
    }
    setArrivalDate(arrivalDate) {
        this.arrivalDate = arrivalDate;
    }
    getDepartureDate() {
        return this.departureDate;
    }
    setDepartureDate(departureDate) {
        this.departureDate = departureDate;
    }
    getLongitude() {
        return this.longitude;
    }
    setLongitude(longitude) {
        this.longitude = longitude;
    }
    getLatitude() {
        return this.latitude;
    }
    setLatitude(latitude) {
        this.latitude = latitude;
    }
    getUserId() {
        return this.userId;
    }
    setUserId(userId) {
        this.userId = userId;
    }
}
exports.default = Trip;
//# sourceMappingURL=Trip.js.map