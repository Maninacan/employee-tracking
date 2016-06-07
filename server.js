import express from 'express';
import bodyParser from 'body-parser';
import Employee from './src/Employee/employee.controller';

const app = express();

app.set('port', (process.env.PORT || 5000));

app.use(bodyParser.json());
app.use('/', express.static(__dirname + '/dist'));

app.use('/api/employee', Employee);

const server = app.listen(app.get('port'), () => {
  console.log(`Server running at http://localhost:${server.address().port}`);
});