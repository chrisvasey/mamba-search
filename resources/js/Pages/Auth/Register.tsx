import { Link, useForm, Head } from '@inertiajs/react';
import classNames from 'classnames';
import React from 'react';
import useRoute from '@/Hooks/useRoute';
import useTypedPage from '@/Hooks/useTypedPage';
import AuthenticationCard from '@/Components/AuthenticationCard';
import Checkbox from '@/Components/Checkbox';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';

export default function Register() {
  const page = useTypedPage();
  const route = useRoute();
  const form = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    terms: false,
  });

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    form.post(route('register'), {
      onFinish: () => form.reset('password', 'password_confirmation'),
    });
  }

  return (
    <AuthenticationCard>
      <Head title="Register" />

      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-white">
          Register with Mamba Search
        </h2>
      </div>
      <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={onSubmit}>
          <div>
            <InputLabel htmlFor="name">Name</InputLabel>
            <div className="mt-2">
              <TextInput
                id="name"
                type="text"
                className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-green sm:text-sm sm:leading-6"
                value={form.data.name}
                onChange={e => form.setData('name', e.currentTarget.value)}
                required
                autoFocus
                autoComplete="name"
              />
              <InputError className="mt-2" message={form.errors.name} />
            </div>
          </div>
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
              />
              <InputError className="mt-2" message={form.errors.email} />
            </div>
          </div>
          <div>
            <InputLabel htmlFor="password">Password</InputLabel>
            <div className="mt-2">
              <TextInput
                id="password"
                type="password"
                className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-green sm:text-sm sm:leading-6"
                value={form.data.password}
                onChange={e => form.setData('password', e.currentTarget.value)}
                required
                autoComplete="new-password"
              />
              <InputError className="mt-2" message={form.errors.password} />
            </div>
          </div>
          <div>
            <InputLabel htmlFor="password_confirmation">
              Confirm Password
            </InputLabel>
            <div className="mt-2">
              <TextInput
                id="password_confirmation"
                type="password"
                className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-green sm:text-sm sm:leading-6"
                value={form.data.password_confirmation}
                onChange={e =>
                  form.setData('password_confirmation', e.currentTarget.value)
                }
                required
                autoComplete="new-password"
              />
              <InputError
                className="mt-2"
                message={form.errors.password_confirmation}
              />
            </div>
          </div>

          {page.props.jetstream.hasTermsAndPrivacyPolicyFeature && (
            <div>
              <div className="mt-2">
                <InputLabel htmlFor="terms">
                  <div className="flex items-center">
                    <Checkbox
                      name="terms"
                      id="terms"
                      checked={form.data.terms}
                      onChange={e =>
                        form.setData('terms', e.currentTarget.checked)
                      }
                      required
                    />

                    <div className="ml-2">
                      I agree to the
                      <a
                        target="_blank"
                        href={route('terms.show')}
                        className="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                      >
                        Terms of Service
                      </a>
                      and
                      <a
                        target="_blank"
                        href={route('policy.show')}
                        className="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                      >
                        Privacy Policy
                      </a>
                    </div>
                  </div>
                  <InputError className="mt-2" message={form.errors.terms} />
                </InputLabel>
              </div>
            </div>
          )}

          <div className="flex items-center justify-end mt-4">
            <PrimaryButton
              className={classNames(
                'flex w-full justify-center rounded-md bg-green px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green',
                { 'opacity-25': form.processing },
              )}
              disabled={form.processing}
            >
              Register
            </PrimaryButton>
          </div>
          <div className="flex items-center justify-center mt-4">
            <Link
              href={route('login')}
              className="underline text-sm text-green dark:text-green hover:text-green dark:hover:text-green rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green dark:focus:ring-green"
            >
              Already registered?
            </Link>
          </div>
        </form>
      </div>
    </AuthenticationCard>
  );
}
