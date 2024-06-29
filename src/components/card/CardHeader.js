const CardHeader = ({ onAdd }) => (
    <header>
      <h2>Cards List</h2>
      <button className="add-card-button" onClick={onAdd}>
        Add Card
      </button>
    </header>
  );
  
export default CardHeader;