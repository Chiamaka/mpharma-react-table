# mpharma-react-table

> A simple reusable table component in React

[![NPM](https://img.shields.io/npm/v/mpharma-react-table.svg)](https://www.npmjs.com/package/mpharma-react-table) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save mpharma-react-table
-- or --
yarn add mpharma-react-table

> I havent uploaded to the npm registry yet so if you want to use this code, do this for now:
npm install --save chiamaka/mpharma-react-table#master
```

## Usage

```jsx
import React from 'react';
import Table from 'mpharma-react-table';

const headers = [
  { title: 'Visit Date', align: 'left', dataIndex: 'visit_date' },
  { title: 'Patient ID', align: 'left', dataIndex: 'patient_id' },
  { title: 'Drug name', align: 'left', dataIndex: 'drug_name' }
];

const data = [
  {
    visit_date: '05/27/2017',
    patient_id: 9194593,
    drug_name: 'AUGMENTIN'
  },
  {
    visit_date: '09/18/2017',
    patient_id: 631924,
    drug_name: 'AUGMENTIN'
  }
];

function Example() {
  return <Table headers={headers} data={data} />;
}
```

> (\*) means required

## Table Props

| Name       | Type           | Default | Description                                              |
| ---------- | -------------- | ------- | -------------------------------------------------------- |
| \*headers  | array[objects] | None    | The headers of the table. See Header props for more info |
| \*data     | array[objects] | None    | Data to be rendered                                      |
| renderIcon | function       | None    | Funtion which returns icon menu for additional actions   |
| tableStyle | object         | None    | Style for the table wrapper                              |

## Headers Props

| Name      | Type                        | Default | Description                                                                                     |
| --------- | --------------------------- | ------- | ----------------------------------------------------------------------------------------------- |
| \*title   | string                      | None    | Title of the header                                                                             |
| align     | string: left, center, right | left    | How you want the header and the corresponding data to be aligned                                |
| dataIndex | string                      | None    | Key that ties data to the header. Should be the key of the data that you want under this header |
| width     | number                      | inherit | Specify width for the header                                                                    |

## Contributing

1. clone the project and cd into project
2. npm install && npm start
3. create another terminal window and cd into example/ && npm start

## License

MIT © [chiamaka](https://github.com/chiamaka)
