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
