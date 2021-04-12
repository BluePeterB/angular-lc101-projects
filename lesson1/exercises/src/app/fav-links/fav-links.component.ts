import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  favTitle = 'My Links';
  favLinks = ['https://www.w3schools.com/tags/tag_img.asp','https://www.w3schools.com/tags/tag_br.asp'];

  constructor() { }

  ngOnInit() {
  }

}
