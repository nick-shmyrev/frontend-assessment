const defaultState = {
  text: '',
  tag: '',
};

const filtersReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return { ...state, text: action.text };
      
    case 'SET_TAG_FILTER':
      return {...state, tag: action.tag };
    default:
      return state;
  }
};

export default filtersReducer;
