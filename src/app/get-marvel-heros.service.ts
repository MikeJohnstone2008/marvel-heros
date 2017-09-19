import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class GetMarvelHerosService {
  private baseUrl: string  = "http://gateway.marvel.com/v1/public/characters?ts=1&apikey=71f78dd391154dd45725d3736de42128&hash=e9009f9030599cba0deac8952a0621bf&limit=50"
  
  constructor(private http: Http) { }

  getHeroInfo(): Observable<any> {
    console.log("the Heros svc was called!")
    return this.http.get(this.baseUrl)
      .map(result => {
        return result.json()
      })
  }

}
// @Injectable()
// export class JeopardyService {

//   private baseUrl: string = "http://jservice.io/api/random";

//   constructor(private http: Http) { }

//   getQuestionInfo(): Observable<any> {

//     return this.http.get(this.baseUrl)
//       .map(result => {
//         return result.json()
//       })

//   }
// }