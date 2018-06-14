import React from 'react'
import axios from 'axios'

function FormResults(props) {
  return (
    <h2>Search results:</h2>
  )
}

export class App extends React.Component {
  
  constructor (props) {
    super(props)
    this.state = {
      list: [],
      value: '',
      result: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  
  handleChange (event) {
    this.setState({value: event.target.value})
  }

  handleSubmit (event) {
    event.preventDefault()
    var username = this.state.value
    var _this = this
    this.serverRequest =
      axios
        .get('https://api.github.com/users/' + username + '/repos')
        .then(function (result) {
          _this.setState({
            list: result.data,
            result: 'data-received'
          })
        })
        .catch(function (error) {
          console.log(error);
          _this.setState({
            result: 'error'
          })
        });
    return
  }

  render () {
    const hasResult = this.state.result;
    let response = null;
    if (hasResult == 'data-received') {
      response = <h1>User repositories:</h1>;
    } 
    if (hasResult == 'error') {
      response = <h1>No user found</h1>;
    }
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type='text' ref='term' onChange={this.handleChange}/>
          </label>
          <input type='submit' value='Submit'/>
        </form>
        <FormResults/>
        {response}
        {this.state.list.map(function (repo) {
            return (
              <div key={repo.id} className='repo'>
                <b>{repo.name.toUpperCase()}</b>
                <p>{repo.description}</p>
              </div>
            )  
          })
        }
      </div>
    )
  }
}
