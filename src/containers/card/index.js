import React, { useReducer, useEffect } from "react";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import CardHeader from "../../components/card/CardHeader";
import CardItem from "../../components/card/CardItem";
import { initialState, cardReducer } from './CardReducer';
import { listCard, addCard, deleteCard } from './CardActions';
import './index.css';

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
            <CardHeader onAdd={handleAddCard} />
            <TransitionGroup className="card-list">
                {state.cards.map((card) => (
                    <CSSTransition key={card.id} timeout={500} classNames="card">
                        <CardItem card={card} onDelete={handleDeleteCard} />
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </div>
    );
  }
  
  export default CardContainer;