import { createSelector } from '@reduxjs/toolkit';

// export const selectContacts = ({ contacts }) =>
//   [...contacts.items].sort((a, b) => a.name.localeCompare(b.name));
export const getContacts = state => state.contacts.items;
export const getFilter = state => state.filter;
export const isLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

export const selectAllContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

// export const selectAllContacts = createSelector(
//   [selectContacts, selectFilter],
//   (contacts, filter) => {
//     if (!contacts) {
//       return [];
//     }
//     return contacts.filter(({ name }) =>
//       name.toLowerCase().trim().includes(filter.toLowerCase())
//     );
//   }
// );


