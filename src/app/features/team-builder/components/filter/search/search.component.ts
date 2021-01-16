import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { Filter } from '@team/models/filter/filter.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchSubject: Subject<string> = new Subject();

  @Input() filter!: Filter | null;
  @Output() search = new EventEmitter<string>();

  ngOnInit(): void {
    this.searchSubject
      .pipe(debounceTime(500))
      .subscribe((res) => this.search.emit(res));
  }

  onKeyUp(event: KeyboardEvent): void {
    const text = (event.target as HTMLInputElement)?.value;
    if (text !== undefined) {
      this.searchSubject.next(text);
    }
  }
}
