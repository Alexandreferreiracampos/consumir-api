import React, {Component} from 'react';
import api from './api';

class App extends Component {

  async componentDidMount() {
    const response = await api.get('/1')

    console.log(response.data);
  }
  render(){
    return(
      <div>
        <h1>Artigos Listados </h1>
      </div>
    );
  }
}

export default App;
