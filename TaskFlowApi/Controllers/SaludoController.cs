using Microsoft.AspNetCore.Mvc;

namespace TaskFlowApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class SaludoController : ControllerBase
    {
        [HttpGet]
        public IActionResult Get()
        {
            return Ok( new{ mensaje = "¡Hola desde el controlador de saludo!" } );
        }
    }
}