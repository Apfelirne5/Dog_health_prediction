import React from 'react';

const Header = () => {

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>HOME</a></li>
                            <li>
                                <a>INPUT FIELD</a>
                                
                            </li>
                            <li><a>PREDICTION</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Data Detectives</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                    <li><a href='#home'>Home</a></li>
                            <li>
                                <a href='#input-field'>Input Field</a>
                                
                            </li>
                            <li><a href='#prediction'>Prediction</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn"></a>
                </div>
            </div>
        </div>
    );
};

export default Header;