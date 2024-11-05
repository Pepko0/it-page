import emailjs from "@emailjs/browser";
import { useState } from "react";
import { Container, TextLabel, Input, Message } from "./styled";

const Sendmail = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [lastName, setLastName] = useState("");
  const [number, setNumber] = useState("");
  const [company, setCompany] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const service_id = "service_1va29ae";
    const template_id_admin= "template_fn3p838";
    const template_id_user = "template_wwt6kj9";
    const user_id = "bouZ6eRw05NW91fRJ";

    const templateParams = {
      from_name: name,
      from_email: email,
      my_companyName: "IT-LIONS",
      message: message,
      from_lastname: lastName,
      from_number: number,
      from_company: company,
      from_companyName: companyName,
      from_dueDate: dueDate,
    };

    //for user
    emailjs
      .send(service_id, template_id_user, templateParams, user_id)
      .then((response) => {
        console.log("E-mail sent to the user!", response.status, response.text)
      })
      .catch((error) => {
        console.log("Failed to send email to user...", error);
      })

    //For admin
    emailjs
      .send(
        service_id,
        template_id_admin,
        templateParams,
        user_id
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setName("");
        setEmail("");
        setMessage("");
        setLastName("");
        setNumber("");
        setCompany("");
        setCompanyName("");
        setDueDate("");
      })
      .catch((error) => {
        console.log("FAILED...", error);
      });
  };

  return (
    <Container onSubmit={handleSubmit}>
      <div>
        <TextLabel>Name:</TextLabel>
        <Input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <TextLabel>Last Name:</TextLabel>
        <Input
          type="text"
          placeholder="Your Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div>
        <TextLabel>Number:</TextLabel>
        <Input
          type="tel"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}"
          maxLength="15"
          placeholder="+48 123 456 789"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
      </div>

      <div>
        <TextLabel>E-mail:</TextLabel>
        <Input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div>
        {" "}
        <TextLabel>Are you a Company or Private?:</TextLabel>{" "}
        <div>
          {" "}
          <Input
            type="radio"
            id="company"
            name="userType"
            value="Company"
            checked={company === "Company"}
            onChange={(e) => setCompany(e.target.value)}
          />{" "}
          <label htmlFor="company">Company</label>{" "}
        </div>{" "}
        <div>
          {" "}
          <Input
            type="radio"
            id="private"
            name="userType"
            value="Private"
            checked={company === "Private"}
            onChange={(e) => setCompany(e.target.value)}
          />{" "}
          <label htmlFor="private">Private</label>{" "}
        </div>{" "}
      </div>
      <div>
        <TextLabel>Company Name:</TextLabel>
        <Input
          type="text"
          placeholder="Company Name"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
        />
      </div>
      <div>
        <TextLabel>End Data:</TextLabel>
        <Input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
      </div>
      <div>
        <TextLabel>Message:</TextLabel>
        <Message
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Write Message"
        />
      </div>
      <button type="submits">Send Email</button>
    </Container>
  );
};

export default Sendmail;