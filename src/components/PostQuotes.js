import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { createQuote } from '../actions/quotesActions';


export class PostQuotes extends Component {
	constructor(props) {
		super(props);
		this.state = {
			quote: "",
			author: ""
		};

		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onChange(event) {
		this.setState({[event.target.name]: event.target.value})
	}

	onSubmit(event) {
		event.preventDefault();

		const post = {
			quote: this.state.quote,
			author: this.state.author
		};

		this.props.createQuote(post);

	}

	render() {
		return(
		<div className="row">
			<div className="col s6 offset-m3 z-depth-4 card-panel">
				<h5>Post Quote</h5><br />
				<form onSubmit= {this.onSubmit}>
					<div>
						<label>Quote: </label><br />
						<input type="text" name="quote" onChange={this.onChange} value={this.state.quote}/>
					</div>
					<div>
						<label>Author: </label><br />
						<input type="text" name="author" onChange={this.onChange} value={this.state.author}/>
					</div>
					<br />
					<button type="submit">Submit</button>
					<br />
				</form>
			</div>
		</div>
		)
	}
}

PostQuotes.propTypes = {
	createQuotes: PropTypes.func
};

export default connect(null, { createQuote })(PostQuotes);