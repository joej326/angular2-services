import { Component, OnInit } from '@angular/core';

import { AccountsService } from './accounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    accounts: {name: string, status: string}[] = [];

    constructor(private accountsService: AccountsService) {}

    //Mostly we use ngOnInit for all the initialization/declaration and avoid stuff to work in the constructor.
    // The constructor should only be used to initialize class members but shouldn't do actual "work".
    //So you should use constructor() to setup Dependency Injection and not much else.
    //ngOnInit() is better place to "start" - it's where/when components' bindings are resolved.
    ngOnInit(){
      this.accounts = this.accountsService.accounts;
    }
}
