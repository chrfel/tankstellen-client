import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {Tankstelle} from '../model/tankstelle';

@Injectable({
  providedIn: 'root'
})
export class TankstelleService {

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
  private readonly baseURL;

  constructor(private http: HttpClient) {
    this.baseURL = environment.baseUrl;
  }

  getAlleTankstellen(): Observable<Tankstelle[]> {
    return this.http.get<Tankstelle[]>(this.baseURL + 'tankstelle/alle');
  }
}
