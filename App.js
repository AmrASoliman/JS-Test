var mongoose = require('mongoose');
var express = require('express');
var app = express();

mongoose.connect("mongodb://localhost:27017/employeedb");

var employeeSchema = mongoose.Schema({
  employeeName: String,
  employeeId: Number,
  employeeTitel: String
});

var Employee = mongoose.model('Employee', employeeSchema);


// Routes
app.set('view engine', 'ejs');
app.get("/", (req, res) => {
      res.render('index')
   });
app.get("/Contact", (req, res) => {
         res.render('Contact')
      });
app.get("/profile/:name", (req, res) => {
        var data = {age: 42, job: 'ninja',hobbies: ['eating', 'fighting', 'fishing']};
         res.render('profile',{person: req.params.name, data: data});
      });

// Listen
app.listen(3000, () => {
   console.log('Server listing on 3000');
});
/*
//Add a Record
var AmrSoliman = new Employee({
  employeeName: "Amr Soliman",
  employeeId: 1,
  employeeTitel: "Manager"
});

AmrSoliman.save(function (err) {
  if (err) return handleError(err);
  // saved!
});
*/

/*
Get All Documnents in a cllection
Employee.find({}, (err, posts) => {
  console.log(posts);
});
*/

/*
Update one document
Employee.updateOne({ employeeName: 'Amr Soliman' }, { employeeTitel: 'Senior Manager' }, function(err, res) {
  // Updated at most one doc, `res.modifiedCount` contains the number
  // of docs that MongoDB updated
});
*/
