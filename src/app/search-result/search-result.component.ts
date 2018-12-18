import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchService } from '../search.service';
import { Tag } from '../tag';
import { User } from '../user';
import { Post } from '../post';
import { Room } from '../room';
import { UserService } from '../user.service';
import { PostService } from '../post.service';
import { RoomService } from '../room.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  @Input() word: string;
  @Input() type: string;

  public internalWord: string;
  public internalType: string;

  tags: Observable<Tag[]>;

  constructor(private searchService: SearchService) {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: any) {
    if (changes.word) {
      this.internalWord = this.word;
      this.internalType = this.type;
      this.tags = this.searchService.searchWithTag(this.internalWord);
    }
  }

}
