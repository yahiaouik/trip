export default class Trip {

    tripId : number;
    country : string;
    countryId: string;
    city : string;
    arrivalDate : Date;
    departureDate : Date;
    status : string;
    userId : number;
    userFirstname: string;
    userLastname: string;
    userPromo : string;

    constructor(tripId : number,country : string, countryId: string, city : string,arrivalDate : Date,departureDate : Date, 
        status: string ,userId : number, userFirstname: string = null, userLastname: string = null, userPromo: string = null){
        this.tripId = tripId;
        this.country = country;
        this.countryId = countryId;
        this.city = city;
        this.arrivalDate = arrivalDate;
        this.departureDate = departureDate;
        this.status = status;
        this.userId = userId;
        this.userFirstname = userFirstname;
        this.userLastname = userLastname;
        this.userPromo = userPromo;
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

    getCountryId(){
        return this.countryId;
    }

    setCountryId(countryId: string){
        this.countryId = countryId;
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

    getStatus(){
        return this.status;
    }

    setStatus(status: string){
        this.status = status;
    }

    getUserId(){
        return this.userId;
    }

    setUserId(userId: number){
        this.userId = userId;
    }
}