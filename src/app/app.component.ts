import { Component, ElementRef, ViewChild } from '@angular/core';
import * as moment from "moment";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentPage: string = 'home';
  @ViewChild('detail', {static: true}) detail!: ElementRef;
  information = {
    exp: moment("2021-01-02").toNow(true),
    field: 'FE Developer',
    bio: "I’m a developer working in Hanoi City. Build a website on the client side. I also have a bit of server side knowledge, I used Node.js for my application."
  }
  constructor() { }

  ngOnInit(): void {
    console.log(this.information)
  }

  changePage(pageId: string) {
    this.currentPage = pageId;
    this.detail.nativeElement.removeAttribute("open")
  }
}
