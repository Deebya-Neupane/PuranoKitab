﻿namespace PuranoKitab.Entities
{
    public class Book
    {
        public int Id { get; set; }
        public string Author { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int TotalPages { get; set; }
    }
}
