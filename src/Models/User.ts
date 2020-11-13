export default class User {
    userId : number;
    firstname : string;
    lastname : string;
    promo : string;
    email : string;
    password : string;

    constructor(userId : number,firstname :string ,lastname :string,promo:string,email:string,password:string) {
      this.userId = userId;
      this.firstname = firstname;
      this.lastname = lastname;
      this.promo = promo;
      this.email = email;
      this.password = password;
    }

    getUserId(){
        return this.userId;
    }

    setUserId(userId: number)
    {
        this.userId = userId;
    }

    getFirstname(){
        return this.firstname;
    }

    setFirstname(firstname: string){
        this.firstname = firstname;
    }

    getLastname(){
        return this.lastname;
    }

    setLastname(lastname: string){
        this.lastname = lastname;
    }

    getPromo(){
        return this.promo;
    }

    setPromo(promo: string){
        this.promo = promo;
    }

    getEmail(){
        return this.email;
    }

    setEmail(email: string){
        this.email = email;
    }

    getPassword(){
        return this.password;
    }

    setPassword(password: string){
        this.password = password;
    }

  }
