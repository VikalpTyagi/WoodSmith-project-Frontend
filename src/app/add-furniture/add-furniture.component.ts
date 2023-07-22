import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FurnitureService } from '../service/furniture.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-furniture',
  templateUrl: './add-furniture.component.html',
  styleUrls: ['./add-furniture.component.css']
})
export class AddFurnitureComponent implements OnInit {

  constructor(private fb: FormBuilder, private furnitureService: FurnitureService, private router: Router, private ar: ActivatedRoute) { }

  furnitureFg = this.fb.group({
    id:['', Validators.required],
    name: ['', Validators.required],
    price: ['', Validators.required]
  })

  ngOnInit(): void {
    this.ar.paramMap.subscribe(params => {
      let id = params.get('id');
      this.furnitureService.getOneFurniture(id).subscribe((data: any) => {
        this.furnitureFg.setValue({id:data.id,name: data.name, price: data.price})
      })
    })
  }                         

  onSave() {
    let id = this.furnitureFg.get('id')?.value;
      this.furnitureService.addFurniture(this.furnitureFg.value).subscribe(() => alert("Furniture Added Successfully!"))
      //  this.router.navigateByUrl("/edit-furniture")
    
    if(id!=null){
      this.furnitureService.editFurniture(this.furnitureFg.get('id')?.value, this.furnitureFg.value).subscribe(() => {
        alert("updated")
       this.router.navigateByUrl("/edit-furniture")
      })
    }

  }

}
