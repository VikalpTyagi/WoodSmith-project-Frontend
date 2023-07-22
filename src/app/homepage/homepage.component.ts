import { Component, OnInit } from '@angular/core';
import { Furniture } from '../Furniture';
import { FurnitureService } from '../service/furniture.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RegistrationService } from '../service/registration.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  furnitureList!: Furniture[];

  onSearchTextChanged(searchText1: string) {
    this.furnitureList = this.furnitureList.filter(x => x.name?.toLowerCase().startsWith(searchText1.toLowerCase()));

  }
  constructor(private furnitureService: FurnitureService, private ar: ActivatedRoute, private snack: MatSnackBar, private rs: RegistrationService, private r: Router) { }

  ngOnInit(): void {
    this.ar.paramMap.subscribe(param => {
      let id = param.get('id');
      if (id != null) {
        this.furnitureService.deleteFurniture(id).subscribe(() => {
          alert("Furniture deleted!")
          this.dislay();
        })
      }
      else {
        this.dislay();
      }
    })

  }

  dislay() {
    this.furnitureService.getAllFurniture().subscribe(data => {
      this.furnitureList = data;
    });
  }
  onAddToCart() {
    if (this.rs.logged) {
      this.snack.open('Item added to Cart', ' Sucessfully!!', {
        duration: 5000,
        // panelClass: ['mat-toolbar', 'mat-primary']
        panelClass: ['color']
      });
    }
    else { this.r.navigateByUrl("/login") }
  }

}
