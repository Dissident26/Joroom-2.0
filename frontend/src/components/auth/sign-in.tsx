import { postSignIn } from '@/api';
import { SignInDto } from '@/types';
import { FormEvent, useCallback, useState } from 'react';

const defaultFormState: SignInDto = {
  email: '',
  password: '',
};

export const SignIn = () => {
  const [formState, setFormState] = useState(defaultFormState);
  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      ('use server');
      await postSignIn(formState);
    },
    [formState],
  );

  return (
    <form onSubmit={handleSubmit}>
      Email:
      <input
        placeholder="email"
        onChange={({ target }) =>
          setFormState((prev) => ({
            ...prev,
            email: target.value,
          }))
        }
      />
      Password:
      <input
        placeholder="password"
        onChange={({ target }) =>
          setFormState((prev) => ({
            ...prev,
            password: target.value,
          }))
        }
      />
      <input type="submit" />
    </form>
  );
};
