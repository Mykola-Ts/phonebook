import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineClose } from 'react-icons/ai';
import { selectFilterValue } from 'redux/selectors';
import { filterContacts } from 'redux/filterSlice';
import {
  FilterLabel,
  FilterInput,
  SearchIcon,
  WrapperInput,
  ResetBtn,
} from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilterValue);

  const onChange = evt => {
    const value = evt.currentTarget.value.trim();

    dispatch(filterContacts(value));
  };

  const onReset = evt => {
    const label = evt.currentTarget.closest('label');
    label.control.value = '';

    dispatch(filterContacts(''));
  };

  return (
    <>
      <FilterLabel>
        Find contact by name or number
        <WrapperInput>
          <FilterInput
            type="text"
            value={filter}
            placeholder="Name or number"
            onChange={onChange}
          />
          <SearchIcon />
          {filter && (
            <ResetBtn type="button" onClick={onReset}>
              <AiOutlineClose />
            </ResetBtn>
          )}
        </WrapperInput>
      </FilterLabel>
    </>
  );
};
