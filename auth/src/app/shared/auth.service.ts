import {User} from "./user.interface";
import {Injectable} from "@angular/core";
import {Router} from "@angular/router";

declare var firebase: any; // zaspokajamy w ten sposob typescript

@Injectable()
export class AuthService {
    constructor(private router: Router){

    }

    signupUser(user: User){
        firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
        });
    }

    signinUser(user: User){
        firebase.auth().signInWithEmailAndPassword(user.email, user.password).catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
        });
    }

    logout(){
        firebase.auth().signOut();
        this.router.navigate(['/signin']);
    }

    isAuthenticated(){
        return !!firebase.auth().currentUser;
    }
}