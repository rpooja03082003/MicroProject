import { Component } from '@angular/core';
import { Book } from './model/book';
import { BookserviceService } from './bookservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title= 'MICROPROJECTT';
  book: Book;
  result: string;
  bookArr: Book[];
  flag: boolean;

  constructor(private service: BookserviceService) {
    this.book = new Book();
    this.result = "";
    this.bookArr = [];
    this.flag = false;
  }

  insertBook(data: any) {
    this.book.id = data.id;
    this.book.title = data.title;
    this.book.author = data.author;
    this.book.price = data.price;
    this.result = this.service.insertBook(this.book);
  }

  updateBook(data: any) {
    this.book.id = data.id;
    this.book.title = data.title;
    this.book.author = data.author;
    this.book.price = data.price;
    this.result = this.service.updateBook(this.book);
  }

  deleteBook(data: any) {
    this.result = this.service.deleteBook(data.id);
  }

  findAllBooks() {
    this.service.findAllBooks();
    setTimeout(() => {
      this.bookArr = this.service.getBookArr();
      this.flag = true;
    }, 1000); // Adjust timeout as needed
  }

  findBookById(id: number) {
    this.service.findBookById(id);
    setTimeout(() => {
      this.bookArr = this.service.getBookArr();
      this.flag = true;
    }, 1000); // Adjust timeout as needed
  }
}
