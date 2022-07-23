import React from'react';

const Modal = ({ onClose, currentProject }) =>  {
    const {name, url,github, description, image} = currentProject;

    return (
        <div className="modalBackdrop">
        <div className="modalContainer">
        <h3 className="modalTitle">{name}</h3>
        <img src={require(`../assets/images/${image}`)} alt={name} />
        <p>{description}</p>
        <p>{url}</p>
        <p>{github}</p>
            <button onClick={onClose} type="button">
            Close this modal
            </button>
        </div>
        </div>
    );
}

export default Modal;