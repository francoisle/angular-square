import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {SquareContainerComponent} from './square-container/square-container.component';
import {SquareHistoryComponent} from './square-history/square-history.component';
import {LastSquareComponent} from './last-square/last-square.component';
import { GreenSquareComponent } from './green-square/green-square.component';
import { BlueSquareComponent } from './blue-square/blue-square.component';
import { YellowSquareComponent } from './yellow-square/yellow-square.component';
import { RedSquareComponent } from './red-square/red-square.component';
import { SquareComponent } from './square/square.component';

@NgModule({
  declarations: [
    AppComponent,
    SquareContainerComponent,
    SquareHistoryComponent,
    LastSquareComponent,
    GreenSquareComponent,
    BlueSquareComponent,
    YellowSquareComponent,
    RedSquareComponent,
    SquareComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
