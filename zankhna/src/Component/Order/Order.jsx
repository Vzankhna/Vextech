import './Order.scss'
import ajio from '../../assets/t-shirt.jpg'
import hb from '../../assets/tshirt1.jpg'
import im from '../../assets/tshirt3.jpg'
import ima from '../../assets/tshirt4.jpg'
import tt from '../../assets/tshirt5.jpg'
const Order = () =>
    <div className="order">
          <div class="container-order">
    <h1>Order Details</h1>
    <div class="order-items">
       
        <div class="order-item">
            <img src={ajio} alt="" />
            <h2>Item 1</h2>
            <p>Description of Item 1</p>
            <span>&#8377;10.00</span>
        </div>
        <div class="order-item">
          <img src={hb} alt="" />
          <h2>Item 2</h2>
          <p>Description of Item 2</p>
          <span>&#8377;10.00</span>
      </div>
      <div class="order-item">
        <img src={im} alt="" />
        <h2>Item 3</h2>
        <p>Description of Item 3</p>
        <span>&#8377;10.00</span>
    </div>

  <div class="order-item">
    <img src={ima} alt="" />
    <h2>Item 4</h2>
    <p>Description of Item 4</p>
    <span>&#8377;10.00</span>
</div>
<div class="order-item">
  <img src={tt} alt="" />
  <h2>Item 5</h2>
  <p>Description of Item 5</p>
  <span>&#8377;10.00</span>
</div>
    </div>
    <div class="total">
        <h3>Total: &#8377;100.00</h3>
        <button>Place Order</button>
    </div>
</div>
    </div>

export {Order}