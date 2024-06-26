import './Payment.scss'
import gpay from '../../assets/gpay.jpg'
import paytm from '../../assets/paytm.jpg'
import cd from '../../assets/creditcard.jpg'
import dd from '../../assets/debitcard.jpg'
import cod from '../../assets/cod.png'
import upi from '../../assets/uid.png'
const Payment = () =>
    <div class="main-payment">
        <h1>Choose a Payment Method</h1>
            <div class="payment">
        <div class="payment-method">
      <img src={gpay} alt=""/> Google Pay
    </div>

    <div class="payment-method">
      
     <img src={paytm} alt=""/> Paytm
    </div>

    <div class="payment-method">
        
       <img src={cd} alt=""/> Credit Card
    </div>

    <div class="payment-method">
      
    <img src={dd} alt=""/> Debit Card
    </div>

    <div class="payment-method">
       
    <img src={cod} alt=" "/> Cash on Delivery
    </div>

    <div class="payment-method">
       
    <img src={upi} alt=" "/> UPI ID
    </div>

    
    
</div>
<button type="submit">Proceed to Pay</button>
</div>

export {Payment}