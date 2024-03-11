package com.santi.proyecto.springboottodo.Repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.santi.proyecto.springboottodo.Entities.Tarea;

@CrossOrigin(origins = "http://localhost:5173/")
@RepositoryRestResource(path = "tareas")
public interface TareasRepository extends CrudRepository<Tarea, Long> {

}
