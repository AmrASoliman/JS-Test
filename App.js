var mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/employeedb");

var employeeSchema = mongoose.Schema({
  employeeName: String,
  employeeId: Number,
  employeeTitel: String
});

var Employee = mongoose.model('Employee', employeeSchema);
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
