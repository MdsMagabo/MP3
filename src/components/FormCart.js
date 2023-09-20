import React, { useState } from 'react';

const FormCart = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contactNumber: '',
    address: '',
    carModel: '',
    plateNum: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here, e.g., send data to a server
    console.log('Form data:', formData);
  };

  return (
    <div className='cart-container'>
      <div className='app-form'>
        <div className='form-title'>
          <a className='info-text'>Your Information</a>
        </div>
        <form onSubmit={handleSubmit}>
          <div className='user-details'>
            <div className='input-box'>
              <input className='box-input'
                type='text'
                name='firstName'
                placeholder='First Name (required)'
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className='input-box'>
              <input className='box-input'
                type='text'
                name='lastName'
                placeholder='Last Name (required)'
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
            <div className='input-box'>
              <input className='box-input'
                type='email'
                name='email'
                placeholder='Email (required)'
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className='input-box'>
              <input className='box-input'
                type='tel'
                name='contactNumber'
                placeholder='Contact Number (required)'
                value={formData.contactNumber}
                onChange={handleChange}
                required
              />
            </div>
            <div className='input-box'>
              <input className='box-input'
                type='text'
                name='address'
                placeholder='Address (required)'
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>
            <div className='input-box'>
              <input className='box-input'
                type='text'
                name='carModel'
                placeholder='Car Year / Model (optional)'
                value={formData.carModel}
                onChange={handleChange}
                required
              />
            </div>
            <div className='input-box'>
              <input className='box-input'
                type='text'
                name='plateNum'
                placeholder='Plate Number (optional)'
                value={formData.platNum}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <button type='submit'>Submit</button>
        </form>
      </div>
      <div className='app-cart'>
        <div className='cart-title'>
          <a className='info-text'>Order Summary</a>
        </div>
        
      </div>
    </div>
  );
};

export default FormCart;
