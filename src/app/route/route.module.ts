import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from '../app.component';
import { SubpageComponent } from '../subpage/subpage.component';

const routes:Routes=[
  {path: 'home', component: AppComponent},
  {path: 'subpage', component: SubpageComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
  declarations: []
})
export class RouteModule { }
