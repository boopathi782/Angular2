import { Injectable } from '@angular/core';

import { catchError } from 'rxjs/internal/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

const endpoint = 'http://localhost:3600/api/tutorials/';

//http://localhost:8080/api/tutorials/getalldata
//http://localhost:8080/api/tutorials/create

export interface Appointment {
  _id: string;
  name: string;
  time: string;
//  prod_price: number;
  date: Date;
}




@Injectable({
  providedIn: 'root',
})

export class ApiService {

  constructor(private http: HttpClient) { }


   // Http Options
   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  } 


  getAll(check_date): Observable<any> {
    return this.http.get<Appointment>(endpoint + 'getalldata/' + check_date).pipe(
      map((result) => {
        //console.log(result)
         return result;
      })
      //catchError(this.handleError)
    );
  }

   // HttpClient API post() method => Create Slot
   createSlot(Slotdata): Observable<any> {
      return this.http.post<any>(endpoint + 'create', JSON.stringify(Slotdata), this.httpOptions).pipe(catchError(this.handleError));
    } 



  private extractData(res: Response): any {
    const body = res;
    return body || { };
  }
  
  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }

  
}

