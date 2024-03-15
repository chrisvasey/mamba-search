import { Link, useForm, Head } from '@inertiajs/react';
import classNames from 'classnames';
import React from 'react';
import useRoute from '@/Hooks/useRoute';
import AuthenticationCard from '@/Components/AuthenticationCard';
import PrimaryButton from '@/Components/PrimaryButton';

interface Props {
  status: string;
}

export default function VerifyEmail({ status }: Props) {
  const route = useRoute();
  const form = useForm({});
  const verificationLinkSent = status === 'verification-link-sent';

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    form.post(route('verification.send'));
  }

  return (
    <AuthenticationCard>
      <Head title="Email Verification" />

      <div className="mb-4 text-sm text-text dark:text-white">
        Before continuing, could you verify your email address by clicking on
        the link we just emailed to you? If you didn't receive the email, we
        will gladly send you another.
      </div>

      {verificationLinkSent && (
        <div className="mb-4 font-medium text-sm text-green dark:text-green">
          A new verification link has been sent to the email address you
          provided during registration.
        </div>
      )}

      <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={onSubmit}>
          <div className="mt-2 flex items-center justify-between">
            <PrimaryButton
              className={classNames({ 'opacity-25': form.processing })}
              disabled={form.processing}
            >
              Resend Verification Email
            </PrimaryButton>

            <div>
              <Link
                href={route('profile.show')}
                className="underline text-sm text-green dark:text-green hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green dark:focus:ring-offset-green"
              >
                Edit Profile
              </Link>
            </div>

            <Link
              href={route('logout')}
              method="post"
              as="button"
              className="underline text-sm text-green dark:text-green hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green dark:focus:ring-offset-green ml-2"
            >
              Log Out
            </Link>
          </div>
        </form>
      </div>
    </AuthenticationCard>
  );
}
