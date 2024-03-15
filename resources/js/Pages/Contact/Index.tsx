import React, { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { Switch } from '@headlessui/react';
import clsx from 'clsx';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import { usePage, useForm, Head } from '@inertiajs/react';

export default function Index() {
  const { flash } = usePage().props;
  const [agreed, setAgreed] = useState(false);
  const { data, setData, post, processing, reset, errors } = useForm({
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    country: 'US',
    organisation: '',
    location: '',
    message: '',
  });

  const submit = e => {
    e.preventDefault();
    post(route('enquiry.store'), { onSuccess: () => reset() });
  };

  return (
    <>
      <div className="isolate bg-black px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Contact Mamba Search
          </h2>
          <p className="mt-2 text-lg leading-8 text-white">
            Get in touch today.
          </p>
        </div>
        {/* Form submit messages. */}
        {flash.message && (
          <div className="mx-auto max-w-2xl text-center">
            <p className="mt-2 text-lg leading-8 text-green">{flash.message}</p>
          </div>
        )}

        <form onSubmit={submit} className="mx-auto mt-16 max-w-xl sm:mt-20">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="first_name"
                className="block text-sm font-semibold leading-6 text-white"
              >
                First name
              </label>
              <div className="mt-2.5">
                <input
                  value={data.first_name}
                  onChange={e => setData('first_name', e.target.value)}
                  type="text"
                  name="first_name"
                  id="first_name"
                  placeholder="First name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-off-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green sm:text-sm sm:leading-6"
                />
                <InputError message={errors.first_name} className="mt-2" />
              </div>
            </div>
            <div>
              <label
                htmlFor="last_name"
                className="block text-sm font-semibold leading-6 text-white"
              >
                Last name
              </label>
              <div className="mt-2.5">
                <input
                  onChange={e => setData('last_name', e.target.value)}
                  value={data.last_name}
                  type="text"
                  name="last_name"
                  id="last_name"
                  placeholder="Last name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-off-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green sm:text-sm sm:leading-6"
                />
                <InputError message={errors.last_name} className="mt-2" />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm font-semibold leading-6 text-white"
              >
                Email
              </label>
              <div className="mt-2.5">
                <input
                  onChange={e => setData('email', e.target.value)}
                  value={data.email}
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email address"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-off-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green sm:text-sm sm:leading-6"
                />
                <InputError message={errors.email} className="mt-2" />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="phone_number"
                className="block text-sm font-semibold leading-6 text-white"
              >
                Phone number
              </label>
              <div className="relative mt-2.5">
                <div className="absolute inset-y-0 left-0 flex items-center">
                  <label htmlFor="country" className="sr-only">
                    Country
                  </label>
                  <select
                    onChange={e => setData('country', e.target.value)}
                    value={data.country}
                    id="country"
                    name="country"
                    className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green sm:text-sm"
                  >
                    <option>US</option>
                    <option>CA</option>
                    <option>EU</option>
                  </select>
                  <ChevronDownIcon
                    className="pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
                <input
                  onChange={e => setData('phone_number', e.target.value)}
                  value={data.phone_number}
                  type="tel"
                  name="phone_number"
                  id="phone_number"
                  placeholder="Phone number"
                  className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-off-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green sm:text-sm sm:leading-6"
                />
                <InputError message={errors.phone_number} className="mt-2" />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="organisation"
                className="block text-sm font-semibold leading-6 text-white"
              >
                Organisation
              </label>
              <div className="mt-2.5">
                <input
                  onChange={e => setData('organisation', e.target.value)}
                  value={data.organisation}
                  type="text"
                  name="organisation"
                  id="organisation"
                  placeholder="Organisation"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-off-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green sm:text-sm sm:leading-6"
                />
                <InputError message={errors.organisation} className="mt-2" />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="location"
                className="block text-sm font-semibold leading-6 text-white"
              >
                Location
              </label>
              <div className="mt-2.5">
                <input
                  onChange={e => setData('location', e.target.value)}
                  value={data.location}
                  type="text"
                  name="location"
                  id="location"
                  placeholder="Location"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-off-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green sm:text-sm sm:leading-6"
                />
                <InputError message={errors.location} className="mt-2" />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-semibold leading-6 text-white"
              >
                Message
              </label>
              <div className="mt-2.5">
                <textarea
                  onChange={e => setData('message', e.target.value)}
                  value={data.message}
                  name="message"
                  id="message"
                  rows={4}
                  placeholder="Your message"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-off-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green sm:text-sm sm:leading-6"
                />
                <InputError message={errors.message} className="mt-2" />
              </div>
            </div>
            <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
              <div className="flex h-6 items-center">
                <Switch
                  checked={agreed}
                  onChange={setAgreed}
                  className={clsx(
                    'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green',
                    agreed ? 'bg-green' : 'bg-gray-200',
                  )}
                >
                  <span className="sr-only">Agree to policies</span>
                  <span
                    aria-hidden="true"
                    className={clsx(
                      'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out',
                      agreed ? 'translate-x-3.5' : 'translate-x-0',
                    )}
                  />
                </Switch>
              </div>
              <Switch.Label className="text-sm leading-6 text-white">
                By selecting this, you agree to our{' '}
                <a href="#" className="font-semibold text-indigo-600">
                  privacy&nbsp;policy
                </a>
                .
              </Switch.Label>
            </Switch.Group>
          </div>
          <div className="mt-10">
            <button
              disabled={processing}
              type="submit"
              className="block w-full rounded-md bg-green px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green"
            >
              Let's talk
            </button>
          </div>
        </form>
      </div>
      <div className=" bg-white/10 py-3">
        <p className="text-center text-white/30 text-base">
          &copy; {new Date().getFullYear()}{' '}
          <span className="text-green">Mamba Search</span>. All Rights Reserved.
        </p>
      </div>
    </>
  );
}
