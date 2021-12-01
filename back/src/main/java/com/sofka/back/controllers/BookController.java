package com.sofka.back.controllers;

import com.sofka.back.dtos.BookDto;
import com.sofka.back.services.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

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
}