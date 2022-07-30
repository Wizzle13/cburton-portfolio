import React from'react';

const Modal = ({ onClose, currentProject }) =>  {
    const {name, url,github, description, image} = currentProject;

    return (
        <div className="modalBackdrop">
        <div className="modalContainer">
        <h3 className="modalTitle">{name}</h3>
        <img src={require(`../assets/images/${image}`)} alt={name} />
        <p>{description}</p>
        <p>
            <a href={url}>
                <img src={require(`../assets/images/website.gif`)} alt="Website"  />
            </a>
        </p>
        <p>
            <a href={github}>
                <img src={require(`../assets/images/github.gif`)} alt="Github"  />
            </a>
        </p>
        <button onClick={onClose} type="button">
            Close this Window
        </button>
        </div>
        </div>
    );
}

export default Modal;