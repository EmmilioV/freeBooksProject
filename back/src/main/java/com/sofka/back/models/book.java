package com.sofka.back.models;

import org.springframework.lang.Nullable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Null;

@Entity
@Table(name = "book")
public class book {

    @Id
    @Column(unique = true, nullable = false)
    private String isbn;

    @NotNull(message = "el nombre es obligatorio")
    private String name;
    @NotNull(message = "la descripcion es obligatorio")
    private String description;
    @NotNull(message = "el autor es obligatorio")
    private String author;
    @NotNull(message = "la ruta del libro es obligatorio")
    private String path;

    public String getIsbn() {
        return isbn;
    }

    public void setIsbn(String isbn) {
        this.isbn = isbn;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getPath() {
        return path;
    }

    public void setPath(String path) {
        this.path = path;
    }
}
