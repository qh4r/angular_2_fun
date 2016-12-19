import {Component, OnInit, OnDestroy} from '@angular/core';
import {HttpService} from "./http.service";
import {Subscription, Observable} from "rxjs";
import {Response} from "@angular/http";
import {User} from "./user";

@Component({
  selector: 'pg-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css'],
  providers: [HttpService]
})
export class HttpComponent implements OnInit, OnDestroy {
  private urlSubscription: Subscription;
  private postSubscription: Subscription;
  private userDataSubscription: Subscription;
  private userData: Array<User> = [];

  constructor(private httpService: HttpService) {
  }

  test = '';
  asyncTest : Observable<any> | Promise<any> = null;

  onFetch(){
    this.asyncTest = this.httpService.getData();
  }

  ngOnInit() {
    this.urlSubscription = this.httpService
      .getData().subscribe((x: any) => this.test = x);
  }

  onSubmit(username: string, email: string) {
    this.postSubscription = this.httpService.sendUserData(new User(username, email))
      .subscribe(console.log);
  }

  onGetUsersData() {
    this.userDataSubscription = this.httpService.getUserData()
      .subscribe(x => {
        this.userData = x;
        console.log(x);
      });
  }

  ngOnDestroy(): void {
    this.urlSubscription.unsubscribe();
    this.postSubscription.unsubscribe();
    this.userDataSubscription.unsubscribe();
  }

}
