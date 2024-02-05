import React, {useState} from 'react';
import {useDispatch } from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {loginSuccess, loginFailure} from '../../redux/Auth/AuthSlicer'

function Login(){
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (event) => {
        event.preventDefault();
        if(!email || !password){
            setError('Email and Password required');
            return;
        }

        fetch('http://localhost:5000/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({user: {email, password}}),
        })
        .then((response) => {
            if(response.ok){
                return response.json();
            } else {
                throw new Error('Something went wrong try again later');
            }
        })
        .then(user => {
            dispatch(loginSuccess({user}));
            navigate('/Home');
        })
        .catch((error)=> {
            dispatch(loginFailure());
            setError('An error occured please try again later');
        });
    };

    return (
        <div className="container">
            <div className="card mt-5">
                <div className="card-body">
                <form onSubmit={handleLogin} className="row g-3">
                    <div className="col-12">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input 
                        type="email" 
                        id="email" 
                        value={email}
                        onChange={(event)=> setEmail(event.target.value)}
                        className="form-control"
                        placeholder="Email"
                    />
                    </div>
                    <div className="col-12">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input 
                        type="password"
                        id="password"
                        value={password}
                        onChange={(event)=> setPassword(event.target.value)}
                        className="form-control"
                        placeholder="Password"
                    />
                    {error && <div className="alert alert-danger mt-2">{error}</div>}
                    </div>
                    <div className="col-12">
                    <button type="submit" className="btn btn-primary">
                        Login
                    </button>
                    </div>
                </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
