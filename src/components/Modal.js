
export default function ModalContent({ onClose }) {
    return (
        <div className='modal'>
            <div>Test de la modale</div>
            <button onClick={onClose}>Fermer</button>
        </div>
    );
}