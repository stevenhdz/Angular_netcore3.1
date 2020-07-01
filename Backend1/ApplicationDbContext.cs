using Backend1.models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend1
{
    public class ApplicationDbContext: DbContext
    {
        public DbSet<comentarios> comentario { get; set; }

        public ApplicationDbContext()
        { }

        public ApplicationDbContext(DbContextOptions options) : base(options) 
        { }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder) 
        {
            if (  !optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer("Data Source=DESKTOP-3DUHIB4\\SQLEXPRESS;Initial Catalog=Pruebas;Integrated Security=True;MultipleActiveResultSets=True");
            }
            
        }
    }
}
