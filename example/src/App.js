import React, { Component } from 'react';

import ExampleComponent from 'mpharma-react-table';

const headers = [
  { title: 'Visit Date', align: 'left' },
  { title: 'Patient ID', align: 'left' },
  { title: 'Drug name', align: 'left' },
  { title: 'Quantity Sold', align: 'right' },
  { title: 'Cost of sale', align: 'right' },
  { title: 'Sale Total', align: 'right' },
  { title: 'Profit', align: 'right' }
];

export default class App extends Component {
  render() {
    return (
      <div>
        <ExampleComponent text="Modern React component module" headers={headers} />
      </div>
    );
  }
}
