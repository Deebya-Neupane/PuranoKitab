using Microsoft.AspNetCore.Mvc;
using PuranoKitab.Entities;

namespace PuranoKitab.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthorController : ControllerBase
    {
        public ApplicationDbContext _dbcontext;

        public AuthorController(ApplicationDbContext dbcontext)
        {
            _dbcontext = dbcontext;
        }

        [HttpPost]
        public ActionResult Post([FromBody] Author author)
        {
            _dbcontext.Authors.Add(author);
            _dbcontext.SaveChanges();
            return Ok("Data Saved Successfully");
        }

        [HttpGet]
        public ActionResult GetAllAuthors()
        {
            var allauthors = _dbcontext.Authors.ToList();
            return Ok(allauthors);
        }

        [HttpDelete]
        public async Task<ActionResult> DeleteAuthorAsync(int authorId)
        {
            var author = _dbcontext.Authors.Where(x => x.Id == authorId).FirstOrDefault();
            try
            {
                var DeleteAuthorAsync = _dbcontext.Authors.Find(authorId);

                if (author == null)
                {
                    return NotFound($"Author having {authorId} Id is not found");
                }

                _dbcontext.Authors.Remove(author);
                await _dbcontext.SaveChangesAsync();
                return Ok($"Author having {authorId} Id is successfully deleted");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("GetAllAuthorsWithLastnameNeupane")]
        public ActionResult GetAllAuthorsWithLastnameNeupane()
        {
            var AllAuthorsWithLastnameNeupane = _dbcontext.Authors.Where(x => x.LastName == "Neupane").ToList();
            return Ok(AllAuthorsWithLastnameNeupane);
        }

        [HttpPut]
        public async Task<ActionResult> UpdateAuthorAsync([FromBody] Author author)
        {
            var existingauthor = _dbcontext.Authors.Where(x => x.Id == author.Id).FirstOrDefault();
            try
            {
                existingauthor.FirstName = author.FirstName;
                existingauthor.LastName = author.LastName;
                existingauthor.Email = author.Email;

                _dbcontext.Authors.Update(existingauthor);
                await _dbcontext.SaveChangesAsync();
                return Ok($"Author having {author.Id} Id is successfully Updated");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
