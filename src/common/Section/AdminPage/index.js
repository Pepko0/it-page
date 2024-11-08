import Navigation from "../Navigation";
import TaskList from "./TaskList";
import { db } from "../ServicePage/firebase-config";
import { collection, getDocs, doc, updateDoc } from "firebase/firestore";
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

  const handleSave = async (updatedData) => {
    const docRef = doc(db, "mails", updatedData.id);
    await updateDoc(docRef, updatedData);
    setData((prevData) =>
      prevData.map((item) => (item.id === updatedData.id ? updatedData : item))
    );
  };

  return (
    <>
      <Navigation />
      <Container>
        <TaskList data={data} onSave={handleSave} />
      </Container>
    </>
  );
};

export default AdminPage;
