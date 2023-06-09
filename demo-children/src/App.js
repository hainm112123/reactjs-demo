import './App.css';
import React, {Component} from 'react'

import Accordion from './components/Accordion'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Accordion heading="abc">
          Demo Children   
        </Accordion>
      </div>
    );
  }
}

export default App;
