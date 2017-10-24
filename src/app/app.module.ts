import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { AccountsService } from './accounts.service';
import { LoggingService } from './logging.service';

//if you inject a service into a component that instance is available to that component and all of it's children
//and all of it's children's children.
// this means that injecting it into the app.module will make the instance available to the
// entire app.

//if a service is injected into the app component (not the app module) then the instance
// application-wide but not available to other services.

//An instance of a class simply is a copy which was created using the class as a blueprint.

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    NewAccountComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [AccountsService, LoggingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
