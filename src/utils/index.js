import React from 'react';
import { format } from 'date-fns';
import { Pill } from '../components/styles';

export const countries = {
  GH: 'Ghana',
  NG: 'Nigeria'
};

export function tableSort(array, cmp) {
  return array
    .map((el, index) => [el, index])
    .sort((a, b) => {
      const order = cmp(a[0], b[0]);
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
  if (typeof item === 'string') {
    const date = new Date(item).getFullYear();
    if (!isNaN(date)) return format(new Date(item), 'MMMM D, YYYY');
    return false;
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

export function formatRole(item, key) {
  if (Array.isArray(item) && key === 'roles') {
    return (item[0] && item[0].name) || '-';
  }
}
