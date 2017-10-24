import { Component } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService, AccountsService] // 2) this tells angular how to use the service
})
export class NewAccountComponent {

  // 1
  //REQUIRED: need to add private variablde of type 'LoggingService' to tell angular
  // that we are going to use this service.
  constructor(private loggingService: LoggingService,
              private accountsService: AccountsService){

  }

  onCreateAccount(accountName: string, accountStatus: string) {


    // 3) after our LoggingService is provided, we can now access the methods in our service
    this.accountsService.addAccount(accountName, accountStatus);
    this.loggingService.logStatusChange(accountStatus);

  }
}
