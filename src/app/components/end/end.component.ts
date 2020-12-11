import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-end',
  templateUrl: './end.component.html',
  styleUrls: ['./end.component.css']
})
export class EndComponent {

  featureList = ['Laden met vaste kabel', '5 meter', 'Op een paal', 'Graafwerk', 'Tot 6 meter', 'Geen'];
  totalAmount = 1658;

  constructor(private router: Router) { }

  onSubmitOrder(form: NgForm) {
    console.log(form.value);
  }

  onPreviousClick() {
    this.router.navigate(['/question']);
  }
}
