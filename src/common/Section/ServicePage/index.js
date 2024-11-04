import Navigation from "../Navigation";
import emailjs from "emailjs-com";
import { useState } from "react";

const Service = () => {
  
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })  

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData, "YORUR_USER_ID")
        .then((response) => {
            console.log("SUCCESS!" , response.status, response.text);
        })
        .catch((error) => {
            console.log("FAILED...", error);
        });
    };   

    return (
    <>


      <form onSubmit={handleSubmit}>
      <div margin-top = "40px" >
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Send</button>
    </form>
  

    </>
  );
};

export default Service;
