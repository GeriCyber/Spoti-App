import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAlSTBjqzy1k_yCd37Qu_VcQFAzU66bH6R3k7Mq8OnsYiGthkMBS9uuEU2U9fHe8ltwOm424sSrCmkd_u4'
    });

    return this.http.get(url, {headers});
  }

  getNewReleases() {
    // const headers = new HttpHeaders({
    //   'Authorization': 'Bearer BQAtSTlG7VsWbwKbU74akeDoXClfShLvLbzn_BwQJag14mgc-Y159R6fsoYOMs3B82d0c47rW6zvh-oTVr8'
    // });

    // return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', {headers})
    // .pipe(map(data => data['albums'].items ));

    return this.getQuery('browse/new-releases?limit=20')
          .pipe(map(data => data['albums'].items ));
  }

  getArtistas(text: string) {
    // const headers = new HttpHeaders({
    //   'Authorization': 'Bearer BQAtSTlG7VsWbwKbU74akeDoXClfShLvLbzn_BwQJag14mgc-Y159R6fsoYOMs3B82d0c47rW6zvh-oTVr8'
    // });

    // return this.http.get(`https://api.spotify.com/v1/search?query=${text}&type=artist&market=US&offset=0&limit=5`, {headers})
    // .pipe(map(data => data['artists'].items));

    return this.getQuery(`search?query=${text}&type=artist&market=US&offset=0&limit=5`)
          .pipe(map(data => data['artists'].items));
  }

  getArtista(id: string) {
    return this.getQuery(`artists/${id}`);
    // .pipe(map(data => data));
  }

  getTopTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=us`)
          .pipe(map(data => data['tracks']));
  }
}
