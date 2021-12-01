package com.sofka.back.services;

import com.sofka.back.dtos.BookDto;
import com.sofka.back.models.Book;
import com.sofka.back.repositories.BookRepository;
import org.hibernate.annotations.NotFound;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.Optional;

@Service
public class BookService {

    @Autowired
    BookRepository bookRepository;
    Book book;

    public BookDto save(BookDto bookDto){
        book = convertToBook(bookDto);
        return convertToBookDTO(bookRepository.save(book));
    }

    public ArrayList<BookDto> getAllBooks(){
        ArrayList<BookDto> booksDto = new ArrayList<>();

        for (Book bookModel: bookRepository.findAll()) {
            booksDto.add(convertToBookDTO(bookModel));
        }

        return booksDto;
    }

    public BookDto getBookByName(String name){
         book = bookRepository.findByName(name).orElse(null);
        assert book != null;
        return convertToBookDTO(book);
    }

    public String deleteBook(String id){
        if(bookRepository.findById(id).isEmpty())
            return "El libro no existe en la base de datos";
        try
        {
            bookRepository.deleteById(id);
            return  "deleted";
        }catch (Exception e){
            return e.getMessage();
        }
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
