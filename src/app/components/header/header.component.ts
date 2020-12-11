import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  private blueCurrentHeader = 'Blue Current';
  private motorhuisHeader = 'Powered by Motorhuis';
}
