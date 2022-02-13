//update product quantity
function updateProductQuantity(product, price, isIncrise){
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
    if(isIncrise){
        productNumber = parseInt(productNumber) + 1;
    }else if(productNumber > 0){
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;

    // update product price 
    const productPriceInput = document.getElementById(product + '-total');
    productPriceInput.innerText = productNumber * price;

    //calculate total price
    priceCalculate();
}

//product input value
function getProductInput(product){
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}

//total price calculate
function priceCalculate(){
    const caseTotal = getProductInput('case') * 59;
    const phoneTotal = getProductInput('phone') * 1219;
    const subTotal = caseTotal + phoneTotal;
    const taxAmount = subTotal / 10;
    const totalPrice = subTotal + taxAmount;

    //update html element
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = taxAmount;
    document.getElementById('total-price').innerText = totalPrice; 
}

//phone handler plus and minus
// plus button
document.getElementById('phone-plus').addEventListener('click', function(){
    updateProductQuantity('phone', 1219, true);
});
// minus button
document.getElementById('phone-minus').addEventListener('click', function(){
    updateProductQuantity('phone', 1219, false);
});

// case handler plus and minus
//plus button
document.getElementById('case-plus').addEventListener('click', function(){
    updateProductQuantity('case', 59, true);
 });
//minus button
document.getElementById('case-minus').addEventListener('click', function(){
    updateProductQuantity('case', 59, false);
});

