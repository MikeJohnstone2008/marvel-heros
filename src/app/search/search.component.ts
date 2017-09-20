import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output() searchValue = new EventEmitter();

  search: string = '';
  constructor() { }

  ngOnInit() {
  }

  //called on line 5 of search.component.html for the button click
  submitSearch(){
    //lets emit this event we created on line 10 up to the parent
    //we catch this event in app.component.html and tell it what method
    //in the parent we want to run. This is happening on line 1 of app.component.html
    //we are saying to run searchHero on the parent.
    this.searchValue.emit(this.search);
    // console.log(search)
  }

}

