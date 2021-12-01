package com.sofka.back.services;

import com.sofka.back.dtos.BookDto;
import com.sofka.back.models.Book;
import com.sofka.back.repositories.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BookService {

    @Autowired
    BookRepository bookRepository;
    Book book;

    public BookDto save(BookDto bookDto){
        book = convertToBook(bookDto);
        return convertToBookDTO(bookRepository.save(book));
    }

    private Book convertToBook(BookDto bookDto){
        book = new Book();

        book.setIsbn(bookDto.getIsbn());
        book.setName(bookDto.getName());
        book.setDescription(bookDto.getDescription());
        book.setAuthor(bookDto.getAuthor());
        book.setPath(bookDto.getPath());

        return book;
    }

    private BookDto convertToBookDTO(Book book){
        BookDto bookDto = new BookDto();

        bookDto.setIsbn(book.getIsbn());
        bookDto.setName(book.getName());
        bookDto.setDescription(book.getDescription());
        bookDto.setAuthor(book.getAuthor());
        bookDto.setPath(book.getPath());

        return bookDto;
    }
}
