import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-name-thing',
  templateUrl: './name-thing.component.html',
  styleUrls: ['./name-thing.component.css']
})
export class NameThingComponent implements OnInit {
  fullName = '';
  constructor() { }

  ngOnInit() {
  }

  formatName(first: string, last: string) {
    this.fullName = `${last}, ${first}`;
  }
}
