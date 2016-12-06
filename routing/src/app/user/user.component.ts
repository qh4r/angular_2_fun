import {Component, OnInit, OnDestroy} from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'r-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  private selectedId;
  private subscription: Subscription;

  get activeUserId() {
    return this.selectedId;
  }

  onNavigate() {
    //nawigacja w kodzie
    this.router.navigate(['/'], {queryParams: {
      notSecret: 'tajemnica'
    }});
  }

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe(); // unikamy memory leaku
  }

  ngOnInit() {
    // this.selectedId = this.activatedRoute.snapshot.params['id'];

    //to powoduje subskrybcje przy kazdym inicie - trzeba odsubskrybowac
    this.subscription = this.activatedRoute.params.subscribe((params: any) => this.selectedId = params['id']);
    // jesli przenaigowywujemy po 1 elemencie to potrzebujemy reagowac na zmiany na observablu
  }
}
