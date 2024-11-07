import Navigation from "../Navigation";
import { db } from "../ServicePage/firebase-config";
import { collection, getDocs } from "firebase/firestore";
import { Container } from "./styled";
import { useEffect, useState } from "react";

const AdminPage = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        const querySnapshot = await getDocs(collection(db, "mails"));
        const dataArray = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        setData(dataArray);
      };

      fetchData();
    }, []);


  return (
    <>
      <Navigation />
      <Container>
        <ul>
            {data.map((item, index) => (
                <li key={index}>
                    <p>{item.from_name}</p>
                    <p>{item.from_lastname}</p>
                    <p>{item.from_number}</p>
                    <p>{item.from_email}</p>
                    <p>{item.from_company}</p>
                    <p>{item.from_companyName}</p>
                    <p>{item.from_dueDate}</p>
                    <p>{item.from_message}</p>
                </li>
            ))}
        </ul>
      </Container>
    </>
  );
};

export default AdminPage;
