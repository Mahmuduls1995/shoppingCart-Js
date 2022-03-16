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

