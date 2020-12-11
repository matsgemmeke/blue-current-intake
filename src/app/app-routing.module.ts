import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionComponent } from './components/question/question.component';
import { EndComponent } from './components/end/end.component';

const routes: Routes = [
  { path: '', component: QuestionComponent },
  { path: 'end', component: EndComponent },
  { path: 'question', component: QuestionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
