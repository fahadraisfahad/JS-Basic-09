function calculateTax(income) {
    const taxRate = income > 50000 ? 0.2 : 0.15;
    const taxAmount = income * taxRate;
    return taxAmount;
}

// Example usage
const income1 = 60000;
const tax1 = calculateTax(income1);
console.log(`Tax amount for $${income1}: $${tax1}`);

const income2 = 30000;
const tax2 = calculateTax(income2);
console.log(`Tax amount for $${income2}: $${tax2}`);
