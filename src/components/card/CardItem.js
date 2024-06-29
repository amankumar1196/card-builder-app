function CardItem({card, onDelete}) {
    return (
        <div>
            <h3>{card.title}</h3>
            <button onClick={onDelete}>
                Delete Card
            </button>
        </div>
    );
  }
  
  export default CardItem;