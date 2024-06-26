import './Login.scss'
const Login = () =>
    <div className="login">
        <h1>Login</h1>
        <form>
            <label>E-mail:</label><br />
            <input type="text" placeholder="Enter Your Mail-id" /><br /><br />
            <label>Password:</label><br />
            <input type="password" placeholder="Enter Your Password" /><br /><br /><br />
            <button>Login</button>
        </form>
    </div>
export {Login}