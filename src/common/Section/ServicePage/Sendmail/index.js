
import emailjs from "@emailjs/browser";
import SendingEmail from "../../../../features/SendingEmail";
import { useState, useRef  } from "react";
import { db } from "../firebase-config";
import { collection, addDoc } from "firebase/firestore";
import {
  Container,
  ContainerUp,
  TextLabel,
  Input,
  Message,
  Button,
} from "./styled";

const Sendmail = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [lastName, setLastName] = useState("");
  const [number, setNumber] = useState("");
  const [company, setCompany] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const timeoutRef = useRef(null);


  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

    const service_id = "service_1va29ae";
    const template_id_admin = "template_fn3p838";
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


      try { 
        await new Promise((resolve) => {
          timeoutRef.current = setTimeout(resolve, 3000);
        })

          // Save data to Firestore 
          await addDoc(collection(db, "mails"), templateParams); 
          
          // Send email to user 
          try{
            await emailjs.send(service_id, template_id_user, templateParams, user_id)
            console.log("Email sent to user!");
          } catch (error) {
            console.log("Error sending email to user...", error);
          }

          try {
            await emailjs.send(service_id, template_id_admin, templateParams, user_id)
            console.log("Email Sent to admin")
          } catch (error) {
            console.log("Error sending email to admin", error);
          }
          setName(""); 
          setEmail(""); 
          setMessage(""); 
          setLastName(""); 
          setNumber(""); 
          setCompany(""); 
          setCompanyName("");
          setDueDate("");
          setSending(false); 
          setSent(true); 
        } catch (error) { 
          console.error("Error sending email and saving to Firestore:", error); 
          setSending(false); 
        } 
      };

  const handleCancel = () => {
    console.log("Anulowano wysyłanie wiadomości");
    clearTimeout(timeoutRef.current);
    setSending(false);
  };

  const closeSentPopup = () => {
    setSent(false);
  };

  return (
    <>
      <Container onSubmit={handleSubmit}>
        <ContainerUp>
          <div>
            <TextLabel>Name:</TextLabel>
            <Input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <TextLabel>Last Name:</TextLabel>
            <Input
              type="text"
              placeholder="Your Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <div>
            <TextLabel>Number:</TextLabel>
            <Input
              type="tel"
              pattern="[0-9]{9}"
              maxLength="15"
              placeholder="123456789"
              title="correct format: 123456789"
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
              required
            />
          </div>

          <div>
            {" "}
            <TextLabel>Company or Private?</TextLabel>{" "}
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
        </ContainerUp>
        <div>
          <TextLabel>Message:</TextLabel>
          <Message
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write Message"
          />
        </div>
        <Button type="submit">Send Email</Button>
      </Container>

      {sending && (
        <SendingEmail message="Sending..." onCancel={handleCancel} />
      )}

      {sent && (
        <SendingEmail
          message="Message sent correctly"
          onClose={closeSentPopup}
        />
      )}
    </>
  );
};

export default Sendmail;
