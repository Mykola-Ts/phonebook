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
      30,
      'The name is long! Please enter a name with at more 30 characters.'
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
