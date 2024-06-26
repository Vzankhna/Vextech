import { useNavigate } from 'react-router-dom';
import './Nopage.scss'
import er from '../../assets/Error.png'
const Nopage = () =>{
const navi=useNavigate()
    return(

<div class="main">
<div class="left">
        <h1>You are in wrong page</h1>
            <button onClick={() =>navi('/')}>Go To Home</button>
        </div>
        <div class="right">
            <img src={er} alt="" />
        </div>
</div>
    )
}
export {Nopage}