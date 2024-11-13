import { Input } from "../../../ServicePage/Sendmail/styled";
import { Title, ImportantText, Items, BlockItem } from "./styled";

const TaskItemEditing = ({ editData, handleEditChange, handleSave }) => {
  return (
    <>
      <Title>
        <Input
          type="text"
          name="from_name"
          value={editData.from_name}
          onChange={handleEditChange}
        />
        <Input
          type="text"
          name="from_lastname"
          value={editData.from_lastname}
          onChange={handleEditChange}
        />
      </Title>
      <Items>
        <BlockItem>
          <ImportantText>Phone Number: </ImportantText>
          <Input
            type="text"
            name="from_number"
            value={editData.from_number}
            onChange={handleEditChange}
          />
        </BlockItem>
        <BlockItem>
          <ImportantText>E-mail: </ImportantText>
          <Input
            type="text"
            name="from_email"
            value={editData.from_email}
            onChange={handleEditChange}
          />
        </BlockItem>
        <BlockItem>
          <ImportantText>Private or Company: </ImportantText>
          <Input
            type="text"
            name="from_company"
            value={editData.from_company}
            onChange={handleEditChange}
          />
        </BlockItem>
        <BlockItem>
          <ImportantText>Company Name: </ImportantText>
          <Input
            type="text"
            name="from_companyName"
            value={editData.from_companyName}
            onChange={handleEditChange}
          />
        </BlockItem>
        <BlockItem>
          <ImportantText>End Data: </ImportantText>
          <Input
            type="date"
            name="from_dueDate"
            value={editData.from_dueDate}
            onChange={handleEditChange}
          />
        </BlockItem>
      </Items>
      <ImportantText>Message: </ImportantText>
      <Input
        type="text"
        name="message"
        value={editData.message}
        onChange={handleEditChange}
      />
      <button onClick={handleSave}>Save</button>
    </>
  );
};

export default TaskItemEditing;
