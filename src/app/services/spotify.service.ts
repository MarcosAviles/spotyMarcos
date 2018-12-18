import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class SpotifyService {
  clave:string='Bearer BQCTZdzjFIEF5U4yECkrZsNq6yyrm2gSMYwmC7vUWpfdoNoBc0BLwSqKHLSbhqrL7zs5mJuWXs4XL33LjdI';

  constructor(private http: HttpClient) { 
    console.log('listo');
  }

  getNewReleases(){
    const headers= new HttpHeaders({
      'Authorization': this.clave
    });
    return this.http.get('https://api.spotify.com/v1/browse/new-releases',{headers}).pipe( map( data => 
       data['albums'].items
    ));
  }

  getArtista(termino:string){
    const headers= new HttpHeaders({
      'Authorization': this.clave
    });
    return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`,{headers}).pipe( map( data => 
      data['artists'].items
    ));
  }
}
