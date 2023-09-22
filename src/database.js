import React, { useState } from 'react';

function Database() {
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        email: '',
        contactnumber: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('http://localhost/insert.php', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.text())
        .then(data => {
            console.log(data);
            // Handle the response from the PHP script
        })
        .catch(error => {
            console.error('Error:', error);
        });
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Name" onChange={handleChange} />
                <input type="text" name="address" placeholder="Address" onChange={handleChange} />
                <input type="email" name="email" placeholder="Email" onChange={handleChange} />
                <input type="text" name="contactnumber" placeholder="Contact Number" onChange={handleChange} />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Database;
