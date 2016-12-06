import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'r-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  private msg;
  private querySubscription : Subscription;

  constructor(private activeRoute: ActivatedRoute) { }

  public get secret(){
    return this.msg;
  }

  ngOnDestroy(): void {
    this.querySubscription.unsubscribe();
  }

  ngOnInit() {
    this.querySubscription = this.activeRoute.queryParams
      .subscribe((params : any) => {this.msg = params['notSecret']});
  }

}
