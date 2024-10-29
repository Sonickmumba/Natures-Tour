const fs = require("fs");

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
);

// check id middleware
const checkId = (req, res, next, val) => {
  if (req.params.id * 1 > tours.length) {
    return res.status(400).json({
      status: "fail",
      message: "Invalid Id",
    });
  }
  next()
}; 

// checkBody middleware
const checkBody = (req, res, next) => {
  if (!req.body.name || !req.body.price) {
    return res.status(400).json({status: "fail", message: "Missing name or price"})
  }
  next()
};


const getAllTours = (req, res) => {
  res
    .status(200)
    .json({ status: "sucess", results: tours.length, data: { tours: tours } });
};

const createTour = (req, res) => {
  const newId = tours[tours.length - 1].id + 1;
  const newTour = Object.assign({ id: newId }, req.body);

  tours.push(newTour);

  fs.writeFile(
    `${__dirname}/../dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    (err) => {
      res.status(201).json({
        status: "success",
        data: {
          tour: newTour,
        },
      });
    }
  );
}

const getTourById = (req, res) => {
  const tourId = parseInt(req.params.id, 10); //or use trick req.params.id * 1
  const result = tours.find((tour) => tour.id === tourId);
  res.status(200).json({
    status: "success",
    data: {
      tour: result,
    },
  });
};

const updateTour =  (req, res) => {
  res.status(200).json({
    status: "Success",
    data: {
      tour: "<Updates tour here ....>",
    },
  });
};

const deleteTour = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const updatesTours = tours.filter((tour) => tour.id !== id);
  res.status(204).json({
    status: "Success",
    data: {
      tour: updatesTours,
    },
  });
}



module.exports = {
  deleteTour,
  updateTour,
  getAllTours,
  getTourById,
  createTour,
  checkId,
  checkBody
}