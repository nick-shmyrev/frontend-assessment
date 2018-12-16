const setTextFilter = text => ({
  type: 'SET_TEXT_FILTER',
  text,
});

const setTagFilter = tag => ({
  type: 'SET_TAG_FILTER',
  tag,
});

export { setTextFilter, setTagFilter };
