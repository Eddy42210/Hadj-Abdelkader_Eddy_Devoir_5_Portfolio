import { useState } from 'react';
import { createPortal } from 'react-dom';
import ModalContent from '../components/Modal'


export default function Portal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className='bouton' onClick={() => setShowModal(true)}>
        En savoir plus
      </button>
      {showModal && createPortal(
   
        <ModalContent onClose={() => setShowModal(false)} />,
        document.getElementById('root')
    
)}
    </>
  );
}



