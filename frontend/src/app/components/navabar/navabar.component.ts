import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'dk-navabar',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatMenuModule, RouterModule],
  templateUrl: './navabar.component.html',
  styleUrl: './navabar.component.css'
})
export class NavabarComponent {

}
