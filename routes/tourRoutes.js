const express = require('express');
const tourController = require('../controllers/tourController')

const tourRouter = express.Router();

tourRouter.param('id', tourController.checkId);
// tourRouter.param('')

tourRouter.get("/", tourController.getAllTours);
tourRouter.post("/", tourController.checkBody, tourController.createTour);
tourRouter.get("/:id", tourController.getTourById);
tourRouter.patch("/:id", tourController.updateTour);
tourRouter.delete("/:id", tourController.deleteTour);





module.exports = tourRouter;