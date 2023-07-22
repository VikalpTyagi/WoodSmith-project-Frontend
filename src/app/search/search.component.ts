import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchText!:string;
  constructor() { }

  ngOnInit(): void {
  }
  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  onSearch():void
  {
    this.searchTextChanged.emit(this.searchText);
  }

}
