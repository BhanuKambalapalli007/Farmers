import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Modal() {
    const navigate=useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    image: '',
    telugu:'',
    type:''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:3000/Crops', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      // Optionally, you can reset the form fields after successful submission
      setFormData({
        name: '',
        image: '',
        telugu:'',
        type:''
        // Reset other fields as needed
      });
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };

  return (
    <div className='body'>
    <div className='forms'>
      {/* <img src='https://www.unlockfood.ca/getattachment/3405ed4c-970c-4ce8-a3dd-071097f9586e/bigstock-Low-cholesterol-vegan-plant-ba-429847295.jpg.aspx' className='p1'/> */}
    <form onSubmit={handleSubmit} className='form'>
      <h3>Upload-Details</h3>
      <label>
        Name:<br></br>
        <input 
        className='input'
        style={{width:"200px"}}
          type="text" 
          name="name" 
          value={formData.name} 
          onChange={handleChange} 
          required 
        />
      </label>
      <label>
        Image link:<br></br>
        <input 
        className='input'
        style={{width:"200px"}}
          type="text" 
          name="image" 
          value={formData.image} 
          onChange={handleChange} 
          required 
        />
      </label>
      
      <label>
        Telugu name:<br></br>
        <input 
        className='input'
        style={{width:"200px"}}
          type="text" 
          name="telugu" 
          value={formData.telugu} 
          onChange={handleChange} 
          required 
        />
      </label>
      
      <label>
        Type:<br></br>
        <input 
        className='input'
         style={{width:"200px"}}
          type="text" 
          name="type" 
          value={formData.type} 
          onChange={handleChange} 
          required 
        />
      </label>
      <div className='btns'>
      <button type="submit" className='modal-button' onClick={()=>navigate(-1)}>Submit</button>
      
     </div>
    </form>
    </div>
    </div>
  );
}

export default Modal;