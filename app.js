function updateCaseNumber(product, price, isIncreasing) {
    const productInput = document.getElementById(product + "-number");
    let productNumber = productInput.value;
    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    //Update Case Total

    const productTotal = document.getElementById(product + "-total");
    productTotal.innerText = productNumber * price;
    // calculateTotal

    calculateTotal();

}

function getInputValue(product) {
    const productInput = document.getElementById(product + "-number");
    const productNumber = parseInt(productInput.value);
    return productNumber;
}

function calculateTotal() {
    // const phoneInput= document.getElementById("phone-number").value;
    // const phoneNumber= parseInt(phoneInput.value) ;
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;

    const subTotal = phoneTotal + caseTotal;
    const taxAmount = subTotal / 10;
    const totalPrice = subTotal + taxAmount;
    //console.log(subtotal);
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = taxAmount;
    document.getElementById('total-price').innerText = totalPrice;
}

// phone increase decrease


document.getElementById("phone-plus").addEventListener("click", function () {
    updateCaseNumber('phone', 1219, true)
});
document.getElementById("phone-minus").addEventListener("click", function () {
    updateCaseNumber('phone', 1219, false)
});
// handle the case increase decrease

document.getElementById("case-plus").addEventListener('click', function () {
    /* const caseInput = document.getElementById("case-number");
     const caseNumber = caseInput.value;
    caseInput.value = parseInt(caseNumber) + 1;*/
    updateCaseNumber('case', 59, true);
});

document.getElementById("case-minus").addEventListener('click', function () {
    /*const caseInput = document.getElementById("case-number");
    const caseNumber = caseInput.value;
    caseInput.value = parseInt(caseNumber) - 1;*/
    updateCaseNumber('case', 59, false);
});