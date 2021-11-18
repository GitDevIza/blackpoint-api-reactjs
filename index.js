const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Api = require('./api/routes');
const app = express();

app.set('port', process.env.PORT || 3000);

app.use('/api/', Api);


mongoose.connect(
	"mongodb://127.0.0.1:27017/api-palta",
	{
		useNewUrlParser: true,
		useUnifiedTopology: true
	}
);
mongoose.connection.on('open', _ =>{
	app.listen(app.get('port'), () => {
		console.log('Port Open House');
	});
	console.log('Database is connected to port ', app.get('port'));
});
mongoose.connection.on('error', err =>{
	console.log('Error Conected', err);
});
// mongoose.conection.on('open', _ => {
// 	app.listen(app.get('port'), () =>{
// 		console.log('servidor corriendo en http://localhost:', app.get('port'));
// 	})
// });
// mongoose.conection.on('error', err => {
// 	console.log('Error al conectar a la data');
// });