import { db } from "../common/Section/ServicePage/firebase-config";
import { collection, getDocs, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { useState, useEffect } from "react";

const useTaskData = () => {
  const [taskData, setTaskData] = useState({
    status: "pending",
    data: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "mails"));
        const dataArray = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setTaskData({
          status: "succes",
          data: dataArray,
        });
      } catch (error) {
        setTaskData({ status: "error" });
      }
    };
    setTimeout(fetchData, 1000);
  }, []);

  const updateTask = async (updatedData) => {
    try {
      setTaskData((prevState) => ({ ...prevState, status: "pending" }));
      const docRef = doc(db, "mails", updatedData.id);
      await updateDoc(docRef, updatedData);
      const querySnapshot = await getDocs(collection(db, "mails"));
      const dataArray = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTaskData({ status: "success", data: dataArray });
    } catch (error) {
      setTaskData({ status: "error" });
    }
  };

  const deleteTask = async(id) => {
    try{
        setTaskData((prevState) => ({ ...prevState, status: "pending"}));
        const docRef = doc(db, "mails", id);
        await deleteDoc(docRef);
        const querySnapshot = await getDocs(collection(db, "mails"));
        const dataArray = querySnapshot.docs.map((doc) =>({
            id: doc.id,
            ...doc.data(),
        }));

        setTaskData({status: "succes", data: dataArray})
    } catch (error) {
        setTaskData({status: "error"})
    }
  }
  return { taskData, updateTask, deleteTask };
};

export default useTaskData;
