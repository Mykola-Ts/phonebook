import { object, string } from 'yup';
import { toast } from 'react-hot-toast';

export const defaultErrorText = 'Oops, something went wrong. Try again.';

export const isIncludesContact = (contacts, name, number) => {
  const isIncludesName = contacts.find(
    contact => contact.name.toLowerCase() === name.toLowerCase()
  );
  const isIncludesNumber = contacts.find(contact => contact.number === number);

  if (isIncludesName || isIncludesNumber) {
    const warningText = `A contact with the ${
      isIncludesName ? `name ${name}` : `number ${number}`
    } already exists in your contacts.`;

    toast.remove();
    toast.error(warningText);

    return warningText;
  }

  return '';
};

export const contactSchema = object({
  name: string()
    .required('This field is required!')
    .matches(
      /^(?=.*\p{L})[\p{L}0-9]+((['\-\s][\p{L}0-9]+)*)?$/u,
      `Name may contain only letters, apostrophe, dash and spaces.
      For example Adrian, Jacob Mercer Charles de Batz de Castelmore d'Artagnan`
    )
    .min(
      2,
      'The name is short! Please enter a name with at least 2 characters.'
    )
    .max(
      50,
      'The name is long! Please enter a name with at more 50 characters.'
    )
    .trim(),
  number: string()
    .required('This field is required!')
    .matches(
      /^(\+?\d+)?\s*(\(\d+\))?[\s-]*([\d-]*)$/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +.'
    )
    .min(
      5,
      'The number is short! Please enter a number with at least 5 characters.'
    )
    .max(
      18,
      'The number is long! Please enter a number with at more 18 characters.'
    ),
});

export const toastOptions = {
  duration: 4000,
  success: {
    style: {
      color: 'var(--white-color)',
      background: 'var(--success-color)',
    },
    iconTheme: {
      primary: 'var(--white-color)',
      secondary: 'green',
    },
  },
  error: {
    style: {
      color: 'var(--white-color)',
      background: 'var(--error-color)',
    },
    iconTheme: {
      primary: 'var(--white-color)',
      secondary: 'rgb(255, 85, 73)',
    },
  },
};

export const linearGradients = [
  'linear-gradient(to right bottom, #ffeaea, #fff5f5)',
  'linear-gradient(to right bottom, #e3f2fd, #f0f7ff)',
  'linear-gradient(to right bottom, #f9fbe7, #e8f5e9)',
  'linear-gradient(to right bottom, #ede7f6, #f3e5f5)',
  'linear-gradient(to right bottom, #d0ebff, #e6f4ff)',
  'linear-gradient(to right bottom, #ffe0e0, #fff2ec)',
  'linear-gradient(to right bottom, #cefed9, #fbffe0)',
  'linear-gradient(to right bottom, #e1f5fe, #fce4ec)',
  'linear-gradient(to right bottom, #fff0eb, #ffe5e0)',
  'linear-gradient(to right bottom, #d8efff, #eef7ff)',
  'linear-gradient(to right bottom, #cef8db, #eef8f3)',
  'linear-gradient(to right bottom, #cce4f6, #eaf3fb)',
  'linear-gradient(to right bottom, #fdf1ec, #ffe3f1)',
  'linear-gradient(to right bottom, #efecf3, #edd1ff)',
  'linear-gradient(to right bottom, #ffdcd2, #fff3f1)',
  'linear-gradient(to right bottom, #e0f2ff, #f7fbff)',
  'linear-gradient(to right bottom, #e3f2fd, #fbe9e7)',
  'linear-gradient(to right bottom, #ffe5dc, #fff2ee)',
  'linear-gradient(to right bottom, #f7d9ff, #d0f0fd)',
  'linear-gradient(to right bottom, #fffbd3, #f3f8b3) ',
  'linear-gradient(to right bottom, #ffebeb, #ffe6d5)',
  'linear-gradient(to right bottom, #d7ffdd, #e4ffe3)',
  'linear-gradient(to right bottom, #ffdada, #fff0f0)',
  'linear-gradient(to right bottom, #dceeff, #f3faff)',
  'linear-gradient(to right bottom, #ffedea, #f7f4ea)',
  'linear-gradient(to right bottom, #f6f2ff, #e5f9f6)',
  'linear-gradient(to right bottom, #fff5e6, #dff3e3)',
  'linear-gradient(to right bottom, #e3ffe7, #d9e7ff)',
  'linear-gradient(to right bottom, #ffe3e3, #fff0e6)',
  'linear-gradient(to right bottom, #e6f0ff, #f4f9ff)',
  'linear-gradient(to right bottom, #e0f7fa, #f1f8e9)',
  'linear-gradient(to right bottom, #ffe6e1, #fff5f1)',
  'linear-gradient(to right bottom, #fff1eb, #ace0f9)',
  'linear-gradient(to right bottom, #ffe3e3, #ffc3c3)',
];

export const selectStyles = {
  control: (styles, { isFocused }) => ({
    ...styles,
    border: isFocused
      ? '1px solid transparent'
      : '1px solid var(--text-black-color)',
    outline: isFocused
      ? '2px solid var(--blue-color)'
      : '2px solid transparent',
    cursor: 'pointer',
    backgroundColor: 'white',
    boxShadow: 'none',
    transition:
      'outline var(--transition-duration) var(--transition-timing-function), border-color var(--transition-duration) var(--transition-timing-function)',
    '&:hover': {
      borderColor: 'transparent',
      outline: '2px solid var(--blue-color)',
    },
    '&:focus': {
      border: 'transparent',
      outline: '2px solid var(--blue-color)',
    },
  }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      fontWeight: isSelected ? '700' : 'inherit',
      color: isDisabled
        ? '#ccc'
        : isFocused && !isSelected
        ? 'var(--text-black-color)'
        : isSelected
        ? 'var(--white-color)'
        : data.color,
      backgroundColor: isDisabled
        ? undefined
        : isSelected
        ? 'var(--blue-color)'
        : isFocused
        ? 'var(--blue-color-with-transparency)'
        : undefined,
      cursor: isDisabled ? 'not-allowed' : 'pointer',

      ':active': {
        ...styles[':active'],
        backgroundColor: !isDisabled
          ? isSelected
            ? data.color
            : 'var(--blue-color)'
          : undefined,
      },
    };
  },
  input: styles => ({ ...styles, padding: '2px 4px' }),
  dropdownIndicator: (base, state) => ({
    ...base,
    transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : 'rotate(0)',
    padding: '2px',
    color: state.isFocused ? 'var(--blue-color)' : '#999',
    transition:
      'transform var(--transition-duration) var(--transition-timing-function), color var(--transition-duration) var(--transition-timing-function)',

    '&:hover': {
      color: 'var(--blue-color)',
    },
    '&:focus': {
      color: 'var(--blue-color)',
    },
  }),
};
