import { Injectable } from '@angular/core';
import { Book } from './model/book';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookserviceService {
  private url: string;
  private bookArr: Book[];

  constructor(private http: HttpClient) { 
    this.url = "http://localhost:3006/books";
    this.bookArr = [];
  }

  insertBook(book: Book): string {
    this.http.post<Book>(this.url, book).subscribe(
      response => console.log('Insert Response:', response),
      error => console.error('Insert Error:', error)
    );
    return "Book Details Added";
  }

  updateBook(book: Book): string {
    this.http.put<Book>(`${this.url}/${book.id}`, book).subscribe(
      response => console.log('Update Response:', response),
      error => console.error('Update Error:', error)
    );
    return "Book Details Updated";
  }

  deleteBook(id: number): string {
    this.http.delete<void>(`${this.url}/${id}`).subscribe(
      response => console.log('Delete Response:', response),
      error => console.error('Delete Error:', error)
    );
    return "Book Details Deleted";
  }

  findAllBooks(): void {
    this.http.get<Book[]>(this.url).subscribe(data => {
      this.bookArr = data;
    });
  }

  findBookById(id: number): void {
    this.http.get<Book>(`${this.url}/${id}`).subscribe(data => {
      this.bookArr = [data];
    });
  }

  getBookArr(): Book[] {
    return this.bookArr;
  }
}
