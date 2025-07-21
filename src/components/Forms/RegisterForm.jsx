import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ErrorMessage, Form, Formik } from 'formik';
import { object, string } from 'yup';
import { toast } from 'react-hot-toast';
import { userSignUp } from 'redux/auth/operations';
import { defaultErrorText } from 'helpers/helpers';
import {
  EmailInputIcon,
  Error,
  Label,
  NameInputIcon,
  PasswordInputIcon,
  StyledInput,
  WrapperInput,
} from 'components/Forms/Form.styled';
import { PrimaryButton } from 'components/PrimaryButton/PrimaryButton.styled';

const registerSchema = object({
  name: string()
    .required('This field is required!')
    .matches(
      "^[a-zA-Zа-яА-Я0-9]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]?[- ']*)*$",
      `Name may contain only letters, apostrophe, dash and spaces.
      For example Adrian, Jacob Mercer Charles de Batz de Castelmore d'Artagnan`
    )
    .min(
      2,
      'The name is short! Please enter a name with at least 2 characters.'
    )
    .trim(),
  email: string()
    .required('This field is required!')
    .email('Must be a valid email!')
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      'Must be a valid email!'
    ),
  password: string()
    .required('This field is required!')
    .min(
      7,
      'The password is short! Please enter a password with at least 7 characters.'
    )
    .max(
      18,
      'The password is long! Please enter a password with at more 18 characters.'
    ),
});
const registerErrorText =
  'Oops, something went wrong. It is likely that a user with this email address already exists.';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const [errorText, setErrorText] = useState('');

  const onSubmit = ({ name, email, password }, { resetForm }) => {
    const credentials = {
      name,
      email,
      password,
    };
    dispatch(userSignUp(credentials))
      .unwrap()
      .then(({ user }) => {
        toast.success(`Welcome, ${user.name}!`);

        resetForm();
      })
      .catch(err => {
        if (err === 'Request failed with status code 400') {
          setErrorText(registerErrorText);
          toast.error(registerErrorText);
        } else {
          setErrorText(defaultErrorText);
          toast.error(defaultErrorText);
        }
      });
  };

  const onInput = () => {
    setErrorText('');
  };

  return (
    <>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        onSubmit={onSubmit}
        validationSchema={registerSchema}
      >
        <Form>
          <Label>
            Name
            <WrapperInput>
              <StyledInput
                name="name"
                type="text"
                placeholder="First name Last name"
                onInput={onInput}
              />
              <NameInputIcon size={18} />
            </WrapperInput>
            <ErrorMessage name="name" component={Error} />
          </Label>

          <Label>
            Email
            <WrapperInput>
              <StyledInput
                name="email"
                type="email"
                placeholder="user@mail.com"
                onInput={onInput}
              />
              <EmailInputIcon size={18} />
            </WrapperInput>
            <ErrorMessage name="email" component={Error} />
          </Label>

          <Label>
            Password
            <WrapperInput>
              <StyledInput
                name="password"
                type="password"
                placeholder="password123"
              />
              <PasswordInputIcon size={18} />
            </WrapperInput>
            <ErrorMessage name="password" component={Error} />
          </Label>

          {errorText && (
            <Error style={{ marginBottom: '28px', textAlign: 'center' }}>
              {errorText}
            </Error>
          )}

          <PrimaryButton type="submit" className="centered-btn">
            Sign up
          </PrimaryButton>
        </Form>
      </Formik>
    </>
  );
};
