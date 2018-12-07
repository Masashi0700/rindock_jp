export class Tag {

  tagId: string;
  subjectId: string;
  content: string;
  subjectType: string;

  constructor(tagId: string, subjectId: string, content: string, subjectType: string) {
    this.tagId = tagId;
    this.subjectId = subjectId;
    this.content = content;
    this.subjectType = subjectType;
  }

  reset() {
    this.tagId = '';
    this.subjectId = '';
    this.content = '';
    this.subjectType = '';
  }

  deserialize() {
    return Object.assign({}, this);
  }

}
