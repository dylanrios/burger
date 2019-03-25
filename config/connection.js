var mysql = require ('mysql');

var connection;


if (process.env.localhost)
{
	connection = mysql.createConnection(process.env.localhost);
}
else
{
	connection = mysql.createConnection(
	{
		host: 'localhost',
		user: 'root',
		password: 'Riossss1',
		database: 'burgers_db'
	});
};


connection.connect(function(err) 
{
  if (err) 
  {
    console.error('error connecting: ' + err.stack);
    return;
  };
  console.log('connected as id ' + connection.threadId);
});





module.exports = connection;