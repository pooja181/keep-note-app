import { Component } from '@angular/core';
import { Note } from './models/note';
import { NoteService } from './services/note.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'notes';
  notes: Array<Note> = [];
  error: boolean = true;
  errorMessage: string = "";

  constructor(private notesService: NoteService) {
    this.notesService.getAllNotes()
      .subscribe((data) => {
        this.notes = data;
        this.error = false;
        this.errorMessage = "";
        console.log("Notes is ", this.notes);
      }, (err) => {
        console.log("Error while fetching the notes");
        this.error = true;
        if (err.status === 404) {
          this.errorMessage = "Error while fetching the notes";
        } else if (err.status === 400) {
          this.errorMessage = "Failed to process the request";
        } else if (err.status === 500) {
          this.errorMessage = "Internal Server Error. Please try again later :("
        } else {
          this.errorMessage = "Service Unavailable. Please try again later"
        }
      })
  }
  // method that gets invoked when noteAdded event is handled
  onNoteAdded(note: any) {
    console.log("onNoteAdded called and the note is ", note);
    this.notesService.addNote(note)
      .subscribe((data) => {
        this.notes.push(data);
        this.error = false;
        this.errorMessage = "";
      }, (err) => {
        console.log("Error while fetching the notes");
        this.error = true;
        if (err.status === 404) {
          this.errorMessage = "Error while saving the notes";
        } else if (err.status === 400) {
          this.errorMessage = "Failed to process the request";
        } else if (err.status === 500) {
          this.errorMessage = "Internal Server Error. Please try again later :("
        } else {
          this.errorMessage = "Service Unavailable. Please try again later"
        }
      })
  }
}

