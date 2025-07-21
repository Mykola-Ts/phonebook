import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ErrorMessage, Form, Formik } from 'formik';
import { object, string } from 'yup';
import { toast } from 'react-hot-toast';
import { userLogIn } from 'redux/auth/operations';
import { defaultErrorText } from 'helpers/helpers';
import {
  EmailInputIcon,
  Error,
  Label,
  PasswordInputIcon,
  StyledInput,
  WrapperInput,
} from 'components/Forms/Form.styled';
import { PrimaryButton } from 'components/PrimaryButton/PrimaryButton.styled';

const loginSchema = object({
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
const loginErrorText = 'An incorrect username or password has been submitted.';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const [errorText, setErrorText] = useState('');

  const onSubmit = ({ email, password }, { resetForm }) => {
    const credentials = {
      email,
      password,
    };

    dispatch(userLogIn(credentials))
      .unwrap()
      .then(({ user }) => {
        toast.success(`Welcome, ${user.name}!`);

        resetForm();
      })
      .catch(err => {
        if (err === 'Request failed with status code 400') {
          toast.error(loginErrorText);
          setErrorText(loginErrorText);
        } else {
          toast.error(defaultErrorText);
          setErrorText(defaultErrorText);
        }
      });
  };

  const onInput = () => {
    setErrorText('');
  };

  return (
    <>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={onSubmit}
        validationSchema={loginSchema}
      >
        <Form>
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
                onInput={onInput}
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
            Sign in
          </PrimaryButton>
        </Form>
      </Formik>
    </>
  );
};
