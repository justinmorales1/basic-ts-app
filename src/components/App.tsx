import React from 'react';
import { ListViewClass } from './ListViewClass';
import { ListViewFunctional } from './ListViewFunctional';

class App extends React.Component {

  render() {
    return (
      <div>
        <ListViewFunctional />
        <ListViewClass />
      </div>
    )
  }
}



export default App;