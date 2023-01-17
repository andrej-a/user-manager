import { Link } from 'react-router-dom';

import { RegistrationForm } from './Form/RegistrationForm';
import { Wrapper } from '../../components/styles/Wrapper';
export const Registration = () => {
  return (
    <>
      <Wrapper>
        <RegistrationForm />
        <Link to={'../signIn'}>To authorization</Link>
      </Wrapper>
    </>
  );
};
