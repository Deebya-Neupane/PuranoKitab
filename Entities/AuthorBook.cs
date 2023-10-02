namespace PuranoKitab.Entities
{
    public class AuthorBook
    {
        public int Id { get; set; }
        public int AuthorId { get; set; }
        public int BookId { get; set; }

        //Navigation Properties...
        public Book Book { get; set; }
        public Author Author { get; set; }
    }
}
