import React, { useState, FunctionComponent } from 'react';

import { Icon, Modal, Button, Header } from 'semantic-ui-react';

type ModalIconProps = {
  children: React.ReactNode;
  modalHeader: string;
  content: string;
};

const Modals: FunctionComponent<ModalIconProps> = props => {
  const { children, modalHeader, content } = props;

  const [open, setOpen] = useState<boolean>(false);

  return (
    <Modal
      closeIcon
      open={open}
      trigger={children}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
    >
      <Header icon="archive" content={modalHeader} />
      <Modal.Content>
        <p>{content}</p>
      </Modal.Content>
      <Modal.Actions>
        <Button color="red" onClick={() => setOpen(false)}>
          <Icon name="remove" /> 닫기
        </Button>
        <Button color="green" onClick={() => setOpen(false)}>
          <Icon name="checkmark" /> 확인
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default Modals;
