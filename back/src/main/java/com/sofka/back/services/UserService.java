package com.sofka.back.services;

import com.sofka.back.dtos.UserDto;
import com.sofka.back.models.User;
import com.sofka.back.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    UserRepository userRepository;

    User user;
    UserDto userDto;

    public UserDto save(UserDto userDto){
        user = userRepository.save(convertToUser(userDto));
        return convertToUserDto(user);
    }

    public UserDto findById(Long id){
        user = userRepository.findById(id).orElse(null);
        return convertToUserDto(user);
    }

    public UserDto findByUsername(String userName){
        user = userRepository.findByUsername(userName).orElse(null);
        if(user == null)
            return null;
        return convertToUserDto(user);
    }

    private UserDto convertToUserDto(User user){
        userDto = new UserDto();

        userDto.setId(user.getId());
        userDto.setUsername(user.getUsername());
        userDto.setPassword(user.getPassword());
        userDto.setAdmin(user.getAdmin());

        return  userDto;
    }

    private User convertToUser(UserDto userDto){
        user = new User();
        Long userDtoId = userDto.getId();

        if(userDtoId!=null)
            user.setId(userDtoId);

        user.setUsername(userDto.getUsername());
        user.setPassword(userDto.getPassword());
        user.setAdmin(userDto.getAdmin());

        return user;
    }

}
