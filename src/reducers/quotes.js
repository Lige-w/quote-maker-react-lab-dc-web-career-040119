

const quotes = (state = [], action) => {
  switch (action.type) {
    case 'ADD_QUOTE':
      return [...state,{
        id: action.quote.id,
        content: action.quote.content,
        author: action.quote.author,
        votes: 0
      }]
    case 'REMOVE_QUOTE':
      return state.filter(quote=> quote.id !== action.quoteId)
    case 'UPVOTE_QUOTE':
      return state.map(quote => (
          quote.id === action.quoteId ? {...quote, votes: quote.votes + 1} : quote
      ))
    case 'DOWNVOTE_QUOTE':
      return state.map(quote => (
          quote.id === action.quoteId && quote.votes > 0 ? {...quote, votes: quote.votes - 1} : quote
      ))
    default:
      return state;
  }
}

export default quotes