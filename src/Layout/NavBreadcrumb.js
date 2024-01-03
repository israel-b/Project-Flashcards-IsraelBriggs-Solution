import React from "react";

function NavBreadcrumb({currentNav, subNav}){
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">{currentNav}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled">{subNav}</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default NavBreadcrumb;