import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import {retry, catchError} from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})

export class BuscategoryService {

   // Base url
  //  baseurl = 'https://c2f5-114-143-107-6.in.ngrok.io/api/getallbuscategory';
      baseurl = 'https://jsonplaceholder.typicode.com/' //testing

   constructor(private http: HttpClient) { }
 
   // Http Headers
   httpOptions = {
 
     headers: new HttpHeaders({
       'Content-Type': 'application/json',
     },
     ),
 
   };

    // GET
  allBusCategories(): Observable<any> {
    return this.http.get<any>(this.baseurl + '/').pipe(retry(1), catchError(this.errorHandle));
  }

    // GET
    getBookingTime(): Observable<any> {
      return this.http.get<any>(this.baseurl + 'users').pipe(retry(1), catchError(this.errorHandle));
    }

  // Error handling
  errorHandle(error: { error: { message: string; }; status: any; message: any; }) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}
