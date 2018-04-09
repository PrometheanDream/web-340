/* Contributors: Richard Krasso, William Simpson
    Purpose: To create a schema */

// required

var mongoose = require("mongoose");

var Schema = mongoose.Schema;

// define the employeeSchema

var employeeSchema = new Schema({

    firstName: String,
    lastName: String

});

// define the Employee model

var Employee = mongoose.model("Employee", employeeSchema);

// expose the Employee to calling files

module.exports = Employee;