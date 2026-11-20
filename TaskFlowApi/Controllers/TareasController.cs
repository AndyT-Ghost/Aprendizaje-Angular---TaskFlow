using Microsoft.AspNetCore.Mvc; //funcionalidades de controladores y respuestas
using TaskFlowApi.Models;

namespace TaskFlowApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TareasController : ControllerBase
    {
        private static List<Tarea> tareas = new List<Tarea>
        {
            //Crear objetos tarea y se a gregan a la lista de tareas
            new Tarea { Id = 1, Titulo = "Tarea 1", Descripcion = "Descripción de la tarea 1", Completada = false, prioridad = "Alta", fechaLimite = "2026-12-12"},
            new Tarea { Id = 2, Titulo = "Tarea 2", Descripcion = "Descripción de la tarea 2", Completada = true, prioridad = "Alta", fechaLimite = "2026-12-12"}
        };

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(tareas);
        }

        [HttpPost]
        public IActionResult Post([FromBody] Tarea nuevatarea)
        {
            //el servidor recibe JSON y lo transforma automaticamente en un objeto de C#
            nuevatarea.Id = tareas.Count + 1; // Asignar un nuevo Id basado en la cantidad de tareas existentes
            nuevatarea.Completada = false; // Inicializar la propiedad Completada como false
            tareas.Add(nuevatarea);
            
            //uri -> indica la ubicación del recurso creado, en este caso no se especifica una ruta específica, por lo que se deja vacío
            return Created("", nuevatarea);
        }
    }
}