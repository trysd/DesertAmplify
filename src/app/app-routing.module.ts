import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubpageComponent } from './subpage/subpage.component';

const routes: Routes = [
  {
    path: 'subpage', component: SubpageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
