import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books: Book[];
  errorMessage: any;
  constructor(private client: HttpClient) { }

  ngOnInit() {
  }

  getBooks() {
    this.client.get<Book[]>('https://few100api.now.sh/books')
      .subscribe(
      books => this.books = books,
      e => this.errorMessage = <any>e
    );
  }

}

interface Book {
  id: string;
  title: string;
  author: string;
}
