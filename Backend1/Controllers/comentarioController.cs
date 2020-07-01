using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Backend1.models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Backend1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class comentarioController : ControllerBase
    {
        //add
        private readonly ApplicationDbContext _context;

        public comentarioController(ApplicationDbContext context) 
        {
            _context = context;
        }
        // GET: api/<comentarioController>
        [HttpGet]
        public ActionResult<List<comentarios>> Get()
        {
            try
            {
                var listcomentario = _context.comentario.ToList();
                return Ok(listcomentario);
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
        }

        // GET api/<comentarioController>/5
        [HttpGet("{id}")]
        public ActionResult<comentarios> Get(int id)
        {
            try
            {
                var comentario = _context.comentario.Find(id);
                if (comentario == null) 
                {
                    return NotFound();
                }
                return Ok(comentario);
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
        }

        // POST api/<comentarioController>
        [HttpPost]
        public ActionResult Post([FromBody] comentarios comentario)
        {
            try
            {
                _context.Add(comentario);
                _context.SaveChanges();
                return Ok();
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
        }

        // PUT api/<comentarioController>/5
        [HttpPut("{id}")]
        public ActionResult Put(int id, [FromBody] comentarios comentario)
        {
            try
            {
                if (id != comentario.Id) 
                {
                    return BadRequest();
                }
                _context.Entry(comentario).State = EntityState.Modified;
                _context.Update(comentario);
                _context.SaveChanges();
                return Ok();
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
        }

        // DELETE api/<comentarioController>/5
        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            try
            {
                var comentario = _context.comentario.Find(id);
                if (comentario == null) 
                {
                    return NotFound();
                }
                _context.Remove(comentario);
                _context.SaveChanges();
                return Ok();
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
        }
    }
}
