import express from "express";

const app = express();
const port = 3000;


app.get("/", (req, res) => {
  const checkDay = new Date().getDay()
  var statusDay = "weekday"
  var desDay = "work hard!"
  if(checkDay === 6 || checkDay === 0){
    statusDay = "weekend"
    desDay = "have fun!"
  }
  res.render("index.ejs",
  {statusDay: statusDay,
   desDay : desDay
  });
});


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
