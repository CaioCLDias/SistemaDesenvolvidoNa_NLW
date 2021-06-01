import { Component } from '@angular/core';
import{View, EventSettingsModel} from '@syncfusion/ej2-angular-schedule';
import{DataManager, WebApiAdaptor} from '@syncfusion/ej2-data';

@Component({
  selector: 'app-root',
  template: '<ejs-schedule [eventSettings] = "eventObject" [selectedDate] = "setDate" [currentView] = "setView">    </ejs-schedule>',
  //templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Agendamentos';
  public setView: View = 'WorkWeek';
  public setDate: Date = new Date(2021, 5, 31 );
  public eventObject: EventSettingsModel = {
    dataSource: [{
      id: 1,
      Subject: "Paciente 1",
      StartTime: new Date(2021,5,5,8,0),
      EndTime: new Date(2021,5,5,8,30)
    }]
  }
}
