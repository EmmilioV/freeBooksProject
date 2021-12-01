package com.sofka.back.controllers;

import com.sofka.back.dtos.BookDto;
import com.sofka.back.services.BookService;
import org.hibernate.annotations.NotFound;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Locale;

@RestController
public class BookController {

    @Autowired
    private BookService bookService;

    @PostMapping(value = "api/idAdmin/book")
    public BookDto saveBook(@RequestBody BookDto bookDto) {
        return bookService.save(bookDto);
    }

    @GetMapping(value = "api/books")
    public ArrayList<BookDto> getBooks(){
        return bookService.getAllBooks();
    }

    @GetMapping(value = "api/books/{criteria}")
    public ArrayList<BookDto> searchBooks(@PathVariable("criteria") String criteria){
        return bookService.searchBooks(criteria.toLowerCase());
    }

    @GetMapping(value = "api/book/{name}")
    public BookDto getBookByName(@PathVariable("name") String name){
        return bookService.getBookByName(name);
    }

    @DeleteMapping(value = "api/idAdmin/book/{idBook}")
    public String deleteBookById(@PathVariable("idBook") String idBook){
        String message = bookService.deleteBook(idBook);

        if(message.equals("deleted"))
            return "Libro borrado con exito";
        return "Hubo un problema: " + message;
    }
}