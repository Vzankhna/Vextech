import './Contact.scss'
const Contact = () =>
    <div className="contact">
        <h1>Contact Us</h1>
        <input type="text" placeholder="Name" /><br /><br />
        <input type="text" placeholder="E-mail" /><br /><br />
        <input type="number" placeholder="Number" /><br /><br />
        <textarea name="Message"  rows="5"  placeholder="Message"></textarea><br /><br /><br />
        <button>Send Message</button>
    </div>
export {Contact};