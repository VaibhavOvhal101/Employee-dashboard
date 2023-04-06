import { style, transition } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  sidebarVisible: boolean

  /* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
  openNav(): void {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }

  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
  closeNav(): void {
    document.getElementById("mySidebar").style.width = "0";

    document.getElementById("main").style.marginLeft = "0";
  }

}
