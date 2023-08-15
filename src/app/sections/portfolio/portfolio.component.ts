import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  currentPage: string = 'home';
  @ViewChild('detail', {static: true}) detail!: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }

  changePage(pageId: string) {
    this.currentPage = pageId;
    this.detail.nativeElement.removeAttribute("open")
  }

}
