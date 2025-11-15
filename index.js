function calculate(){
    loan_amt = document.getElementById("loan-amount").value;
    interest_rate = document.getElementById("interest-rate").value;
    loan_term = document.getElementById("months-to-pay").value;

    monthly_interest_rate = (interest_rate / 100) / 12;
    number_of_payments = loan_term * 12;
    monthly_payment = (loan_amt * monthly_interest_rate) / (1 - Math.pow((1 + monthly_interest_rate), -number_of_payments));

    document.getElementById("payment").innerHTML = `Monthly payment: ${monthly_payment.toFixed(2)}`;

}