export const initialState = {
    cards: [],
  };
  
  export const cardReducer = (state, action) => {
    switch (action.type) {
      case 'CARD_LIST': {
        const { data } = action.payload;
        return {
          cards: [...state.cards, ...data],
        };
      }
      case 'CARD_ADD': {
        const { data } = action.payload;
        return {
          cards: [data, ...state.cards],
        };
      }
      case 'CARD_DELETE': {
        const { id } = action.payload;
        let filteredData = state.cards.filter((item) => item.id != id);
        return {
          cards: [...filteredData],
        };
      }
    }
  };
  