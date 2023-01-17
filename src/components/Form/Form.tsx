import { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
/* MODELS */
import { IRegistration } from '../../models/IRegistrationData';
/* STYLES */
import { FormWrapper, InputWrapper, InputError } from './Form.styled';
export const Form = () => {
  const schema = yup
    .object({
      mail: yup.string().required().min(3),
      name: yup.string().required().min(3),
      password: yup.string().required().min(1),
    })
    .required();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<IRegistration>({
    resolver: yupResolver(schema),
    defaultValues: { name: '', mail: '', password: '' },
  });

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  const formSubmit: SubmitHandler<IRegistration> = (data) => {
    // eslint-disable-next-line no-console
    console.log(data);
  };

  return (
    <>
      <FormWrapper>
        <form action="" onSubmit={handleSubmit(formSubmit)}>
          <InputWrapper>
            <input
              {...register('name')}
              placeholder="Type your name"
              type="text"
              name="name"
              id="name"
            />
            <InputError>{errors.name?.message}</InputError>
          </InputWrapper>
          <InputWrapper>
            <input
              {...register('mail')}
              placeholder="Type your E-mail"
              type="text"
              name="mail"
              id="mail"
            />
            <InputError>{errors.mail?.message}</InputError>
          </InputWrapper>
          <InputWrapper>
            <input
              {...register('password')}
              placeholder="Type your password"
              type="password"
              name="password"
            />
            <InputError>{errors.password?.message}</InputError>
          </InputWrapper>

          <input disabled={Object.keys(errors).length > 0} type="submit" value="Submit" />
        </form>
      </FormWrapper>
    </>
  );
};
