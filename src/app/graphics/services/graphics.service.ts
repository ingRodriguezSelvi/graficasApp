import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map, pipe } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GraphicsService {
  constructor(private http: HttpClient) {}

  getUserSocialMedia() {
    return this.http.get('http://localhost:3000/grafica');
  }

  getUserSocialMedia2() {
    return this.getUserSocialMedia().pipe(
      delay(1000),
      map((resp) => {
        const data  : number[] = Object.values( resp );
        const label : string[] = Object.keys( resp );

        return{ data, label };
      })
    );
  }
}
