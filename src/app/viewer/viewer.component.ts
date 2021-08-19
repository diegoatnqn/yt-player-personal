import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BuscarService } from '../buscador.service';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.css']
})
export class ViewerComponent implements OnInit {
  miBusqueda=new  FormControl("");
  videoSelected: String = "";
  misVideos:Array<any>= [];
  results: any;
    showPlayer: boolean = false;
  constructor(private service: BuscarService) { }

  ngOnInit(): void {
    
  }

  buscar() {
    if (this.misVideos[0] != null) {
      this.misVideos = [];
      this.videoSelected = "";
      
    }
    this.service.buscar(this.miBusqueda.value).subscribe(data => {
      
      this.results = data
      this.cargar();
    });
    this.miBusqueda.reset()
  }
  cargar() {
    this.results.items.forEach((item: { snippet: { thumbnails: { medium: { url: any; }; };title:string }; id: { videoId: String; }; }) => {
      const miVideo = {
        title: item.snippet.title.substring(0,20),
          thumbnail: item.snippet.thumbnails.medium.url,
          videoId: item.id.videoId
      }
      this.misVideos.push(miVideo);
    });
    this.videoSelected = this.misVideos[0].videoId;
    this.showPlayer = true;
    console.log(this.videoSelected);
    }

  seleccionar(video: any) {
    this.videoSelected = video.videoId;
  }
}
