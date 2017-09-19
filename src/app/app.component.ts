import { Component, OnInit } from '@angular/core';
import { GetMarvelHerosService } from './get-marvel-heros.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  heroArray;

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
}
// export class AppComponent implements OnInit{
//   answer: string;
//   questionInfo;
//   score: number = 0;
  
//     constructor(private jeopardyService: JeopardyService){}
  
//     getDataFromService(){
//       this.jeopardyService.getQuestionInfo()
//         .subscribe(
//           questionInfo => {
//             this.questionInfo = questionInfo[0];
//           }
//         )
//     }
//     ngOnInit(){
//       this.getDataFromService()
//     }