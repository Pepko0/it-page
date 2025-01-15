import { Button, Input } from "../../../ServicePage/Sendmail/styled";
import { ImportantText, Items, BlockItem, BlockLogo, Header, RadioInput, CustomRB } from "./styled";
import { LogoEdit } from "../TaskItemView/styled";
import { Title } from "../TaskItemView/styled";

const TaskItemEditing = ({
  editData,
  handleEditChange,
  handleSave,
  setIsEditing,
}) => {
  return (
    <>
      <Header>
        <Title>Order Number: {editData.from_orderNumber}</Title>
        <BlockLogo>
          <LogoEdit
            onClick={() => setIsEditing(false)}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Zm3.59-13L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41 15.59 7Z"></path>
          </LogoEdit>
        </BlockLogo>
      </Header>
      <Items>
        <BlockItem>
          <ImportantText>Client Name: </ImportantText>
          <Input
            type="text"
            placeholder="Client Name"
            name="from_name"
            value={editData.from_name}
            onChange={handleEditChange}
          />
        </BlockItem>
        <BlockItem>
          <ImportantText>Client Last Name: </ImportantText>
          <Input
            type="text"
            placeholder="Client Last Name"
            name="from_lastname"
            value={editData.from_lastname}
            onChange={handleEditChange}
          />
        </BlockItem>
        <BlockItem>
          <ImportantText>Phone Number: </ImportantText>
          <Input
            type="text"
            placeholder="Client Phone number"
            name="from_number"
            value={editData.from_number}
            onChange={handleEditChange}
          />
        </BlockItem>
        <BlockItem>
          <ImportantText>E-mail: </ImportantText>
          <Input
            type="text"
            placeholder="Client Mail"
            name="from_email"
            value={editData.from_email}
            onChange={handleEditChange}
          />
        </BlockItem>
        <BlockItem>
          <div>
            <RadioInput
              type="radio"
              id="company"
              name="from_company"
              value="Company"
              checked={editData.from_company === "Company"}
              onChange={handleEditChange}
            />
            <CustomRB htmlFor="company">Company</CustomRB>
          </div>
          <div>
            <RadioInput
              type="radio"
              id="private"
              name="from_company"
              value="Private"
              checked={editData.from_company === "Private"}
              onChange={handleEditChange}
            />
            <CustomRB htmlFor="private">Private</CustomRB>
          </div>
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
      <BlockItem>
        <ImportantText>Message: </ImportantText>
        <Input
          type="text"
          name="message"
          value={editData.message}
          onChange={handleEditChange}
        />
      </BlockItem>

      <Button onClick={handleSave}>Save</Button>
    </>
  );
};

export default TaskItemEditing;
