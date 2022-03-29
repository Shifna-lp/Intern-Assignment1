import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  imageWidth : number = 50
  imageheight : number =50
  constructor() { }

  ngOnInit(): void {
  }

}
