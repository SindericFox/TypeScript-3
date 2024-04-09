abstract class Publisher {
  title: string;
  author: string;
  pubYear: number;
  copies: number;

  constructor(title: string, author: string, pubYear: number, copies: number) {
    this.title = title;
    this.author = author;
    this.pubYear = pubYear;
    this.copies = copies;
  }

  getTitle(): string {
    return this.title;
  }

  setTitle(title: string): void {
    this.title = title;
  }

  getAuthor(): string {  
    return this.author;
  }

  setAuthor(author: string): void {
    this.author = author;
  }

  getPubYear(): number {
    return this.pubYear;
  }

  setPubYear(pubYear: number): void {
    this.pubYear = pubYear;
  }

  getCopies(): number {
    return this.copies;
  }

  setCopies(copies: number): void {
    this.copies = copies;
  }
}

class Book extends Publisher {
  pages: number;

  constructor(title: string, author: string, pubYear: number, copies: number, pages: number) {
    super(title, author, pubYear, copies);
    this.pages = pages;
  }
}

class Magazine extends Publisher {
  issue: number;

  constructor(title: string, author: string, pubYear: number, copies: number, issue: number) {
    super(title, author, pubYear, copies);
    this.issue = issue;
  }
}

interface Reception {
  delivery(reader: Reader, publisher: Publisher): void;
  receive(reader: Reader, publisher: Publisher): void;
}

class Reader {
  firstName: string;
  lastName: string;
  items: Publisher[];
  maxItems: number;

  constructor(firstName: string, lastName: string, maxItems: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.items = [];
    this.maxItems = maxItems;
  }

  getFirstName(): string {
    return this.firstName;
  }

  setFirstName(firstName: string): void {
    this.firstName = firstName;
  }

  getLastName(): string {
    return this.lastName;
  }

  setLastName(lastName: string): void {
    this.lastName = lastName;
  }

  getItems(): Publisher[] {
    return this.items;
  }

  setItems(items: Publisher[]): void {
    this.items = items;
  }

  getMaxItems(): number {
    return this.maxItems;
  }

  setMaxItems(maxItems: number): void {
    this.maxItems = maxItems;
  }
}

class Library {
  publishers: Publisher[];

  constructor(publishers: Publisher[]) {
    this.publishers = publishers;
  }

  getPublishers(): Publisher[] {
    return this.publishers;
  }

  setPublishers(publishers: Publisher[]): void {
    this.publishers = publishers;
  }

  addPublisher(publisher: Publisher): void {
    this.publishers.push(publisher);
  }

  removePublisher(publisher: Publisher): void {
    const index = this.publishers.indexOf(publisher);
    if (index > -1) {
      this.publishers.splice(index, 1);
    }
  }
}