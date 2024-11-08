// Task.js
import React, { useState } from "react";
import { Task, Title, Text, ImportantText, Items, BlockItem } from "./styled";

const TaskItem = ({ item, onSave }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({ ...item });

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    onSave(editData);
    setIsEditing(false);
  };

  return (
    <Task>
      {isEditing ? (
        <>
          <Title>
            <input
              type="text"
              name="from_name"
              value={editData.from_name}
              onChange={handleEditChange}
            />
            <input
              type="text"
              name="from_lastname"
              value={editData.from_lastname}
              onChange={handleEditChange}
            />
          </Title>
          <Items>
            <BlockItem>
              <ImportantText>Phone Number: </ImportantText>
              <input
                type="text"
                name="from_number"
                value={editData.from_number}
                onChange={handleEditChange}
              />
            </BlockItem>
            <BlockItem>
              <ImportantText>E-mail: </ImportantText>
              <input
                type="text"
                name="from_email"
                value={editData.from_email}
                onChange={handleEditChange}
              />
            </BlockItem>
            <BlockItem>
              <ImportantText>Private or Company: </ImportantText>
              <input
                type="text"
                name="from_company"
                value={editData.from_company}
                onChange={handleEditChange}
              />
            </BlockItem>
            <BlockItem>
              <ImportantText>Company Name: </ImportantText>
              <input
                type="text"
                name="from_companyName"
                value={editData.from_companyName}
                onChange={handleEditChange}
              />
            </BlockItem>
            <BlockItem>
              <ImportantText>End Data: </ImportantText>
              <input
                type="date"
                name="from_dueDate"
                value={editData.from_dueDate}
                onChange={handleEditChange}
              />
            </BlockItem>
          </Items>
          <ImportantText>Message: </ImportantText>
          <input
            type="text"
            name="message"
            value={editData.message}
            onChange={handleEditChange}
          />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
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
              <Text>{item.from_email}</Text>
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
          <Text>{item.message}</Text>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
      )}
    </Task>
  );
};

export default TaskItem;
