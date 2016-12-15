import {Component, OnInit, OnDestroy} from '@angular/core';
import {HttpService} from "./http.service";
import {Subscription} from "rxjs";
import {Response} from "@angular/http";

@Component({
  selector: 'pg-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css'],
  providers: [HttpService]
})
export class HttpComponent implements OnInit, OnDestroy {
  private urlSubscription: Subscription;

  constructor(private httpService: HttpService) {
  }

  test = '';

  ngOnInit() {
    this.urlSubscription = this.httpService
      .getData().subscribe((x: Response) => this.test = x.text());
  }

  ngOnDestroy(): void {
    this.urlSubscription.unsubscribe();
  }

}
