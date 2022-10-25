import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {
  public tabs: { name: string, active: boolean, description: string }[] = [{
    name: 'Tata Elxsi', active: true, description: 'tata elxsi'
  },
  { name: 'REC', active: false, description: 'rec' }
  ];
  public currentTab: { name: string, active: boolean, description: string };
  constructor() { }

  ngOnInit(): void {
this.currentTab= this.tabs[0];
  }
  public chooseTab(tab: { name: string, active: boolean }) {
    console.log(tab);
    this.tabs.forEach(tabValue => {
      tabValue.active = (tabValue === tab) ? true : false;
      if (tabValue.active) {
        this.currentTab = tabValue;
      }

    })
  }

}
