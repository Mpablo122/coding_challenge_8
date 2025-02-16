//"task 1 - Employee Salary Calculation"

function caculateSalary(baseSalary, bonus, taxrate) {
    let netSalary = (baseSalary+bonus) - (baseSalary*taxrate)
    console.log(`Net Salary: $${netSalary}`)
};

caculateSalary(5000,500,0.1);
caculateSalary(7000,1000,0.15);

