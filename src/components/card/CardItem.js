import React from 'react';
import deleteIcon from "../../assets/images/icon-delete.svg";

const CardItem = ({ card, onDelete }) => (
  <div className="card">
    <h3>{card.title}</h3>
    <span className="delete-btn" onClick={() => onDelete(card.id)}>
        <img alt="delete" src={deleteIcon} />
    </span>
  </div>
);

export default CardItem;
