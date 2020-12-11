import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent {
  private choiceAmount = 1519.0;

  constructor(private router: Router) { }

  onClickNext() {
    this.router.navigate(['/end']);
  }
}
