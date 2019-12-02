import React from 'react';




class SideMenu extends React.Component {
    render() {
        return (
            <div className= "ml-5 mt-4 border"  style={{width: '250px'}}>
                <h3 className= "text-left pl-3 mb-4">employee</h3>
                <div  className= "shadow rounded-lg bg-white text-left" style={{width: '300px'}}>
                    <div className= "mx-auto" style={{width: '250px'}}>
                        <div className= "py-3 border pl-3"> 
                        <span className="border rounded-circle  mr-3 d-inline-flex justify-content-center align-items-center text-white" style={{width: '35px', height: '35px', backgroundColor: '#f98693'}}><span className="border rounded-circle  bg-white" style={{width: '15px', height: '15px'}}></span></span>
                            <p className="border d-inline">All Employees</p>
                        </div>
                        <h6 className= "">PROJECT </h6>
                        <ul class="nav flex-column border-bottom-0 mb-1 nav-tabs">
                            <li className="nav-item">
                                <a className="nav-link text-dark" href="#"><span className="border d-inline-block rounded-circle text-center py-1 mr-3 bg-success text-white" style={{width: '33px', height: '33px'}}><img src="" /></span>  Arena Sport</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark" href="#"><span className="border d-inline-block rounded-circle text-center py-1 mr-3 bg-success text-white" style={{width: '33px', height: '33px'}}>FS</span>DSV</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark" href="#"><span className="border d-inline-block rounded-circle text-center py-1 mr-3 bg-success text-white" style={{width: '33px', height: '33px'}}>SM</span>Seafood Mall</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark" href="#"><span className="border d-inline-block rounded-circle text-center py-1 mr-3 bg-danger text-white" style={{width: '33px', height: '33px'}}>FS</span>FireStar</a>
                            </li>
                            <li className="nav-item border-0">
                                <a className="nav-link text-dark " href="#"><span className="border d-inline-block rounded-circle text-center py-1 mr-3 bg-success text-white" style={{width: '33px', height: '33px'}}>7.</span>Zeta Bank</a>
                            </li>
                        </ul>
                        <h6 className= "text-align-start border-0">STATUS </h6>
                        <ul className="nav flex-column nav-tabs border-0">
                            <li className="nav-item">
                                <a className="nav-link text-dark" href="#"><span className="border d-inline-block rounded-circle text-center py-1 mr-3 bg-primary text-white" style={{width: '33px', height: '33px'}}>FT</span>Full Time</a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link text-dark" href="#"><span className="border d-inline-block rounded-circle text-center py-1 mr-3 bg-success text-white" style={{width: '33px', height: '33px'}}>PT</span>Part Time</a>
                            </li>
                        </ul>
                        <div className="mx-auto justify-content-center d-flex">
                        <button type="button" className="btn btn-primary btn-lg rounded-pill position-relative btn-down px-4 py-2">add project</button>
                        </div>
                        
                    </div>
                </div>
            </div>

        )

    }
}




export default SideMenu;