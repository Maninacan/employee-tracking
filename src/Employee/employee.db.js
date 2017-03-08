import mongoose from 'mongoose';

mongoose.set('debug', true);

mongoose.connect('mongodb://localhost:27017/employeeTracking');


const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', () => {
  console.log('db connected');
});

const employeeSchema = mongoose.Schema({
  firstName: {type: String, required: true}, // - Text (*)
  lastName: {type: String, required: true}, // - Text (*)
  middleInitial: String, // – Text
  emailAddress: {type: String, required: true}, // - Text (validate emails only) (*)
  phoneNumber: String, // - Text (numbers only)
  positionCategory: String, // - Drop Down (Indirect, Direct, Program Manager, Director, Executive)
  dateHired: {type: Date, required: true}, // - Date (*)
  address1: String, // – Text
  address2: String, // – Text
  city: String, // – Text
  state: String, // - Drop Down
  zipCode: Number, // - Number (5-digit only)
  activeFlag: {type: Boolean, required: true} // Boolean (*)
});

export const Employee = mongoose.model('Employee', employeeSchema);
