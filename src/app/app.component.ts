import { Component, OnInit } from '@angular/core';
import { GetMarvelHerosService } from './get-marvel-heros.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  heroArray;

  //this is instantiating the GetMarvelHerosService and putting
  //in a property called marvelLibrary
  //now we can use marvelLibrary to run methods on the service
  constructor(private marvelLibrary: GetMarvelHerosService){}

  getHeros(){
    this.marvelLibrary.getHeroInfo()
      .subscribe(res => {
        console.log(res.data.results)
        this.heroArray = res.data.results;
      })
  }

  ngOnInit(){
    this.getHeros()
  }

  //this method is here to respond to the event emitted from the child
  //component on a search. This is being called from line 1 of app.component.html
  //in response to the searchValue event being emitted from the child
  searchHero(searchValue){
    this.marvelLibrary.getHeroInfo(searchValue)
    .subscribe(res => {
      console.log(res.data.results)
      this.heroArray = res.data.results;
    })
    //I don't know what I'm doing here logically...I want to pass in the search value to append to the URL and return the hero
  }
}