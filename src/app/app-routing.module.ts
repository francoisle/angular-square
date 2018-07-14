import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {BlueSquareComponent} from './blue-square/blue-square.component';
import {GreenSquareComponent} from './green-square/green-square.component';
import {RedSquareComponent} from './red-square/red-square.component';
import {YellowSquareComponent} from './yellow-square/yellow-square.component';

const routes: Routes = [
  {path: 'lightBlue-square', component: BlueSquareComponent},
  {path: 'green-square', component: GreenSquareComponent},
  {path: 'red-square', component: RedSquareComponent},
  {path: 'yellow-square', component: YellowSquareComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule {}
