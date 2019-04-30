import { DAY_QUOTE, FETCH_QUOTES, NEW_QUOTE, ACTION_FAILED } from './types';

var apiURL1 = "https://my-quotes-app.herokuapp.com/quotes/my_quotes/"
var apiURL2 = "https://my-quotes-app.herokuapp.com/quotes/quote_of_the_day/"

export const fetchQuotes = () => dispatch => {
	fetch(apiURL1)
	.then(res => res.json())
	.then(data=> 
		dispatch({
			type: FETCH_QUOTES,
			payload: data
		})
	);
};

export const createQuote = (postData) => dispatch => {
	fetch(apiURL1, {
		method: 'POST',
		headers: {
			'content-type': 'application/json'
		},
		body: JSON.stringify(postData)
	})
	.then(res => res.json())
	.then(data =>
		dispatch({
			type: NEW_QUOTE,
			payload: data
		}));
};

export const dayQuote = () => dispatch => {
	fetch(apiURL2)
	.then(res => res.json())
	.then(data=> 
		dispatch({
			type: DAY_QUOTE,
			payload: data
		})
	);
};