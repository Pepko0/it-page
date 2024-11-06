import { Container, Modal, PopupMessage, Button } from "./styled";

const SendingEmail = ({ message, onCancel, onClose }) => (
  <Container>
    <Modal>
      <PopupMessage>{message}</PopupMessage>{" "}
      {onCancel && <Button onClick={onCancel}>Anuluj</Button>}{" "}
      {onClose && <Button onClick={onClose}>Zamknij</Button>}
    </Modal>
  </Container>
);

export default SendingEmail;
