var express = require('express');
var router = express.Router();

const repository = require('../repository/repository');
let timestamp = new Date()//.toLocaleString({timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone.toString})

/**
 * Router: '/sensorId/:id'
 *  Use the SensorId to find all humiditys, for example sensorID 1001.
 */

router.post('/', async function(req, res, next) {
  let metadata = {}
  humidity = req.body.humidity;
  sensorId = parseInt(req.body.sensorId);
  type = req.body.type;
  location = req.body.location;
  metadata = {sensorId, type, location}; 
  const result = await repository.addValue({timestamp, metadata, humidity})
  console.log(result);
  res.status(201).json(result)
});

router.get('/', async function(req, res, next) {
  const plants = await repository.getAllPlants();
  res.json(plants);
})

router.get('/:id', async function(req, res, next) {
  sensorId = parseInt(req.params.id);
  const values = await repository.getValuesById(sensorId);
  let humidity = values.map(i => i.humidity)
  res.json(humidity)
})

router.delete('/:id', async function (req, res, next) {
  const id = parseInt(req.params.id);
  const result = await repository.deleteSensorById(id);
  res.sendStatus(204);
})

module.exports = router;
