using Microsoft.EntityFrameworkCore;

namespace PuranoKitab.Entities
{
    public class ApplicationDbContext : DbContext
    {
        internal IEnumerable<object> books;

        public ApplicationDbContext(DbContextOptions options)
           : base(options)
        {
        }
        public DbSet<Book> Books { get; set; }
        public DbSet<Author> Authors { get; set; }
        public DbSet<AuthorBook> AuthorBooks { get; set; }
    }
}
