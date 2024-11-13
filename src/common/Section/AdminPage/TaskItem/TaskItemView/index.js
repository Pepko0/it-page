import {
    Title,
    Text,
    ImportantText,
    Items,
    BlockItem,
    Header,
  } from "./styled";

const TaskItemView = ({ item, handleDelete, setIsEditing }) => {
  return (
    <>
      <Header>
        <Title>
          {item.from_name} {item.from_lastname}
        </Title>
        <div>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      </Header>
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
    </>
  );
};

export default TaskItemView;
