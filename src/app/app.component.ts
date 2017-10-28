import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { PaginationService } from './pagination.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {


  constructor(public page: PaginationService) {}

  ngOnInit() {
    this.page.init('boats', 'year', { reverse: true, prepend: false })
  }

  scrollHandler(e) {
    if (e === 'bottom') {
      this.page.more()
    }
  }



}
