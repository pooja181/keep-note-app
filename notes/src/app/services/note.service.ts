import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Note } from '../models/note';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  constructor(private httpClient: HttpClient) {
  }

  private api: string = "http://localhost:3000/note"

  getAllNotes(): Observable<Array<Note>> {
    return this.httpClient.get<Array<Note>>(this.api);
  }

  addNote(note: Note): Observable<Note> {
    return this.httpClient.post<Note>(this.api, note);
  }

}

