import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineClose } from 'react-icons/ai';
import { selectFilterValue } from 'redux/filter/selectors';
import { filterContacts } from 'redux/filter/slice';
import {
  FilterInput,
  SearchIcon,
  WrapperInput,
  ResetBtn,
} from './Filter.styled';
import { Label } from 'components/Forms/Form.styled';
import { useEffect } from 'react';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilterValue);

  useEffect(() => {
    dispatch(filterContacts(''));
  }, [dispatch]);

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
      <Label>
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
      </Label>
    </>
  );
};
