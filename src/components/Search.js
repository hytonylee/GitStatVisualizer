import React from 'react';
import axios from 'axios';


export default class Search extends React.Component {
    state = {
        error: undefined
    }
    handleSearch = (e) => {
        e.preventDefault();
        const terms = e.target.elements.terms.value.trim();
        const error = this.props.handleSearch(terms);
        this.setState(() => ({error}));
        if(!error) {
            e.target.elements.terms.value = '';
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSearch}>
                    <input type='text' name="terms" onChange={this.handleSubmit}/>
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}


