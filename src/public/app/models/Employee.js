export default class Employee {
  constructor(obj) {
    this._id = obj._id;

    if (obj.firstName) {
      this.firstName = obj.firstName;
    } else {
      throw Error('"firstName" is required');
    }

    if (obj.lastName) {
      this.lastName = obj.lastName;
    } else {
      throw Error('"lastName" is required');
    }

    this.middleInitial = obj.middleInitial;

    if (obj.emailAddress) {
      this.emailAddress = obj.emailAddress;
    } else {
      throw Error('"emailAddress" is required');
    }

    this.phoneNumber = obj.phoneNumber;
    this.positionCategory = obj.positionCategory;

    if (obj.dateHired) {
      this.dateHired = obj.dateHired;
    } else {
      throw Error('"dateHired" is required');
    }

    this.address1 = obj.address1;
    this.address2 = obj.address2;
    this.city = obj.city;
    this.state = obj.state;
    this.zipCode = obj.zipCode;

    this.activeFlag = !!obj.activeFlag;
  }
}