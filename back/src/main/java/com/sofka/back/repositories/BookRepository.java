package com.sofka.back.repositories;

import com.sofka.back.models.Book;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface BookRepository extends CrudRepository<Book, String> {
    Optional<Book> findByName(String name);
}
