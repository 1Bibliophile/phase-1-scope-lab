// Write your solution in this file!
var customerName = 'bob'
upperCaseCustomerName(customerName)
setBestCustomer(customerName)

function upperCaseCustomerName(){
    return customerName.toUpperCase()
}

function setBestCustomer(name){
    name = 'not bob'
    return name
}

function overwriteBestCustomer(){
    bestCustomer = 'maybe bob'
    return bestCustomer
}

const leastFavoriteCustomer = ''

function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = 'sarah'
    return leastFavoriteCustomer
}