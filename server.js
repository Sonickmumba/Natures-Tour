const app = require('./app');
const port = process.env.PORT || 3001;

// start server
app.listen(port, () => {
  console.log(`Natures app listening at ${port}`);
});
