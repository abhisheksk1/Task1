import React from 'react';
import "./Sidebar.css";
import N from "../../assests/N.png";
import Dot from "../../assests/Dot.png";
import Dialog from "../../assests/Dialog.png";
import Saving from "../../assests/Saving.png";
import Credit from "../../assests/Credit.png";
import Support from "../../assests/Support.png";
import Arrow from "../../assests/Arrow.png";
import Logout from "../../assests/Logout.png";
import Profile from "../../assests/Profile.png";
import Logo from "../../assests/Logo.png";
import White from "../../assests/White.png";



export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <div className="toplogoWrapper">
                        <img src={Logo} className="logoImg"  alt="" />
                        <span className="toplogoText">
                            Payment built for growing buisnesses
                        </span>
                    </div>
                    <li className="sidebarListItem">
                        <img 
                            src={N} 
                            className="sidebarListImg" 
                            alt=""
                            style={{width: "25px"}} 
                        />
                        <img 
                            src={White} 
                            style={{marginLeft:"-1.7rem",
                                    width:"30px",
                                }}
                            alt="" 
                        />
                        <span className="sidebarListItemText">CredioCash</span>
                    </li>
                    <li className="sidebarListItem">
                        <img 
                            src={Credit} 
                            className="sidebarListImg" 
                            alt=""
                            style={{width:"25px", height:"20px"}} 
                        />
                        <span className="sidebarListItemText">CredioCard</span>
                    </li>
                    <li className="sidebarListItem">
                        <img 
                            src={Saving} 
                            className="sidebarListImg" 
                            alt="" 
                            style={{width:"25px", height:"20px"}}
                        />
                        <img 
                            src={N} 
                            className="sidebarListImg" 
                            alt="" 
                            style={{
                                width:"12px", 
                                height:"12px",
                                position: "absolute",
                                top:"325px",
                                left:"29px"
                            }}
                        />
                        <img 
                            src={White} 
                            style={{marginLeft:"-1.2rem",
                                    width:"20px",
                                    marginTop:"0.7rem"
                                }}
                            alt="" 
                        />
                        <span className="sidebarListItemText">Savings</span>
                    </li>
                    <li className="sidebarListItem">
                        <img 
                            src={Dialog} 
                            className="sidebarListImg" 
                            alt="" 
                            style={{width:"25px", height:"20px"}}
                        />
                        <img src={Dot} 
                            alt="" 
                            style={{width:"17px", marginLeft:"-1.3rem"}}
                        />
                        <span className="sidebarListItemText">Dialogue</span>
                    </li>

                    <div className="bottomSidebar">
                    <li className="sidebarListItem">
                        <img 
                            src={Support} 
                            className="sidebarListImg" 
                            alt=""
                            style={{width: "25px", borderRadius: "50%", objectFit: "cover", border:"2px solid white"}} 
                        />
                        <span className="sidebarListItemText">Support</span>
                    </li>
                    <li className="sidebarListItem">
                        <img 
                            src={Profile} 
                            className="sidebarListImg" 
                            alt=""
                            style={{width:"25px", height:"20px"}} 
                        />
                        <span className="sidebarListItemText">Profile</span>
                    </li>
                    <li className="sidebarListItem">
                        <img 
                            src={Logout} 
                            className="sidebarListImg" 
                            alt="" 
                            style={{width:"25px", height:"20px"}}
                        />
                        <img src={Arrow} 
                            alt="" 
                            style={{width:"17px", marginLeft:"-0.3rem"}}
                        />
                        <span className="sidebarListItemText">Logout</span>
                    </li>
                    </div>
                    
                </ul>
            </div>
        </div>
    )
}
