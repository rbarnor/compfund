import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ScoresService {
  constructor(private http: HttpClient) { }

  getScores(){
    return this.http.get("api/event/events")
  }

  getSingleScore(id:number){   
    return this.http.get(`/event/events/${id}/`)
  }
}




