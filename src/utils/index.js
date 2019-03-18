import { createContext } from 'react';

export const DataIndexContext = createContext();

export function extractDataIndexes (headers) {
  const dataIndexes = [];
  headers.forEach(header => {
    if (header.dataIndex) {
      dataIndexes.push({ dataIndex: header.dataIndex, align: header.align });
    }
  });
  return dataIndexes;
}
