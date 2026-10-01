// Console Checkout Calculator

// Converts a value to a number and checks whether it is valid.
function convertToNumber(value) {
    const number = Number(value);

    if (!Number.isFinite(number)) {
        throw new Error("Input must be a finite number.");
    }

    return number;
}

// Calculates the checkout receipt.
function calculateCheckout(priceInput, quantityInput, discountInput, taxRateInput) {
    // Convert raw inputs from strings into numbers.
    const price = convertToNumber(priceInput);
    const quantity = convertToNumber(quantityInput);
    const discountPercent = convertToNumber(discountInput);
    const taxRate = convertToNumber(taxRateInput);

    // Validate price.
    if (price < 0) {
        throw new Error("Price cannot be negative.");
    }

    // Validate quantity.
    if (quantity < 1) {
        throw new Error("Quantity must be at least 1.");
    }

    // Validate discount and tax.
    if (discountPercent < 0) {
        throw new Error("Discount cannot be negative.");
    }

    if (taxRate < 0) {
        throw new Error("Tax rate cannot be negative.");
    }

    // Calculate subtotal as a separate expression.
    const subtotal = price * quantity;

    // Calculate discount percentage as a separate expression.
    const discountAmount = subtotal * (discountPercent / 100);
    if (discountAmount > subtotal) {
        throw new Error("Discount cannot be larger than the subtotal.");
    }
    // Calculate tax after the discount.
    const taxableAmount = subtotal - discountAmount;
    const taxAmount = taxableAmount * (taxRate / 100);

    // Calculate final total.
    const finalTotal = taxableAmount + taxAmount;

    // A let binding is justified because this value is changed
    // when creating the receipt output.
    let receiptMessage = "";

    receiptMessage += `Price: $${price.toFixed(2)}\n`;
    receiptMessage += `Quantity: ${quantity}\n`;
    receiptMessage += `Subtotal: $${subtotal.toFixed(2)}\n`;
    receiptMessage += `Discount: $${discountAmount.toFixed(2)}\n`;
    receiptMessage += `Tax: $${taxAmount.toFixed(2)}\n`;
    receiptMessage += `Final Total: $${finalTotal.toFixed(2)}`;

    return {
        price,
        quantity,
        discountPercent,
        taxRate,
        subtotal,
        discountAmount,
        taxAmount,
        finalTotal,
        receiptMessage
    };
}

// Test 1: Normal purchase
console.log("===== TEST 1: NORMAL PURCHASE =====");

try {
    const result = calculateCheckout("25.00", "3", "10", "7");
    console.log(result.receiptMessage);
} catch (error) {
    console.error("Transaction rejected:", error.message);
}


// Test 2: Boundary purchase - exactly one item
console.log("\n===== TEST 2: ONE ITEM =====");

try {
    const result = calculateCheckout("10.00", "1", "0", "7");
    console.log(result.receiptMessage);
} catch (error) {
    console.error("Transaction rejected:", error.message);
}


// Test 3: Invalid numeric input
console.log("\n===== TEST 3: INVALID INPUT =====");

try {
    const result = calculateCheckout("abc", "2", "10", "7");
    console.log(result.receiptMessage);
} catch (error) {
    console.error("Transaction rejected:", error.message);
}


// Test 4: Discount larger than subtotal
console.log("\n===== TEST 4: DISCOUNT LARGER THAN SUBTOTAL =====");

try {
    const result = calculateCheckout("20.00", "2", "150", "7");
    console.log(result.receiptMessage);
} catch (error) {
    console.error("Transaction rejected:", error.message);
}