import React from 'react';
import {Link} from 'react-router-dom';

const SignUp = () => {
  return (
    <div className="container signup">
      <div className="container login">
        <div className="row">
          <div className="col-md-12 col1 ">
            <h1 className='h1'>SignUp form</h1>
            <button type="submit" className="btn1">
            <Link className='links' to="/login">LogIn</Link>
            </button>
            <button type="submit" className="btn2">
              SignUP
            </button>
            <div className='name'>
                <label htmlFor="name" className='namelab'>Name: </label>
                <input className='fname' type="text" placeholder='Enter ur name' />
            </div>
            <label className="lab1" htmlFor="email">Email: </label>
            <input className="email" type="email" placeholder="abc@email.com" />
            <br />
            <label  className=" lab2" htmlFor="">Password: </label>
            <input className="password" type="password" placeholder="*****" />
            <div className="text-center">
            <button className="btn3" type="submit">Login</button>
            </div>
            <p>
              if member ? <Link to="/login">LogIn</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp