import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent {

  artista: any = {};
  tracks: any = [];
  loading: boolean;

  constructor(private activated_route: ActivatedRoute, private spotify: SpotifyService) {
    this.loading = true;
    this.activated_route.params.subscribe(params => {
        this.getArtista(params['id']);
        this.getTopTracks(params['id']);
    });
  }

  getArtista(id: string) {
    this.spotify.getArtista(id).subscribe(artista => {
      console.log(artista);
      this.artista = artista;
      this.loading = false;
    });
  }

  getTopTracks(id: string) {
    this.spotify.getTopTracks(id).subscribe(tracks => {
      console.log(tracks);
      this.tracks = tracks;
      this.loading = false;
    });
  }
}
