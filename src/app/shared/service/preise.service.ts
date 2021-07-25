import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {Preise} from '../model/preise';

@Injectable({
  providedIn: 'root'
})
export class PreiseService {

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
  private readonly baseURL;

  constructor(private http: HttpClient) {
    this.baseURL = environment.baseUrl;
  }

  getAktuellerPreisFuerTankstelle(tankstelleId: string): Observable<Preise> {
    return this.http.get<Preise>(this.baseURL + 'preise/aktuell/' + tankstelleId);
  }
}
