import { Component } from '@angular/core';
import{ListViewModule} from '@syncfusion/ej2-angular-lists' ; 
@Component({
  selector: 'app-historique',
  standalone: true,
  imports: [ListViewModule],
  templateUrl: './historique.component.html',
  styleUrl: './historique.component.css'
})
export class HistoriqueComponent {
  public listData : string[]=["azer","qsd","cv","wxcv","ghj","tyu"]
}
