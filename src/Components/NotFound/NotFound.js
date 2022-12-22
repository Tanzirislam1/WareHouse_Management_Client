import React from 'react';
import errImg from '../../../src/NotFound-img/error_2.gif';
const NotFound = () => {

    return (
        <div style={{padding: "40px 0"}}>
            <h2 style={{textAlign: "center", fontSize: "56px", fontWeight: "600"}}>404 Not Found</h2>
            <img style={{width: "60%", margin: "0 auto", display: "block", height: "auto"}} src={errImg} alt="" />
        </div>
    );
};

export default NotFound;