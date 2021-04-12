import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  Title = 'My Pictures';
  image1 = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.qlaL54dVDOraoyYAGr9g_gHaFE%26pid%3DApi%26h%3D160&f=1';
  image2 = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.PQXRGfXGoePzpFZt93_-7wHaEo%26pid%3DApi%26h%3D160&f=1';
  image3 = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.vupgbZU3fEaEAf5U9uvNkAHaFj%26pid%3DApi%26h%3D160&f=1';

  constructor() { }

  ngOnInit() {
  }

}