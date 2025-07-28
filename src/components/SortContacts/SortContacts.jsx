import Select from 'react-select';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sortContacts } from 'redux/sort/slice';
import { selectSortValue } from 'redux/sort/selectors';
import { selectStyles } from 'helpers/helpers';
import { Wrapper } from './SortContacts.styled';

const sortByOptions = [
  { value: 'id', label: 'Sort by date' },
  { value: 'name', label: 'Sort by name' },
  { value: 'number', label: 'Sort by number' },
];
const sortOrderOptions = [
  { value: 'asc', label: 'Ascending' },
  { value: 'desc', label: 'Descending' },
];

export const SortContacts = () => {
  const dispatch = useDispatch();
  const sortValue = useSelector(selectSortValue) || {};
  const [sortBy, setSortBy] = useState(
    sortByOptions.find(({ value }) => value === sortValue.sortByValue) ||
      sortByOptions[0]
  );
  const [sortOrder, setSortOrder] = useState(
    sortOrderOptions.find(({ value }) => value === sortValue.sortOrderValue) ||
      sortOrderOptions[0]
  );

  const onChangeSortedBy = ({ value }) => {
    dispatch(sortContacts({ sortByValue: value, sortOrderValue: sortOrder }));

    setSortBy(value);
  };

  const onChangeSortOrder = ({ value }) => {
    dispatch(sortContacts({ sortByValue: sortBy, sortOrderValue: value }));

    setSortOrder(value);
  };

  return (
    <Wrapper>
      <Select
        options={sortByOptions}
        defaultValue={sortBy}
        styles={selectStyles}
        onChange={onChangeSortedBy}
      />

      <Select
        options={sortOrderOptions}
        defaultValue={sortOrder}
        styles={selectStyles}
        onChange={onChangeSortOrder}
      />
    </Wrapper>
  );
};
