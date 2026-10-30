const myCheckBox = document.getElementById("myCheckBox");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

// element -> diz que isso é um elemento do DOM
// Poderia ser ( key, button, input )
// name -> o que vc quer mostrar para o Usuário
paymentMethods =  [
    { element: document.getElementById("visaBtn"), name: "Visa" },
    { element: document.getElementById("masterCardBtn"), name: "MasterCard" },
    { element: document.getElementById("payPalBtn"), name: "PayPal"}
]

mySubmit.onclick = function()
{
    if(myCheckBox.checked){
        subResult.textContent = "You are subscribed!";
    }
    else{
        subResult.textContent = "You are NOT subscribed!";
    }

    // Payment
    let selectPayment = paymentMethods.find(method => method.element.checked);

    if(selectPayment){
        paymentResult.textContent = `You are paying with ${selectPayment.name}`;
    }else{
        paymentResult.textContent = "You must select a payment type";
    }
}