// Write your solution in this file!

var customerName = 'bob';

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

var setBestCustomer = () => bestCustomer = 'not bob';

var overwriteBestCustomer = () => bestCustomer = 'maybe bob';

const leastFavoriteCustomer = 'bob lol';

var changeLeastFavoriteCustomer = (name = 'loony toons') => leastFavoriteCustomer = name;

changeLeastFavoriteCustomer();