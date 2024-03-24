'use client'
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import SectionTitle from './SectionTitle';


const ContactUs = () => {
  const [state, handleSubmit] = useForm("mdoqlvdb");
  if (state.succeeded) {
    return <>
      <SectionTitle title='Contact Us' />
      <p className='text-xl pb-20 md:text-3xl font-semibold text-brand-main text-center'>Thanks for your submission!</p>;
    </>
  }
  return (
    <>
      <div className='py-20' id='contact-us'>
        <SectionTitle title='Contact Us' />
        <form
          onSubmit={handleSubmit}
          className='max-w-lg p-10 mx-auto bg-white rounded-lg shadow-xl'
        >
          <label htmlFor="fullName">
            Your Full Name *
          </label>
          <input
            id="fullName"
            type="text"
            name="fullName"
            className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring mb-4 '
            required
          />
          <ValidationError
            prefix="Full Name"
            field="fullName"
            errors={state.errors}
          />
          <label htmlFor="email">
            Your Email *
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring mb-4 '
            required
          />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
          />
          <label htmlFor='phone'>
            Your Phone Number
          </label>
          <input
            id='phone'
            type='text'
            name='phone'
            className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring mb-4 '
          />
          <ValidationError
            prefix="Phone"
            field="phone"
            errors={state.errors}
          />
          <label htmlFor='address'>
            Your Address
          </label>
          <input
            id='address'
            type='text'
            name='address'
            className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring mb-4 '
          />
          <ValidationError
            prefix="Address"
            field="address"
            errors={state.errors}
          />
          <button
            type="submit"
            disabled={state.submitting}
            className='w-full px-4 py-2 mt-4 font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600'
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default ContactUs;

