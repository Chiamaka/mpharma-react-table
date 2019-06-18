import React, { Component } from 'react';
import Table from 'mpharma-react-table';
import MoreActions from './components/MoreActions';
import { headers, data } from './testData/users';

// const headers = [
//   { title: 'Name', align: 'left', dataIndex: 'name', width: 200 },
//   { title: 'Country', align: 'left', dataIndex: 'country' },
//   { title: 'Age', align: 'left', dataIndex: 'age' },
//   { title: 'Actions', align: 'right' }
// ];

// const data = [
//   {
//     name: 'Chiamaka',
//     country: 'Nigeria',
//     age: 25
//   },
//   {
//     name: 'Nick',
//     country: 'Ghana',
//     age: 30
//   },
//   {
//     name: 'Alfred',
//     country: 'USA',
//     age: 30
//   }
// ];

export default class App extends Component {
  render() {
    return <Table headers={headers} data={data} renderIcon={data => <MoreActions data={data} />} />;
  }
}
