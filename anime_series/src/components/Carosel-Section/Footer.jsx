import Dropdown from 'react-bootstrap/Dropdown';
import { BiLogoYoutube } from "react-icons/Bi";
import { BiLogoFacebookSquare } from "react-icons/Bi";
import { FaTwitter } from "react-icons/Fa";
import { BsInstagram } from "react-icons/Bs";
import { SiTiktok } from "react-icons/Si";

const Footer = () => {
  return (
    <div className="Footer_main" >
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h5>Navigation</h5>
                        <li>Browse Popular</li>
                        <li>Browse Simulcasts</li>
                        <li>Browse Manga</li>
                        <li>Release Calendar</li>
                        <li>News</li>
                        <li>Games</li>
                    </div>
                    <div className="col">
                        <h5>Connect With Us</h5>
                        <li><BiLogoYoutube/> Youtube</li>
                        <li><BiLogoFacebookSquare/> Facebook</li>
                        <li><FaTwitter/> Twitter</li>
                        <li><BsInstagram/> Instagram</li>
                        <li><SiTiktok/> TikTok</li>
                    </div>
                    <div className="col">
                        <h5>Anie Cart</h5>
                        <li>Start a Free Trial</li>
                        <li>About</li>
                        <li>Help/FAQ</li>
                        <li>Terms of Use</li>
                        <li>Privacy Policy</li>
                        <li>AdChoices</li>
                        <li>Press Inquiries</li>
                        <li>Redeem Gift Card</li>
                        <li>Get the Apps</li>
                        <li>Jobs</li>
                    </div>
                    <div className="col">
                        <h5>Account</h5>
                        <li>Create Account</li>
                        <li>Log In</li>
                    </div>
                </div>
                <hr className="Footer_line w-100 "style={{border:"1px solid gray"}} />
                <div className="copy_rights d-flex justify-content-between ">
                    <h4>SONY PICTURES | &copy;Anicart ,LLC  </h4>
                    <Dropdown>
                        <Dropdown.Toggle variant="none text-light " style={{border:"none"}}  id="dropdown-basic">
                            Language 
                        </Dropdown.Toggle>

                        <Dropdown.Menu className='bg-secondary' >
                            <Dropdown.Item href="#">English(USA)</Dropdown.Item>
                            <Dropdown.Item href="#">Francis</Dropdown.Item>
                            <Dropdown.Item href="#">Deutsch</Dropdown.Item>
                            <Dropdown.Item href="#">Italic</Dropdown.Item>
                            <Dropdown.Item href="#">Portugus</Dropdown.Item>
                            <Dropdown.Item href="#">Arabic</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown> 
                </div>
                </div>

        </footer>
    </div>
  )
}

export default Footer