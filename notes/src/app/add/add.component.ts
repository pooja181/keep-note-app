import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  title: string = '';
  content: string = '';

  // event declaration for event emitted by add component and listened by the parent app component
  @Output() noteAdded: EventEmitter<any> = new EventEmitter<any>();

  // method to emit event with notes data and then reset note values
  addNote() {
    this.noteAdded.emit({
      title: this.title,
      content: this.content
    })
    this.title = '';
    this.content = '';
  }
  constructor() { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
