import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Tag } from '../tag';
import { TagService } from '../tag.service';

@Component({
  selector: 'app-tag-list',
  templateUrl: './tag-list.component.html',
  styleUrls: ['./tag-list.component.css']
})
export class TagListComponent implements OnInit {

  @Input() subjectId: string;
  @Input() canEdit: boolean;
  @Input() subjectType: string;

  public internalSubjectId: string;
  public internalCanEdit: boolean;
  public internalSubjectType: string;

  formOpen = false;

  tagFormControl = new FormControl('', [
    Validators.required,
    Validators.maxLength(20)
  ]);

  tags: Observable<Tag[]>;

  constructor(private tagService: TagService) { }

  ngOnInit() {
  }

  ngOnChanges(changes: any) {
    if (changes.subjectId && this.subjectId) {
      this.internalSubjectId = this.subjectId;
      this.tags = this.tagService.getTags(this.internalSubjectId);
    }
    if (changes.canEdit != null) {
      this.internalCanEdit = this.canEdit;
    }
    if (changes.subjectType && this.subjectType) {
      this.internalSubjectType = this.subjectType;
    }
  }

  onHashClicked() {
    if (this.formOpen && this.tagFormControl.valid) {
      this.tagService.createTag(this.internalSubjectId, this.tagFormControl.value, this.internalSubjectType);
    }else{
      this.tagFormControl.reset();
    }
    this.formOpen = !this.formOpen;
  }

}
