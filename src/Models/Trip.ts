export default class Trip {

    tripId : number;
    country : string;
    city : string;
    arrivalDate : Date;
    departureDate : Date;
    longitude : number;
    latitude : number;
    userId : number;



    constructor(tripId : number,country : string,city : string,arrivalDate : Date,departureDate : Date,longitude: number,latitude : number,userId : number){
        this.tripId = tripId;
        this.country = country;
        this.city = city;
        this.arrivalDate = arrivalDate;
        this.departureDate = departureDate;
        this.longitude = longitude || null;
        this.latitude = latitude || null;
        this.userId = userId;
    }

    getTripId(){
        return this.tripId;
    }

    setTripId(tripId: number){
        this.tripId = tripId;
    }

    getCountry(){
        return this.country;
    }

    setCountry(country: string){
        this.country = country;
    }

    getCity(){
        return this.city;
    }

    setCity(city: string){
        this.city =city;
    }

    getArrivalDate(){
        return this.arrivalDate;
    }

    setArrivalDate(arrivalDate: Date){
        this.arrivalDate = arrivalDate;
    }

    getDepartureDate(){
        return this.departureDate;
    }

    setDepartureDate(departureDate: Date){
        this.departureDate = departureDate;
    }

    getLongitude(){
        return this.longitude;
    }

    setLongitude(longitude: number){
        this.longitude = longitude;
    }

    getLatitude(){
        return this.latitude;
    }

    setLatitude(latitude: number){
        this.latitude = latitude;
    }

    getUserId(){
        return this.userId;
    }

    setUserId(userId: number){
        this.userId = userId;
    }
}