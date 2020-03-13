import React from 'react';
import { format } from 'date-fns';
import { Pill } from '../components/styles';

export const countries = {
  GH: 'Ghana',
  NG: 'Nigeria',
  ZM: 'Zambia'
};

export function tableSort(array, sortFn) {
  return array
    .map(el => [el])
    .sort((a, b) => {
      const order = sortFn(a[0], b[0]);
      if (order !== 0) return order;
    })
    .map(el => el[0]);
}

export function getSortingFn(order, orderBy, customSortFn) {
  return order
    ? (a, b) => desc(a, b, orderBy, customSortFn)
    : (a, b) => -desc(a, b, orderBy, customSortFn);
}

function desc(a, b, orderBy, customSortFn) {
  if (customSortFn) {
    return customSortFn(a, b);
  }

  if (typeof a[orderBy] === 'string' && typeof b[orderBy] === 'string') {
    const A = a[orderBy] ? a[orderBy].toLowerCase() : '';
    const B = b[orderBy] ? b[orderBy].toLowerCase() : '';
    if (B < A) {
      return -1;
    }
    if (B > A) {
      return 1;
    }
    return 0;
  }

  // if orderBy is `app_type`
  if (orderBy === 'app_type') {
    const prevItem = findGreatestElement(a[orderBy]);
    const item = findGreatestElement(b[orderBy]);
    if (item < prevItem) {
      return -1;
    }
    if (item > prevItem) {
      return 1;
    }
    return 0;
  }

  if (b[orderBy] < a[orderBy]) {
    return -1;
  } else if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function findGreatestElement(array) {
  if (array === null) return '';
  if (array.length === 1) return array[0].toLowerCase();
  let greatest = '';
  for (let i = 1; i < array.length; i++) {
    if (array[i].toLowerCase() > array[i - 1].toLowerCase()) {
      greatest = array[i].toLowerCase();
    }
  }
  return greatest;
}

export function formatDate(item) {
  // matches an ISO date string like `2019-09-18T11:10:41.508877Z`
  const datetimeFormatRegex = /\d{4}-[01]\d-[0-9]\dT[0-9]\d:[0-5]\d:[0-5]\d\.\d+(?:[+-][0-2]\d:[0-5]\d|Z)/;
  if (datetimeFormatRegex.test(item)) {
    const date = new Date(item);
    return format(date, 'MMMM d, yyyy');
  }
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
