import Navigation from "../Navigation";
import { db } from "../ServicePage/firebase-config";
import { collection, getDocs } from "firebase/firestore";
import { Container, ImportantText, Task, Title, Text, Items, BlockItem } from "./styled";
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
            <Task key={index}>
              <Title>
                {item.from_name} {item.from_lastname}
              </Title>
              <Items>
                <BlockItem>
                  <ImportantText>Phone Number: </ImportantText>
                  <Text>{item.from_number}</Text>
                </BlockItem>
                <BlockItem>
                  <ImportantText>E-mail: </ImportantText>
                  <Text> {item.from_email}</Text>
                </BlockItem>

                <BlockItem>
                  <ImportantText>Private or Company: </ImportantText>
                  <Text>{item.from_company}</Text>
                </BlockItem>
                <BlockItem>
                  <ImportantText>Company Name: </ImportantText>
                  <Text>{item.from_companyName}</Text>
                </BlockItem>
                <BlockItem>
                  <ImportantText>End Data: </ImportantText>
                  <Text>{item.from_dueDate}</Text>
                </BlockItem>
              </Items>
              <ImportantText>Message: </ImportantText>
              <Text>{item.from_message}</Text>
            </Task>
          ))}
        </ul>
      </Container>
    </>
  );
};

export default AdminPage;
