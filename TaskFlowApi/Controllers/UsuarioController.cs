using Microsoft.AspNetCore.Mvc; //funcionalidades de controladores y respuestas
using TaskFlowApi.Models;

namespace TaskFlowApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UsuarioController : ControllerBase
    {
        private static List<Usuario> usuarios = new List<Usuario>
        {
            //Crear objetos usuario y se agregan a la lista de usuarios
            new Usuario { Id = 1, Nombre = "Andy", Correo = "usuario1@example.com", Edad = 22, Matriculado = true },
            new Usuario { Id = 2, Nombre = "Isabel", Correo = "usuario2@example.com", Edad = 23, Matriculado = false }
        };

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(usuarios);
        }

        [HttpPost]
        public IActionResult Post([FromBody] Usuario nuevoUsuario)
        {
            nuevoUsuario.Id = usuarios.Count + 1;
            usuarios.Add(nuevoUsuario);

            return Created("", nuevoUsuario);
        }        
    }
}