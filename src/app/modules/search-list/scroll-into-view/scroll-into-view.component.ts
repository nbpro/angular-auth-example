import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-scroll-into-view',
  templateUrl: './scroll-into-view.component.html',
  styleUrls: ['./scroll-into-view.component.scss']
})
export class ScrollIntoViewComponent implements OnInit {

  @Input() scrollList;

  constructor() { }

  ngOnInit() {
  }

}
