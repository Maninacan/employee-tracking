import config from '../../config.json';
import mongoose from 'mongoose';

mongoose.set('debug', true);

mongoose.connect('mongodb://' + config.dbuser + ':' + config.dbpassword + '@' + config.dbinstance + '/<%= name %>-tracking');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', callback => {
  console.log('db connected');
});

const <%= name %>Schema = mongoose.Schema({
  // firstName: {type: String, required: true}, // - Text (*)
  // middleInitial: String, // – Text
  // lastName: {type: String, required: true} // - Text (*)
});

export const <%= upCaseName %> = mongoose.model('<%= upCaseName %>', <%= name %>Schema);

