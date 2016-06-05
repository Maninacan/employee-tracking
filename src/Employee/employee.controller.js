import express from 'express';
import {Employee} from './employee.db';

const router = express.Router({
  mergeParams: true
});

function allEmployeeRoutes(req, res, next) {
  console.log(req.method, `${req.baseUrl}${req.url}`);
  next();
}

function getAllEmployees(req, res) {
  Employee.find((err, employees) => {
    res.send(employees);
  });
}

function getEmployee(req, res) {
  Employee.findOne({_id: `${req.params.id}`}, (err, employee) => {
    if (err) {
      res.status(404).send(`Employee with id ${req.params.id} not found: ${err}`);
    } else {
      res.send(employee);
    }
  });
}

function createEmployee(req, res) {
  Employee.create(req.body, (err, employee) => {
    if (err || !employee) {
      res.status(400).send(`Error - No employee created due to ${err}`);
    } else {
      res.status(200).send(employee);
    }
  });
}

function updateEmployee(req, res) {
  Employee.update({_id: `${req.params.id}`}, req.body, (err, response) => {
    if (err) {
      res.status(404).send(`Employee with id ${req.params.id} not found: ${err}`);
    } else {
      res.send(response);
    }
  });
}

function deleteEmployee(req, res) {
  Employee.findById(req.params.id, (err, employee) => {
    if (err || !employee) {
      res.status(400).send(`Could not delete employee. No employee with id ${req.params.id} could be found: ${err}`)
    } else {
      employee.remove((err, employee) => {
        console.log('employee removed: ', employee);
        res.status(200).send({msg: `employee with id ${employee._id}} successfully deleted`, employee});
        Employee.findById(employee._id, (err, employee) => {
          console.log('search for employee removed renders: ', employee);
        });
      });
    }
  });
}

router.use(allEmployeeRoutes);

router.route('/')
  .get(getAllEmployees)
  .post(createEmployee);

router.route('/:id')
  .get(getEmployee)
  .put(updateEmployee)
  .delete(deleteEmployee);

export default router;