import React from 'react';
import deleteIcon from "../../assets/images/icon-delete.svg";

const CardItem = ({ card, onDelete }) => (
  <div className="card">
    <h3>{card.title}</h3>
    <a className="delete-btn" onClick={() => onDelete(card.id)}>
        <img src={deleteIcon} />
    </a>
  </div>
);

export default CardItem;
