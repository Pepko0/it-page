import emailjs from "@emailjs/browser";
import { useState } from "react";
import { Container, TextLabel, Input } from "./styled";

const Sendmail = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const service_id = "service_1va29ae";
    const template_id = "template_fn3p838";
    const user_id = "bouZ6eRw05NW91fRJ";

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Kacper",
      message: message,
      from_lastname: lastName,
    };

    emailjs
      .send(service_id, template_id, templateParams, user_id)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setName("");
        setEmail("");
        setMessage("");
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
      <TextLabel>E-mail:</TextLabel>
        <Input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div>
      <TextLabel>Message:</TextLabel>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <button type="submit">Send Email</button>
    </Container>
  );
};

export default Sendmail;
