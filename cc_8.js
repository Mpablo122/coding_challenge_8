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

