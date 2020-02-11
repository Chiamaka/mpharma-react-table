import React from 'react';
import { format } from 'date-fns';
import { Pill } from '../components/styles';

export const countries = {
  GH: 'Ghana',
  NG: 'Nigeria'
};

export function tableSort(array, sortFn) {
  return array
    .map((el, index) => [el, index])
    .sort((a, b) => {
      const order = sortFn(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    })
    .map(el => el[0]);
}

function desc(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

export function getSortingFn(order, orderBy) {
  return order ? (a, b) => desc(a, b, orderBy) : (a, b) => -desc(a, b, orderBy);
}

export function formatDate(item) {
  // matches an ISO date string like `2019-09-18T11:10:41.508877Z`
  const datetimeFormatRegex = /\d{4}-[01]\d-[0-9]\dT[0-9]\d:[0-5]\d:[0-5]\d\.\d+(?:[+-][0-2]\d:[0-5]\d|Z)/;
  if (datetimeFormatRegex.test(item)) {
    const date = new Date(item);
    return format(date, 'MMMM d, yyyy');
  }
}

export function filterNestedData(data, key, render) {
  if (render) {
    return data.map(item => (typeof item[key] === 'object' ? { ...item, [key]: render(item[key]) } : item));
  }
  return data;
}

export function formatActive(item) {
  if (typeof item === 'boolean') {
    return item ? <Pill active>Active</Pill> : <Pill inactive>Inactive</Pill>;
  }
}

export function formatCountry(item, key) {
  if (typeof item === 'string' && key === 'country') {
    return countries[item];
  }
}
