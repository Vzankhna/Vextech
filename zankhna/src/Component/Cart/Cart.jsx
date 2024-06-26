import './Cart.scss'
import ajio from '../../assets/t-shirt.jpg'
import hb from '../../assets/tshirt1.jpg'
import im from '../../assets/tshirt4.jpg'

const Cart = () =>
    <div className="cart">
    <div className="cart-head"> 
        <h1>Cart </h1>
        <span>&#10060;</span>
    </div>

<div className="cart-items">
<div className="cart-item">
<img src={ajio} alt="" />
<div className="cart-details">
<h3>Black Printed T-Shirt</h3>
<span> &#8377; 350</span>
<div className="quantity">
    <span>+</span>
    <p>1</p>
    <span>-</span>
</div>
</div>
</div>

<div className="cart-item">
<img src={hb} alt="" />
<div className="cart-details">
<h3>Black T-Shirt</h3>
<span> &#8377; 290</span>
<div className="quantity">
    <span>+</span>
    <p>1</p>
    <span>-</span>
</div>
</div>
</div>

<div className="cart-item">
<img src={im} alt="" />
<div className="cart-details">
<h3>T-Shirt</h3>
<span> &#8377; 250</span>
<div className="quantity">
    <span>+</span>
    <p>1</p>
    <span>-</span>
</div>
</div>
</div>

<div className="cart-total">
    <div className="value">
<p>&#8377; 890</p>
<span>Total Value</span>
</div>
<button>Buy Now</button>
</div>

</div>
</div>

export {Cart}