import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import * as moment from "moment";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentPage: string = 'home';
  @ViewChild('detail', {static: true}) detail!: ElementRef;
  contactForm = this.fb.group({
    fullName: ["", [Validators.required, Validators.maxLength(80)]],
    subject: [""],
    email: ["", Validators.email],
    msg: [""]
  });
  information = {
    exp: moment("2021-01-02").toNow(true),
    field: 'FE Developer',
    bio: "I’m a developer working in Hanoi City. Build a website on the client side. I also have a bit of server side knowledge, I used Node.js for my application."
  }
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    console.log(this.information)
  }

  changePage(pageId: string) {
    this.currentPage = pageId;
    this.detail.nativeElement.removeAttribute("open")
  }

  sendMail() {
    console.log(this.contactForm)
    this.contactForm.markAllAsTouched();
  }
}
