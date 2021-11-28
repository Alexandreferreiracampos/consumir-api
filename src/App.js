import React, {Component} from 'react';
import api from './api';

class App extends Component {

  state = {
    artigos:[],
  }

  async componentDidMount() {
    const response = await api.get('/')

    //console.log(response.data);
    this.setState({artigos: response.data})
  }
  render(){

    const {artigos} = this.state;
    console.log(artigos);

    return(
      <div>
        <h1>Artigos Listados </h1>
        <ul>
          {artigos.map(artigo =>(
            <li key={artigo._id}>
            <h2>nome: {artigo.nome}</h2>
          </li>
          ) 
          )}
        </ul>
      </div>
    );
  }
}

export default App;
