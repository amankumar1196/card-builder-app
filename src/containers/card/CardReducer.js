export const initialState = {
    cards: [],
    isLoading: false
  };
  
  export const cardReducer = (state, action) => {
    switch (action.type) {
        case "CARD_LOADER_TOGGLE": {
            return {
                ...state,
                isLoading: action.payload
            }
        }
        case 'CARD_LIST': {
            const { data } = action.payload;
            return {
                ...state,
                cards: [...state.cards, ...data],
            };
        }
        case 'CARD_ADD': {
            const { data } = action.payload;
            return {
                ...state,
                cards: [data, ...state.cards],
            };
        }
        case 'CARD_DELETE': {
            const { id } = action.payload;
            let filteredData = state.cards.filter((item) => item.id !== id);
            return {
                ...state,
                cards: [...filteredData],
            };
        }
        default:{
            return {
                ...state
            }
        }
    }
  };
  