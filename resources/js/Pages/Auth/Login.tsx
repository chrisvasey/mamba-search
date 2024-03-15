import { Link, useForm, Head } from '@inertiajs/react';
import classNames from 'classnames';
import React from 'react';
import useRoute from '@/Hooks/useRoute';
import AuthenticationCard from '@/Components/AuthenticationCard';
import Checkbox from '@/Components/Checkbox';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';

interface Props {
  canResetPassword: boolean;
  status: string;
}

export default function Login({ canResetPassword, status }: Props) {
  const route = useRoute();
  const form = useForm({
    email: '',
    password: '',
    remember: '',
  });

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    form.post(route('login'), {
      onFinish: () => form.reset('password'),
    });
  }

  return (
    <AuthenticationCard>
      <Head title="login" />
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-white">
          Sign in to your account
        </h2>
      </div>

      {status && (
        <div className="my-4 font-medium text-sm text-green-600 dark:text-green-400">
          {status}
        </div>
      )}

      <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={onSubmit}>
          <div>
            <InputLabel htmlFor="email">Email</InputLabel>
            <div className="mt-2">
              <TextInput
                id="email"
                type="email"
                className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-green sm:text-sm sm:leading-6"
                value={form.data.email}
                onChange={e => form.setData('email', e.currentTarget.value)}
                required
                autoFocus
              />
              <InputError className="mt-2" message={form.errors.email} />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <InputLabel htmlFor="password">Password</InputLabel>
              {canResetPassword && (
                <div className="text-sm">
                  <Link
                    href={route('password.request')}
                    className="font-semibold text-green dark:text-green hover:text-gray-900 dark:hover:text-gray-100"
                  >
                    Forgot your password?
                  </Link>
                </div>
              )}
            </div>
            <div className="mt-2">
              <TextInput
                id="password"
                type="password"
                className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-green sm:text-sm sm:leading-6"
                value={form.data.password}
                onChange={e => form.setData('password', e.currentTarget.value)}
                required
                autoComplete="current-password"
              />
              <InputError className="mt-2" message={form.errors.password} />
            </div>
          </div>

          <div className="mt-2">
            <div className="flex items-center justify-between">
              <label className="flex items-center justify-end">
                <Checkbox
                  className="rounded dark:bg-gray-900 border-gray-300 dark:border-white text-green shadow-sm focus:ring-green dark:focus:ring-green dark:focus:ring-offset-green'"
                  name="remember"
                  checked={form.data.remember === 'on'}
                  onChange={e =>
                    form.setData(
                      'remember',
                      e.currentTarget.checked ? 'on' : '',
                    )
                  }
                />
                <span className="ml-2 text-sm text-white dark:text-white">
                  Remember me
                </span>
              </label>
              <div className="text-sm">
                <Link
                  href={route('register')}
                  className="font-semibold text-green dark:text-green hover:text-gray-900 dark:hover:text-gray-100"
                >
                  Need an account?
                </Link>
              </div>
            </div>
          </div>

          <div>
            <PrimaryButton
              className={classNames(
                'flex w-full justify-center rounded-md bg-green px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green',
                {
                  'opacity-25': form.processing,
                },
              )}
              disabled={form.processing}
            >
              Sign in
            </PrimaryButton>
          </div>
        </form>
      </div>
    </AuthenticationCard>
  );
}
