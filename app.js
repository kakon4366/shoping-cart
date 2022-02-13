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
    const productPrice = parseInt(productPriceInput.innerText);
    productPriceInput.innerText = productNumber * price;
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

