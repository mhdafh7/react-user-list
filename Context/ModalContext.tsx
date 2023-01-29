import React, {createContext, useState} from 'react';

type modalData = {name: string; email: string; role: string};
type ModalContextType = {
  addModalOpen: boolean;
  editModalOpen: boolean;
  modalData: modalData;
  modalId: string;
  setAddModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setEditModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setModalData: React.Dispatch<React.SetStateAction<modalData>>;
  setModalId: React.Dispatch<React.SetStateAction<string>>;
};

const ModalContext = createContext<ModalContextType>({
  addModalOpen: false,
  editModalOpen: false,
  modalData: {name: '', email: '', role: ''},
  modalId: '',
  setAddModalOpen: () => {},
  setEditModalOpen: () => {},
  setModalData: () => {},
  setModalId: () => {},
});

function ModalProvider({children}) {
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [modalData, setModalData] = useState({name: '', email: '', role: ''});
  const [modalId, setModalId] = useState('');

  return (
    <ModalContext.Provider
      value={{
        addModalOpen,
        editModalOpen,
        modalData,
        modalId,
        setAddModalOpen,
        setEditModalOpen,
        setModalData,
        setModalId,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export {ModalProvider, ModalContext};
