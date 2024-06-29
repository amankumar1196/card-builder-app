import React, { useReducer, useEffect } from "react";
import CardHeader from "../../components/card/CardHeader";
import CardItem from "../../components/card/CardItem";
import {cardReducer, initialState} from "./CardReducer";
import { listCard } from './CardActions';

function CardContainer() {
    const [state, dispatch] = useReducer(cardReducer, initialState);
    
    useEffect(() => {
        fetch('https://dummyjson.com/posts?limit=10')
          .then((res) => res.json())
          .then((response) => dispatch(listCard(response.posts)))
          .catch((error) => console.error(error));
      }, []);

    return (
        <div>
            <CardHeader />
            {state.cards.map((card) => (
                <CardItem key={card.id} card={card} />
            ))}
        </div>
        
    );
  }
  
  export default CardContainer;