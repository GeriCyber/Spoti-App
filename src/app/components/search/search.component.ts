import { Component} from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {

  artistas: any[] = [];
  loading: boolean;

  constructor(private spotify: SpotifyService) { }
  buscar(text: string) {
    console.log(text);
    this.loading = true;

    this.spotify.getArtistas(text)
    .subscribe((data: any) => {
      console.log(data);
      this.artistas = data;
      this.loading = false;
    });
  }
}
