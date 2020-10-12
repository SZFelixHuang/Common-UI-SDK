import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'cui-html-editor',
  templateUrl: './html-editor.component.html',
  styleUrls: ['./html-editor.component.less']
})
export class HtmlEditorComponent implements OnInit {
  options = {
    placeholderText: 'Edit Your Content Here!',
    charCounterCount: false
  };

  constructor() {}

  ngOnInit() {}
}
