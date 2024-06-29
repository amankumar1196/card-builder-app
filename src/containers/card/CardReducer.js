export const initialState = {
    cards: [],
  };
  
  export const cardReducer = (state, action) => {
    switch (action.type) {
      case 'CARD_LIST': {
        const { data } = action.payload;
      }
      case 'CARD_ADD': {
        const { data } = action.payload;
      }
      case 'CARD_DELETE': {
       
      }
    }
  };
  