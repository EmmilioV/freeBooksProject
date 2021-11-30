package com.sofka.back.repositories;

import com.sofka.back.models.Book;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;

@Repository
public interface BookRepository extends CrudRepository<Book, String> {
    Optional<Book> findByName(String name);
}
