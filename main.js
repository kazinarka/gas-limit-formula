// Constants
const TRANSFER_GAS_LIMIT = 45000; // estimated for ERC20 token transfer
const FIXED_GAS_OVERHEAD = 20000; // for calculation safety

// Function to calculate total gas limit
function calculateTotalGasLimit(requests) {
    let totalGasLimit = 0;

    for (const request of requests) {
        const amountOfCharities = request.amountOfCharities;

        if (typeof amountOfCharities !== 'number' || amountOfCharities < 0) {
            throw new Error(`Invalid amountOfCharities: ${amountOfCharities}`);
        }

        const requestGasLimit = TRANSFER_GAS_LIMIT + TRANSFER_GAS_LIMIT + amountOfCharities * TRANSFER_GAS_LIMIT + FIXED_GAS_OVERHEAD;

        // Multiply by the number of requests
        totalGasLimit += requestGasLimit;
    }

    return totalGasLimit;
}

// Example usage:
const requests = [
    { amountOfCharities: 2 }, // 2 charity addresses
    { amountOfCharities: 3 }, // 3
    { amountOfCharities: 14 } // 14
];

const total = calculateTotalGasLimit(requests);
console.log(`Total Gas Limit: ${total}`);
