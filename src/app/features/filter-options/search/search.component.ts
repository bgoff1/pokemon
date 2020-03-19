import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { Filter } from '@models/filter';
import { KeyEvent } from '@models/keydown.model';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchSubject: Subject<string> = new Subject();

  @Input() filter: Filter;
  @Output() search = new EventEmitter<string>();

  ngOnInit(): void {
    this.searchSubject
      .pipe(debounceTime(500))
      .subscribe(res => this.search.emit(res));
  }

  onKeyUp(event: KeyEvent): void {
    const text = event.target?.value;
    if (text !== undefined) {
      this.searchSubject.next(event.target.value);
    }
  }
}
