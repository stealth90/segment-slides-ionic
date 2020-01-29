import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WorldcupService {
  private apiString = 'https://worldcup.sfg.io';
  constructor(private httpClient: HttpClient) { }

  public getMatches(){
    return this.httpClient.get<any[]>(`${this.apiString}/matches`).toPromise();
  }
  public getStanding(){
    return this.httpClient.get<any[]>(`${this.apiString}/teams/group_results`).toPromise();
  }
}
