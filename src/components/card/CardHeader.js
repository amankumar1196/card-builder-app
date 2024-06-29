function CardHeader({onAdd}) {
    return (
        <header>
            <h2>Cards List</h2>
            <button onClick={onAdd}>
                Add Card
            </button>
        </header>
    );
  }
  
  export default CardHeader;