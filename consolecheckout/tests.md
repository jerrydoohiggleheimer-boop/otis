# Checkout Calculator Tests

## Test 1 — Normal Purchase

### Input
- Price: "25.00"
- Quantity: "3"
- Discount: "10"
- Tax: "7"

### Expected Result
- Subtotal: $75.00
- Discount: $7.50
- Tax: $4.73
- Final Total: $72.23

### Actual Result
- Subtotal: $75.00
- Discount: $7.50
- Tax: $4.73
- Final Total: $72.23

### Result
PASS


## Test 2 — Boundary Purchase

### Input
- Price: "10.00"
- Quantity: "1"
- Discount: "0"
- Tax: "7"

### Expected Result
- Subtotal: $10.00
- Discount: $0.00
- Tax: $0.70
- Final Total: $10.70

### Actual Result
- Subtotal: $10.00
- Discount: $0.00
- Tax: $0.70
- Final Total: $10.70

### Result
PASS


## Test 3 — Invalid Numeric Input

### Input
- Price: "abc"
- Quantity: "2"
- Discount: "10"
- Tax: "7"

### Expected Result
Transaction should be rejected because the price is not a valid number.

### Actual Result
Transaction rejected:
"Input must be a finite number."

### Result
PASS


## Test 4 — Discount Larger Than Subtotal

### Input
- Price: "20.00"
- Quantity: "2"
- Discount: "150"
- Tax: "7"

### Expected Result
Transaction should be rejected because the discount is larger than the subtotal.

### Actual Result
Transaction rejected:
"Discount cannot be larger than the subtotal."

### Result
PASS