using System;
using gosports.Models;
using gosports.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace gosports.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class SportsController : ControllerBase
    {
        private readonly ILogger<SportsController> _logger;
        private readonly ISportsService _service;

        public SportsController(ILogger<SportsController> logger, ISportsService sportsService)
        {
            _logger = logger;
            _service = sportsService;
        }

        [HttpGet]
        public ActionResult<Sports> GetAll()
        {
            try
            {
                return _service.GetAll();
            }
            catch (Exception ex)
            {
                _logger.Log(LogLevel.Error, ex.ToString());
                return StatusCode(500);
            }
        }

        [HttpGet]
        [Route("{id}")]
        public ActionResult<SportMatches> GetById(string id)
        {
            if (string.IsNullOrEmpty(id))
            {
                return NotFound();
            }

            try
            {
                return _service.GetBySport(id);
            }
            catch (Exception ex)
            {
                _logger.Log(LogLevel.Error, ex.ToString());
                return StatusCode(500);
            }
        }
    }
}
