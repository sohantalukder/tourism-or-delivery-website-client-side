import { faAddressBook, faFileContract, faHome, faMoneyBill } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Footer.css';

const Footer = () => {
    const element = <FontAwesomeIcon icon={faMoneyBill} />
    const element2 = <FontAwesomeIcon icon={faAddressBook} />
    const element3 = <FontAwesomeIcon icon={faFileContract} />
    const element4 = <FontAwesomeIcon icon={faHome} />
    return (
        <div className='container-footer'>
            <div className="row">
                <div className="col-md-4">
                    <p>{element} SWEET TRAVEL</p>
                    <h5>{element2} 01865748726*</h5>

                    <small>{element4}  H:202 R:45 Sector:10</small>
                    <p>Ashulia Dhaka 1400</p>

                </div>

                <div className="col-md-4">
                    <div className='pages'></div>
                    <p>Home {element4}</p>
                    <p>Services </p>
                    <p>Contact us {element2} </p>
                    <p>About us</p>
                    <p>Reviews</p>
                </div>

                <div className="col-md-4">
                    SUPPORT
                    Troubleshooting <br />
                    Common Questions
                    Report a Bug
                    Get Help <br /> <br /> <br />
                    <p> Md. Sohan Talukder 2021 © . All rights reserved. </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;