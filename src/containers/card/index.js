import React, { useReducer } from "react";
import CardHeader from "../../components/card/CardHeader";
import CardItem from "../../components/card/CardItem";
import {cardReducer, initialState} from "./CardReducer";

function CardContainer() {
    const [state, dispatch] = useReducer(cardReducer, initialState);

    return (
        <div>
            <CardHeader />
            <CardItem />
        </div>
        
    );
  }
  
  export default CardContainer;