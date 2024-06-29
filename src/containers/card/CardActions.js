export const toggleLoader = (data) => {
    return {
        type: "CARD_LOADER_TOGGLE",
        payload: data
    }
}
export const listCard = (data) => {
    return {
        type: 'CARD_LIST',
        payload: {
            data,
        },
    };
  };
  
export const addCard = (data) => {
    return {
        type: 'CARD_ADD',
        payload: {
            data,
        },
    };
};
  
export const deleteCard = (id) => {
    return {
        type: 'CARD_DELETE',
        payload: {
            id,
        },
    };
};
  