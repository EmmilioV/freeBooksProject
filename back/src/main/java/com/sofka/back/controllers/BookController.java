package com.sofka.back.controllers;

import com.sofka.back.dtos.BookDto;
import com.sofka.back.services.BookService;
import org.hibernate.annotations.NotFound;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

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

    @GetMapping(value = "api/book/{name}")
    public BookDto getBookByName(@PathVariable("name") String name){
        return bookService.getBookByName(name);
    }
}