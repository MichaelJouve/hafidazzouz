import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

sideMenu = true;

  constructor() { }

  ngOnInit() {
    // hide sideBar
    if (window.screen.width <= 767) {
      this.sideMenu = false;
    }
  }

}
