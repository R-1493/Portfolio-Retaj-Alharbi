import React, { useEffect } from 'react'
import { logo } from '../utils'
import { gsap } from 'gsap'
import SplitType from 'split-type'

const Form = () => {
  useEffect(() => {
    const splitText = new SplitType('#text-animation', { types: 'chars' })

    gsap.from(splitText.chars, {
      y: 100,
      opacity: 0,
      stagger: 0.05,
      delay: 0.2,
      duration: 1,
    })

    gsap.fromTo(
      '#animate',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, delay: 0.3, duration: 1 }
    )

    return () => splitText.revert()
  }, [])

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 overflow-hidden">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          id="animate"
          alt="Your Company"
          src={logo}
          className="mx-auto h-10 w-auto opacity-1"
        />
        <h2
          id="text-animation"
          className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-white"
        >
          Contact Me
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form
          action="https://formspree.io/f/xwpbkprp"
          method="POST"
          className="space-y-6"
          id="animate"
        >
          <div>
            <label
              htmlFor="email"
              className="block text-sm/6 font-medium text-gray-100"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-[#F576A9] placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#F576A9] sm:text-sm/6"
              />
            </div>
          </div>

          <div className="form-field">
            <label
              htmlFor="message"
              className="block text-sm/6 font-medium text-gray-100"
            >
              Message
            </label>
            <div className="mt-2">
              <textarea
                id="message"
                name="message"
                rows="4"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-[#F576A9] placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#F576A9] sm:text-sm/6"
                required
              ></textarea>
            </div>
          </div>

          <div>
            <button
              id="animate"
              type="submit"
              className="flex w-full justify-center rounded-md [background-color:#F576A9] px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:[background-color:#ff4f95] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Send Message
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm/6 text-gray-500">
          I'd love to hear from you!{' '}
          <a className="font-semibold text-[#F576A9] hover:text-[#ff4f95]">
            Fill out the form below and I’ll get back to you soon.
          </a>
        </p>
      </div>
    </div>
  )
}

export default Form
