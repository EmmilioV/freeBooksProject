package com.sofka.back.controllers;

import com.sofka.back.Response;
import com.sofka.back.dtos.UserDto;
import com.sofka.back.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.math.BigInteger;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class AccountController {
    @Autowired
    UserService userService;

    Response response;

    @PostMapping(value = "api/login/register")
    public Response registerUser(@RequestBody UserDto userDto){
        response = new Response();
        response.setIsSuccess(false); //se inicializa la respuesta como no exitosa

        if(userService.findByUsername(userDto.getUsername()) != null){//Se valida que no exista ya usuario con ese username
            response.setMessage("El usuario ya se encuentra registrado");
            return response;
        }

        userDto.setPassword(getEncriptPassword(userDto.getPassword()));
        userDto.setAdmin(false); //se asigna por defecto que el usuario no es administrador
        userService.save(userDto);

        response.setIsSuccess(true);
        response.setMessage("usuario registrado con exito");
        return response;
    }

    @GetMapping("api/login")
    public Response login(@RequestBody UserDto data){
        response = new Response();
        response.setIsSuccess(false); //se inicializa la respuesta como no exitosa
        UserDto userDto;

        userDto = userService.findByUsername(data.getUsername());

        //Se comienzan las validaciones
        if(userDto == null){
            response.setMessage("el usuario no está registrado");
            return response;
        }
        if(!userDto.getPassword().equals(getEncriptPassword(data.getPassword()))){
            response.setMessage("contraseña incorrecta");
            return response;
        }

        response.setIsSuccess(true);
        response.setResult(userDto);
        return response;
    }

    private static String getEncriptPassword(String input) {
        try {
            MessageDigest md = MessageDigest.getInstance("MD5");
            byte[] messageDigest = md.digest(input.getBytes());
            BigInteger number = new BigInteger(1, messageDigest);
            String hashtext = number.toString(16);

            while (hashtext.length() < 32) {
                hashtext = "0" + hashtext;
            }
            return hashtext;
        }
        catch (NoSuchAlgorithmException e) {
            throw new RuntimeException(e);
        }
    }
}
