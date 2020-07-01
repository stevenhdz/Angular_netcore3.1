
using System;
using System.ComponentModel.DataAnnotations;

namespace Backend1.models
{
    public class comentarios
    {
        public int Id { get; set; }
        [Required]
        public string Titulo { get; set; }
        [Required]
        public string Creador { get; set; }
        [Required]
        public string Texto { get; set; }
        [Required]
        public DateTime fechaCreacion { get; set; }
    }

}