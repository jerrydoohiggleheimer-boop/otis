# Console Checkout Calculator

## Purpose

The purpose of this project is to create a console-based checkout calculator using JavaScript. The calculator converts raw input values into numbers, validates the inputs, calculates a receipt, and rejects invalid transactions.

## Setup

1. Download or clone the project.
2. Open the project folder.
3. Open `index.html` in a web browser.
4. Open Developer Tools.
5. Select the Console tab.
6. Review the checkout calculations and test results.

## Operation

The calculator accepts four inputs:

- Price
- Quantity
- Discount percentage
- Tax percentage

The program converts the raw values into numbers using the `Number()` function.

It then validates the inputs before performing calculations.

The program calculates:

1. Subtotal
2. Discount amount
3. Tax amount
4. Final total

Money is formatted to two decimal places only when the receipt is displayed.

## Validation

The calculator rejects:

- Non-numeric input
- Non-finite numbers
- Negative prices
- Quantities below one
- Negative discounts
- Negative tax rates
- Discounts larger than the subtotal

## Known Limitations

The calculator currently uses test values written directly in the JavaScript file instead of accepting interactive keyboard input.

The optional tiered shipping extension was not completed because the required checkout functionality and tests were completed first.

## Most Difficult Decision

The most difficult decision was determining what should happen when the discount is greater than the subtotal. Allowing the discount to exceed the subtotal could create a negative purchase total, which does not make sense for a normal checkout transaction.

I decided to reject the transaction instead of allowing a negative total. I tested this decision using a $40.00 subtotal and a 150% discount. The program rejected the transaction with the message "Discount cannot be larger than the subtotal."

The test result provides evidence that the validation rule works and prevents an invalid transaction from producing an incorrect receipt.