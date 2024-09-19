

import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const initialLoginValues = {
    username: '',
    password: ''
}

const LoginComponent = () => {

    const [login, setLogin] = useState(initialLoginValues);
    const [error, setError] = useState('');
    const navigate=useNavigate();

    const handleUserNameChange = (e) => {
        setLogin({ ...login, username: e.target.value });
    }

    const handlePasswordChange = (e) => {
        setLogin({ ...login, password: e.target.value });
    }

    const handleOnClick = () => {
        if(login.username === sessionStorage.getItem('username')){
            if(login.password === sessionStorage.getItem('password')){
                navigate('/');
            }
            else setError('Incorrect Password');
        }
        else setError('Account with this username doesn\'t exists');
    }

    useEffect(() => {
        sessionStorage.setItem('username', 'hukum_gupta');
        sessionStorage.setItem('password', 'hukumgupta');
    }, []);

    return (
        <div style={{ marginTop: '125px', marginLeft: '250px' }}>
            <div style={{ padding: '5px' }}>Logo</div>
            <div style={{ borderWidth: '2px', borderStyle: 'solid', borderColor: 'black', width: '1000px', height: '250px' }}>
                <div style={{ backgroundColor: 'yellow', padding: '2px', paddingBottom: '5px', paddingLeft: '4px' }}>Login Page</div>
                <div style={{ width: '60%', marginLeft: '20%' }}>
                    <label style={{ marginRight: '13%' }}>User Name</label>
                    <input
                        style={{ width: '300px', height: '20px', borderWidth: '2px', borderStyle: 'solid', borderColor: 'black'}}
                        onChange={(e) => handleUserNameChange(e)}
                    />
                </div>
                <div style={{ width: '60%', marginLeft: '20%', marginTop: '3%' }}>
                    <label style={{ marginRight: '15%' }}>Password</label>
                    <input
                        style={{ width: '300px', height: '20px', borderWidth: '2px', borderStyle: 'solid', borderColor: 'black' }}
                        onChange={(e) => handlePasswordChange(e)}
                    />
                </div>
                {error ? <span style={{color: 'red', fontSize: '75%', marginLeft: '356px'}}>{error}<br/></span> : <br />}
                <button
                    style={{ width: '308.5px', height: '27px', marginLeft: '35.6%', marginTop: '3%', backgroundColor: 'yellowgreen', cursor: 'pointer'}}
                    onClick={() => handleOnClick()}
                >Login</button>
            </div>
        </div>
    )
}

export default LoginComponent;