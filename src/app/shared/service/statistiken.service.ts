import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {StatistikHistorie} from "../model/statistik-historie";

@Injectable({
  providedIn: 'root'
})
export class StatistikenService {

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
  private readonly baseURL;

  constructor(private http: HttpClient) {
    this.baseURL = environment.baseUrl;
  }

  getHistorisierteDaten(): Observable<StatistikHistorie[]> {
    return this.http.get<StatistikHistorie[]>(this.baseURL + 'stats/durchschnitthistorie');
  }
}
