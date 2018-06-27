import React from 'react';


export default class Search extends React.Component{
    render() {
        return (
            <div>
                <form>
                    <input type="text"/>
                    <button>Search Public Repos</button>
                </form>
            </div>
        )
    }
}


