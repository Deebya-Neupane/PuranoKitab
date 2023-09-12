using Microsoft.AspNetCore.Mvc;
using PuranoKitab.Dto;

namespace PuranoKitab.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MyFamilyController : ControllerBase
    {
        [HttpGet]
        public List<MyFamilyDto> Get()
        {
            var familyMembers = new List<MyFamilyDto>();
            familyMembers.Add(new MyFamilyDto
            {
                Name = "Ram Prasad",
                Surname = "Neupane"
            });
            familyMembers.Add(new MyFamilyDto
            {
                Name = "Shova",
                Surname = "Neupane"
            });
            familyMembers.Add(new MyFamilyDto
            {
                Name = "Dipendra",
                Surname = "Neupane"
            });
            familyMembers.Add(new MyFamilyDto
            {
                Name = "Deepika",
                Surname = "Neupane"
            });
            familyMembers.Add(new MyFamilyDto
            {
                Name = "Deebya",
                Surname = "Neupane"
            });
            return familyMembers;
        }
    }
}
