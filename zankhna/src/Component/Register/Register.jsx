import './Register.scss'
const Register = () =>
    <div className="register">
        <h1>Register</h1>
        <form>
            <label>Name:</label><br />
            <input type="text" placeholder="Enter Your Name" /><br /><br />
            <label>Mobile No.:</label><br />
            <input type="number" placeholder="Enter Your Phone No." /><br /><br />
            <label>E-mail:</label><br />
            <input type="password" placeholder="Enter Your Mail-id" /><br /><br />
            <label>Password:</label><br />
            <input type="text" placeholder="Enter Your Password" /><br /><br /><br />
            <button>Submit</button>
        </form>
    </div>

export {Register}