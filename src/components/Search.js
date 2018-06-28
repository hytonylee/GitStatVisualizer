import React from 'react';


export default class Search extends React.Component{


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input type='text' ref='term' onChange={this.handleChange}/>
                    </label>
                    <input type='submit' value='Submit'/>
                </form>
            </div>
        )
    }
}


