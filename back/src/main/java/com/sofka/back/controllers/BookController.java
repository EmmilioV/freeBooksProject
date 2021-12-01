package com.sofka.back.controllers;

import com.sofka.back.dtos.BookDto;
import com.sofka.back.services.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BookController {

    @Autowired
    private BookService bookService;

    @PostMapping(value = "api/idAdmin/book")
    public BookDto saveBook(@RequestBody BookDto bookDto) {
        return bookService.save(bookDto);
    }
}