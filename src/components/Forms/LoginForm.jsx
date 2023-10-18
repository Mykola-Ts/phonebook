import { useDispatch } from 'react-redux';
import { ErrorMessage, Form, Formik } from 'formik';
import { object, string } from 'yup';
import { toast } from 'react-hot-toast';
import { userLogIn } from 'redux/operations';
import {
  EmailInputIcon,
  Error,
  Label,
  PasswordInputIcon,
  StyledInput,
  SubmitButton,
  WrapperInput,
} from 'components/Forms/Form.styled';

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

export const LoginForm = () => {
  const dispatch = useDispatch();

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
        err === 'Request failed with status code 400'
          ? toast.error('An incorrect username or password has been submitted.')
          : toast.error('Oops, something went wrong. Try again.');
      });
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
          <SubmitButton type="submit">Sign in</SubmitButton>
        </Form>
      </Formik>
    </>
  );
};
