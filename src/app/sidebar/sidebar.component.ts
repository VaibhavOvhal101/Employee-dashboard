import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],

})
export class SidebarComponent implements OnInit {
  sidebarVisible: boolean
  bntStyle: string;
  toggle: boolean = false;
  rotate: boolean

  ngOnInit(): void {
    // var x = document.getElementById("mySidebar");
  }
  openNav(): void {
    this.toggle ? this.toggle = false : this.toggle = true;
  }

}
