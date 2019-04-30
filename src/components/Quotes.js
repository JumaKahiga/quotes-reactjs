import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchQuotes } from '../actions/quotesActions';


export class Quotes extends Component {
	componentWillMount() {
		this.props.fetchQuotes();
	}

	componentWillReceiveProps(nextProps) {
		if(nextProps.newQuote){
			this.props.quotes.unshift(nextProps.newQuote);
		}

	}

	render() {
		const quoteItems = this.props.quotes.map(quote =>(
			<div className="center" key>{ quote.id }
				<h6>{ quote.author }</h6>
				<p>{ quote.quote }</p>
				<h6>Posted { quote.posted } ago</h6>
			</div>
			))
		return(
		<div>
			<h3 className="center">Quotes</h3> <hr />
			{ quoteItems }
		</div>
		)
	}
}

Quotes.propTypes = {
	fetchQuotes: PropTypes.func.isRequired,
	quotes: PropTypes.array.isRequired,
	newQuote: PropTypes.object
};

const mapStateToProps = state => ({
	quotes: state.quotes.items,
	newQuote: state.quotes.item

});

export default connect(mapStateToProps, { fetchQuotes })(Quotes);