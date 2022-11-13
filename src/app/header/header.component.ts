import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
  public scrollToAbout(section: string) {
    let i;
    if (section === 'about') {
      i = 700;
    } else if (section === 'work') {
      i = 1400;
    }
    else if (section === 'projects') {
      i = 2100;
    } else if (section === 'contact') {
      i = 3500;
    }
    window.scroll({
      top: i,
      behavior: 'smooth'
    });

  }
}
