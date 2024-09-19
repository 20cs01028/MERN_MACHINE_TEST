import React from 'react';

const Dashboard = () => {
    return (
        <div style={{ marginTop: '50px', marginLeft: '150px' }}>
            <div style={{ padding: '5px' }}>Logo</div>
            <div style={{ borderWidth: '2px', borderStyle: 'solid', borderColor: 'black', borderBottomWidth:'0px', padding: '2px', width: '1196px', display: 'flex', justifyContent: 'space-around', backgroundColor: '#C3DDEF'}}>
                <a href='/' style={{textDecoration: 'none', color: 'black'}}>Home</a>
                <a href='/list' style={{textDecoration: 'none', color: 'black'}}>Employee List</a>
                <a href='/' style={{textDecoration: 'none', color: 'black'}}>Hukum Gupta-</a>
                <a href='/login' style={{textDecoration: 'none', color: 'black'}}>Logout</a>
            </div>
            <div style={{ borderWidth: '2px', borderStyle: 'solid', borderColor: 'black', width: '1200px', height: '500px'}}>
                <div style={{ backgroundColor: 'yellow', padding: '2px', paddingBottom: '5px', paddingLeft: '4px' }}>Dashboard</div>
                <p style={{marginTop: '30px', width: '50%', marginLeft: '25%', display: 'flex', justifyContent: 'center'}}>Welcome Admin Panel</p>
            </div>
        </div>
    )
}

export default Dashboard;