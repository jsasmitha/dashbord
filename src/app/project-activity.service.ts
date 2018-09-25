import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import { map,catch } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProjectActivityService {


  constructor(private http: Http) { }


getJSON(): Observable<any> {
 return this.http.get("../assets/project-activity.json")
 .pipe(
        map((res:any) => res.json())
    );
                        

     }


getProjectActivityData():Promise<any>{
 return new Promise((resolve, reject) =>{
this.getJSON().subscribe(data =>{

resolve(data);
console.log(data);}, error => console.log(error));
});
}


}
