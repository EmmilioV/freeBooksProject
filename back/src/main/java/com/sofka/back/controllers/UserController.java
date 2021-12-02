package com.sofka.back.controllers;

import com.sofka.back.Response;
import com.sofka.back.dtos.UserDto;
import com.sofka.back.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

    @Autowired
    UserService userService;
    Response response;

    //Solo edita los permisos de usuario
    @PutMapping(value = "api/{idAdmin}/user")
    public Response editUser(@RequestBody UserDto userUpdated, @PathVariable("idAdmin")Long id){
        response = new Response();

        if(!validateUserAdmin(id)){
            response.setMessage("Acceso denegado");
            return response;
        }

        if(userUpdated.getId() == null){ //Si es nulo el id de usuario que va a ser actualizado
            response.setMessage("Id del usuario es nulo");
            return response;
        }

        UserDto userDto = userService.findById(userUpdated.getId());

        if(userDto == null)
            response.setMessage("El usuario no existe en la base de datos");

        //el usuario existe, actualiza permisos de administrador
        userDto.setAdmin(userUpdated.getAdmin());
        userService.save(userDto);

        response.setIsSuccess(true);
        response.setResult(userDto);
        return response;
    }

    private Boolean validateUserAdmin(Long id){
        if(userService.findById(id) == null)
            return false;
        if(!userService.findById(id).getAdmin()) //Si el id recibido en ruta no corresponde a un administrador:
            return false;
        return true;
    }

}
