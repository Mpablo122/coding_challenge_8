//"task 1 - Employee Salary Calculation"

function caculateSalary(baseSalary, bonus, taxrate) {
    let netSalary = (baseSalary+bonus) - (baseSalary*taxrate)
    console.log(`Net Salary: $${netSalary}`)
};

caculateSalary(5000,500,0.1); //final output should be
caculateSalary(7000,1000,0.15); //final output should be

//task 2 product price after discount

function calculateDiscount(price, discountRate) {
    let finalPrice = price - (price * discountRate)
    console.log(`Fianl price: $${finalPrice}`)
};

calculateDiscount(100,0.2); // final output should be 80.00
calculateDiscount(250,0.15); // final output should be $212.50


//task 3 - Service fee calculation 

let calculateServiceFee = (amount, serviceType) => {
    let servicefees ={
        "Premium": 0.15,
        "Standard": 0.10,
        "Basic": 0.05
    };
    if (serviceType in servicefees){
        return `Service fee: $${(amount * servicefees[serviceType]).toFixed(2)}`;
    }
    return "Invalid Service type"
};

console.log(calculateServiceFee(200, "Premium"));  // Expected output: "Service Fee: $30.00"
console.log(calculateServiceFee(500, "Standard")); // Expected output: "Service Fee: $50.00"

// task 4 Car rental Cost calculation

function calculateRentalCost(days, carType, insurance = false) {
    let carRates = {
        "Economy": 40,
        "Standard": 60,
        "Luxury": 100
    };

    if (carType in carRates) {
        let totalCost = days * carRates[carType];

        if (insurance) {
            totalCost += days * 20;
        }

        return `Total Rental Cost: $${totalCost}`;
    }

    return "Invalid car type";
}


console.log(calculateRentalCost(3, "Economy", true));  // output should be $180
console.log(calculateRentalCost(5, "Luxury", false));  // output should be $500

//Task 5 Loan Payment Calculation
function calculateLoanPayment(principal,rate,time) {
    let totalpayment = principal + (principal * rate * time);
    console.log(`Expected output: $${totalpayment}`)
};

calculateLoanPayment(1000,0.05,2);// the output should be $1100
calculateLoanPayment(5000,0.07,3);// the output should be $6050

//Task 6 - identifying Large transactions 
let transactions = [200,1500,3200,800,2500];

function filterLargeTransactions(transactions,filterFunction) {
    return transactions.filter(filterFunction);
}

console.log(filterLargeTransactions(transactions,amount => amount > 1000))
//output should be [1500,3200,2500]

//Task 7  Shopping Cart Tracker
function createCartTracker() {
    let total = 0
    return function (itemPrice){
        total+= itemPrice;
        return `Total Cart Value: $${total}`
    };
    
}
let cart = createCartTracker();
console.log(cart(20)); // output should be $20
console.log(cart(35)); // output should be $55

