using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PuranoKitab.Dto;

namespace PuranoKitab.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MyNameController : ControllerBase
    {
        [HttpGet]
        public ActionResult<MyNameDto> Get()
        {
            MyNameDto MyName = new MyNameDto { Name = "Deebya", Surname = "Neupane" };
            return Ok(MyName);
        }
    }
}
