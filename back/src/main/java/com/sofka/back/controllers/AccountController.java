package com.sofka.back.controllers;

import com.sofka.back.dtos.UserDto;
import com.sofka.back.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AccountController {
    @Autowired
    UserService userService;

    @PostMapping(value = "api/login/register")
    public String registerUser(@RequestBody UserDto userDto){

        if(userService.findByUsername(userDto.getUsername()) != null)//Se valida que no exista ya usuario con ese username
            return "Un usuario con este nombre de usuario ya esta registrado";

        userDto.setAdmin(false); //se asigna por defecto que el usuario no es administrador
        userService.save(userDto);

        return "usuario registrado con exito";
    }
}
