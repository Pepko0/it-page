import {
  Title,
  Text,
  ImportantText,
  Items,
  BlockItem,
  Header,
  LogoEdit,
  LogoDelete,
} from "./styled";
import { BlockLogo } from "../TaskitemEditing/styled";

const TaskItemView = ({ item, handleDelete, setIsEditing }) => {
  return (
    <>
      <Header>
        <Title>Order Number: {item.from_orderNumber}</Title>
        <BlockLogo>
          <LogoEdit
            onClick={() => setIsEditing(true)}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M2.934 8.5h11v2h-11v-2Zm0-2h11v-2h-11v2Zm0 8h7v-2h-7v2Zm15.01-3.13.71-.71a.996.996 0 0 1 1.41 0l.71.71c.39.39.39 1.02 0 1.41l-.71.71-2.12-2.12Zm-.71.71-5.3 5.3v2.12h2.12l5.3-5.3-2.12-2.12Z"></path>
          </LogoEdit>
          <LogoDelete
            onClick={handleDelete}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16 9v10H8V9h8Zm-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1ZM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7Z"></path>
          </LogoDelete>
        </BlockLogo>
      </Header>
      <Items>
        <BlockItem>
          <ImportantText>Name: </ImportantText>
          <Text>{item.from_name}</Text>
        </BlockItem>
        <BlockItem>
          <ImportantText>Last Name: </ImportantText>
          <Text>{item.from_lastname}</Text>
        </BlockItem>
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
      <BlockItem>
        <ImportantText>Message: </ImportantText>
        <Text>{item.message}</Text>
      </BlockItem>
    </>
  );
};

export default TaskItemView;
