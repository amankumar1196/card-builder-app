import React, { useReducer, useEffect } from "react";
import CardHeader from "../../components/card/CardHeader";
import CardItem from "../../components/card/CardItem";
import {cardReducer, initialState} from "./CardReducer";
import { listCard, addCard, deleteCard } from './CardActions';

function CardContainer() {
    const [state, dispatch] = useReducer(cardReducer, initialState);
    
    useEffect(() => {
        fetch('https://dummyjson.com/posts?limit=10')
          .then((res) => res.json())
          .then((response) => dispatch(listCard(response.posts)))
          .catch((error) => console.error(error));
      }, []);

    const handleDeleteCard = (id) => {
        fetch(`https://dummyjson.com/posts/${id}`, { method: 'DELETE'})
            .then((res) => res.json())
            .then(dispatch(deleteCard(id)))
            .catch((error) => console.error(error));
    };
    
    const handleAddCard = () => {
        let title = prompt('Enter card title');
        if (!title.trim()) return;
        dispatch(addCard({ id: Date.now(), title }));
    };
    
    return (
        <div>
            <CardHeader onAdd={handleAddCard}/>
            {state.cards.map((card) => (
                <CardItem key={card.id} card={card} onDelete={handleDeleteCard}/>
            ))}
        </div>
        
    );
  }
  
  export default CardContainer;