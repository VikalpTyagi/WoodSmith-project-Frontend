import { Component, OnInit } from '@angular/core';
import { Furniture } from '../Furniture';
import { FurnitureService } from '../service/furniture.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-furniture',
  templateUrl: './edit-furniture.component.html',
  styleUrls: ['./edit-furniture.component.css']
})
export class EditFurnitureComponent implements OnInit {

  furnitureList!: Furniture[];

  onSearchTextChanged(searchText1: string){
    this.furnitureList=this.furnitureList.filter(x=>x.name?.toLowerCase().startsWith(searchText1.toLowerCase()));
  
  }
  constructor(private furnitureService: FurnitureService, private ar:ActivatedRoute) { }

  ngOnInit(): void {
    // this.dislay();
    this.ar.paramMap.subscribe(param=>{
      let id=param.get('id');
      if(id!=null){
        this.furnitureService.deleteFurniture(id).subscribe(()=>{
          alert("Furniture deleted!")
          this.dislay();
        })
      }
      else{
        this.dislay();
      }
    })
    
  }                                                                     

  dislay(){
    this.furnitureService.getAllFurniture().subscribe(data=>{
      this.furnitureList = data;
    }); 
  }


  
}
