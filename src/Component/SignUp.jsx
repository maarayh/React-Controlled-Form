import React, { useState } from 'react';

export default function SignUp() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        isPrivacy: true
    })
  

    function handleChange(event) {

        setFormData(prevData => {
            const {name, value} = event.target
            return {
                ...prevData,
                [name]: value
            }
        })
        console.log(formData)
    }

    function formSubmit(e) {
        e.preventDefault();
        if (formData.password === formData.confirmPassword) {
            console.log('Successfully Sign up ')
        }
        else {
            console.log('Password do not match')
        }
    }

  
    return (
        <div className='form_container'>
            <form className='form' onSubmit={formSubmit}>
                <h3 className='form_head'>Sign up</h3>

                <label>Name</label>
                <input type="text"
                    placeholder='Name'
                    required
                    value={formData.name}
                    name='name'
                    onChange={handleChange}
                />
                <br />

                <label>Email</label>
                <input type="email"
                    placeholder='Email'
                    required
                    value={formData.email}
                    name='email'
                    onChange={handleChange}
                />
                <br />

                <label>Password</label>
                <input type="password"
                    placeholder='Password'
                    required
                    value={formData.password}
                    name='password'
                    onChange={handleChange}
                />
                <br />

                <label>Confirm Password</label>
                <input type="password"
                    placeholder='Confirm Password'
                    required
                    value={formData.confirmPassword}
                    name='confirmPassword'
                    onChange={handleChange}
                />
                <br />

                <div className='form_checked'>
                    <input type="checkbox"
                        value={formData.isPrivacy}
                        name='isPrivacy'
                        onChange={handleChange}
                    />
                <label>I agree with Terms and Privacy</label>
                </div>

                <button className='form_submit' type='submit'>Sign Up</button>
            </form>
        </div>
    )
}
