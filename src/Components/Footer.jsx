import React from 'react';

const Footer = () => {
    const date = new Date().getFullYear();
    return(
        <>
        <div className="main-footer w-100 text-center bg-light">       
         <p>All Right Rserved. Copyright {date}</p>
         </div>
         </>
    );
}

export default Footer;