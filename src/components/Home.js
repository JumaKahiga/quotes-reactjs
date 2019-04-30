import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { dayQuote } from '../actions/quotesActions';


class DayQuote extends Component {
	componentWillMount() {
		this.props.dayQuote();
	}

	componentWillReceiveProps(nextProps) {
		if(nextProps.newQuote){
			this.props.quotes.unshift(nextProps.newQuote);
		}

	}

	render() {
		const quoteItems = this.props.myQuote.map(quote =>(
			<div className="center" key>{ quote.id }
				<p>{ quote.quote }</p>
				<h6>Posted { quote.posted } ago by { quote.author }</h6>
			</div>
			))
		return(
		<div>
			<h3 className="center">Quote of the Day</h3> <hr />
			{ quoteItems }
		</div>
		)
	}
}

DayQuote.propTypes = {
	dayQuote: PropTypes.func.isRequired,
	quotes: PropTypes.array.isRequired,
	newQuote: PropTypes.object
};

const mapStateToProps = state => ({
	quotes: state.quotes.items,
	newQuote: state.quotes.item,
	myQuote: state.quotes.select_item
});

export default connect(mapStateToProps, { dayQuote })(DayQuote);