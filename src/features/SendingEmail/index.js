import { Container, Modal, PopupMessage, Button } from "./styled";

const SendingEmail = ({ message, onCancel, onClose }) => (
  <Container>
    <Modal>
      <PopupMessage>{message}</PopupMessage>
      {onCancel && <Button onClick={onCancel}>Cancel</Button>}
      {onClose && <Button onClick={onClose}>Close</Button>}
    </Modal>
  </Container>
);

export default SendingEmail;
