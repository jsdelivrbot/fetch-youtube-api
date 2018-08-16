import React, {Component} from 'react';

// declare an event handler
// pass the event handler to the element we want to monitor for events.
class SearchBar extends Component{
	constructor(props){
		super(props);
		this.state = {term : ''};

		this.onInputChange = this.onInputChange.bind(this);
		//this.handleKeyPress = this.handleKeyPress.bind(this);
	}

	render(){
		return (
		<div className="search-bar">
			<input 
			value = {this.state.term}
			onChange={this.onInputChange} 
			/>
		</div>
		);
	}

	// event handler
	onInputChange(event){
		this.setState({term: event.target.value});
		this.props.onSearchTermChange(this.state.term);
	}

	// handleKeyPress(event){
	// 	if(event.key == 'Enter'){			
	// 		this.props.onSearchTermChange(this.state.term);
	// 	}
	// }
}

export default SearchBar;