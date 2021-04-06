const dotenv = require("dotenv").config();
const mysql = require("mysql");

var con = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});

con.connect(function(err) {
  if (err) return console.error(err.message);
});

exports.listNames = (myCallBack) => {
  myCallBack({
      success: true,
      response: ["first-list"]
  });
};

exports.addToList = (item, myCallBack) => {
  var sqlStatement = "INSERT INTO `" + item.list + "` (name, quantity, price) VALUES ('";
  sqlStatement += item.name + "', '";
  sqlStatement += item.ammount + "', '";
  sqlStatement += item.price += "')";
  if (con.state === 'disconnected') return console.error('Database is not connected');
  con.query(sqlStatement, function (err, result) {
    if (err) return console.error(err.message);
    //Callsback (returns but later)
    myCallBack({
        success: true,
        response: "1 record inserted"
    });
  });
};

exports.testDatabaseConnector = () => con.state;

//this function returns, vir callbacks, the list of name stored in listName
exports.getList = (listName, myCallBack) => {
  //constructs SQL statement
  var sqlStatement = "SELECT * FROM `" + listName + "`";
  //Runs when conection is not existant
  if (con.state === 'disconnected') return console.error('Database is not connected');
  //querys the database
  con.query(sqlStatement, function (err, result, fields) {
    if (err) return console.error(err.message);

    //Add's the pound sign and pads with the correct number of zeros
    for (var i = 0; i < result.length; i++) {
      result[i].price = "£" + result[i].price;
      if (result[i].price.substr(-3,1) != ".") {
        if (result[i].price.substr(-2,1) == '.') {
          result[i].price += "0";
        }else {
          result[i].price += ".00";
        }
      }
    }
    //Callsback (returns but later)
    myCallBack({
        success: true,
        response: result
    });
  });
};
