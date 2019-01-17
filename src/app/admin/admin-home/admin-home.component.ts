import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { DatabaseService } from 'src/app/services/database.service';
import { Gallery } from 'src/app/models/gallery.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  // @ViewChild('galleryName')

  constructor(private authService: AuthService, private databaseService: DatabaseService, private snackBar: MatSnackBar) { }

  ngOnInit() {
  }




}
