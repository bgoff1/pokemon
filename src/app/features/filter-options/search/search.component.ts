import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { Filter } from '@models/filter';

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

  onKeyUp(event: KeyboardEvent): void {
    const text = (event.target as any)?.value;
    if (text !== undefined) {
      this.searchSubject.next((event.target as any).value);
    }
  }
}
