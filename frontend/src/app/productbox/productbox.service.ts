import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { productItem } from './productbox.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductboxService {
  private options: {
    observe: 'body',
    responseType: 'json',
  }

  constructor(private http: HttpClient) { }

  getProduct(): Observable<productItem[]> {
    // sending a GET request to our localhost backend and receiving a typed response
    return this.http.get<productItem[]>(`http://localhost:3000/get/all`, this.options)
      .pipe(
        // retry(3), // retry a failed request up to 3 times
        catchError(this.handleError) // then handle the error
      );
  }
  
  // copied from google, returns description of error
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
}
