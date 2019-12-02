import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'




class Navigation extends React.Component {
    render() {
        return (
            <div className= "d-flex container-fluid justify-content-between align-items-center bg-white" >
                <div className="brand-area">
                    <a href="./index.html" className="logo text-center text-decoration-none"><h3 className= "text-dark"><span className="mr-2 mt-3 position-relative rounded-circle d-inline-flex justify-content-center align-items-center text-white" style={{width: '35px', height: '35px', backgroundColor: '#f98693'}}><span className="border rounded-circle  bg-white" style={{width: '15px', height: '15px'}}><span className="border position-absolute cap rounded-circle" style={{width: '10px', height: '10px'}}></span></span></span>Internia</h3> </a>
                </div>
                
                    <ul className= "navbar align-text-bottom border-0 mt-3 pb-0 mb-0 nav-tabs ">
                        
                        <a href="" className= "nav-link border-top-0 border-left-0 border-right-0 mx-3 text-decoration-none px-0 text-dark" >Calender</a>
                        <a href="" className= "nav-link border-top-0 border-left-0 border-right-0 mx-3 text-decoration-none px-0 text-dark" >Statistic</a>
                        <a href="" className= "nav-link border-top-0 border-left-0 border-right-0 mx-3 text-decoration-none px-0 text-dark">Employee</a>
                        <a href="" className= "nav-link border-top-0 border-left-0 border-right-0 mx-3 text-decoration-none px-0 text-dark">Client</a>
                        <a href="" className= "nav-link border-top-0 border-left-0 border-right-0 mx-3 text-decoration-none px-0 text-dark">Equipment</a>
                    </ul> 
               
                
                <div className="user-area border text-center">
                    <a href="#" class="notification  mx-3 ">
                    <FontAwesomeIcon icon="bell" />
                    <span className="circle"></span>
                    </a>
                    
                    <a href="#" class="message  mx-3 ">
                    <FontAwesomeIcon icon="envelope" />
                    <span className="circle">3</span>
                    </a>

                    ​​<div className="user-img d-inline border rounded-circle  mx-3  " style={{width: '50px', height: '50px'}} >
                        <img src="/w3images/avatar2.png" className=""   />
                    </div>
                </div>
            </div>

        )

    }
}




export default Navigation;