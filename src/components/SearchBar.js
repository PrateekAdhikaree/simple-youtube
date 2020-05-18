import './SearchBar.css';
import React from 'react';

class SearchBar extends React.Component {
  state = { term: this.props.defaultTerm };

  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <h2 className="ui header">Video Search</h2>
            <div>
              <input
                id="search-input"
                type="text"
                value={this.state.term}
                onChange={this.onInputChange}
              />
              <button
                className="ui youtube button"
                type="submit"
                onClick={this.onFormSubmit}
              >
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
