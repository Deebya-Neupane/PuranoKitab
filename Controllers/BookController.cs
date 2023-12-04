using Microsoft.AspNetCore.Mvc;
using PuranoKitab.Entities;

namespace PuranoKitab.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookController : ControllerBase
    {
        public ApplicationDbContext _dbcontext;

        public BookController(ApplicationDbContext dbcontext)
        {
            _dbcontext = dbcontext;
        }


        [HttpPost]
        public ActionResult Post([FromBody] Book book)
        {
            _dbcontext.Books.Add(book);
            _dbcontext.SaveChanges();
            return Ok("Data Saved Successfully");
        }


        [HttpGet]
        public ActionResult GetAllBooks()
        {
            var allbooks = _dbcontext.Books.ToList();
            return Ok(allbooks);
        }


        [HttpDelete]
        public async Task<ActionResult> DeleteBookAsync(int bookId)
        {
            var book = _dbcontext.Books.Where(x => x.Id == bookId).FirstOrDefault();
            try
            {
                var DeleteBookAsync = _dbcontext.Books.Find(bookId);

                if (book == null)
                {
                    return NotFound($"Book having {bookId} Id is not found");
                }

                _dbcontext.Books.Remove(book);
                await _dbcontext.SaveChangesAsync();
                return Ok($"Book having {bookId} Id is successfully deleted");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        [HttpGet("GetBookById")]
        public ActionResult GetBookById([FromQuery] int id)
        {
            var book = _dbcontext.Books.Where(x => x.Id == id).FirstOrDefault();
            return Ok(book);
        }

        [HttpPut]
        public async Task<ActionResult> UpdateBookAsync([FromBody] Book book)
        {
            var existingbook = _dbcontext.Books.Where(x => x.Id == book.Id).FirstOrDefault();
            if (existingbook == null)
                return BadRequest("Record not found");
            try
            {
                existingbook.Name = book.Name;
                existingbook.Author = book.Author;
                existingbook.Description = book.Description;
                existingbook.TotalPages = book.TotalPages;

                _dbcontext.Books.Update(existingbook);
                await _dbcontext.SaveChangesAsync();
                return Ok($"Book having {book.Id} Id is successfully Updated");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


    }
}




















