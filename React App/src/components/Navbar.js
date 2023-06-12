import React  from "react";
import './styles/style.css';
import logo from './images/logo.png';
import logout from './images/logout.png';


const Navbar = () => {
    
        return (
            <nav id="nav" class="navbar   justify-content-between">
                <h2 >BIRLASOFT PROJECT</h2>
                <div class="form-inline">
                    <img id="logout" title="Log Out" class="mr-3" src={logout}  width="40px" height="30px" alt="edf" ></img>
                    <img id="logout" title="Sagar Harale" src={logo} width="50px" height="50px" alt="edf" ></img>
                </div>
            </nav>
        )

}
 export default Navbar;