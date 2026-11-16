using Microsoft.AspNetCore.Mvc;

namespace TaskFlowApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class InfoController : ControllerBase
    {
        [HttpGet]
        public IActionResult GetInfo()
        {
            return Ok(new { nombre = "TaskFlow - Proyecto", materia = "Desarrollo de Aplicaciones Web Avanzado", tecnologias = new[] { "Angular", "TypeScript", ".NET 10", "ASP.NET Core" } });
        }
    }
}