import { createSelector } from '@reduxjs/toolkit';
import { selectFilterValue } from 'redux/filter/selectors';
import { selectSortValue } from 'redux/sort/selectors';

export const selectContacts = state => state.contacts.items;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilterValue, selectSortValue],
  (contacts, filter, sort) => {
    return contacts
      .filter(
        contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase()) ||
          contact.number.includes(filter)
      )
      .sort((a, b) =>
        sort.sortOrderValue === 'asc'
          ? a[sort.sortByValue].localeCompare(b[sort.sortByValue])
          : b[sort.sortByValue].localeCompare(a[sort.sortByValue])
      );
  }
);
