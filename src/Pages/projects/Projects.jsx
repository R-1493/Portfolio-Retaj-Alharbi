import React from 'react'
import { Img1 } from '../../utils'
import { Img3 } from '../../utils'
import { Img2 } from '../../utils'
import { Img4 } from '../../utils'

const Projects = () => {
  return (
    <section class="bg-zinc-50 overflow-hidden">
      <div class="max-w-screen-xl 2xl:max-w-screen-3xl px-8 md:px-12 mx-auto py-12 lg:py-24 space-y-24 h-svh flex flex-col justify-center">
        <div class="flex flex-col sm:flex-row mx-auto">
          <a href="#_">
            <img
              src={Img1}
              alt="Tanznaite Project"
              class="rounded-xl  rotate-6 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full  hover:scale-150 transform origin-bottom"
            />{' '}
          </a>
          <a href="#_">
            {' '}
            <img
              src={Img2}
              class="rounded-xl  -rotate-12 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full  hover:scale-150 transform origin-bottom"
              alt="#_"
            />{' '}
          </a>
          <a href="#_">
            {' '}
            <img
              src={Img3}
              class="rounded-xl  rotate-6 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full  hover:scale-150 transform origin-bottom"
              alt="#_"
            />{' '}
          </a>
          <a href="#_">
            {' '}
            <img
              src={Img4}
              class="rounded-xl  -rotate-12 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full  hover:scale-150 transform origin-bottom"
              alt="#_"
            />{' '}
          </a>
        </div>
        <div class="pointer-events-none fixed inset-x-0 bottom-0 sm:flex sm:justify-center sm:px-6 sm:pb-5 lg:px-8">
          <div class="pointer-events-auto flex w-full max-w-md divide-x divide-neutral-200 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div class="flex w-0 flex-1 items-center p-4">
              <div class="w-full">
                <p class="text-sm font-medium text-neutral-900">Tech Stack:</p>
                <p class="mt-1 text-sm text-neutral-500">
                  C#, ASP.NET, React (Vite), Tailwind CSS, PostgreSQL
                </p>
                <p class="mt-2 text-xs text-[#F576A9]  underline">
                  {' '}
                  <a>by © Retaj Alharbi</a>{' '}
                </p>
              </div>
            </div>
            <div class="flex">
              <div class="flex flex-col divide-y divide-neutral-200">
                <div class="flex h-0 flex-1">
                  {' '}
                  <a
                    target="_blank"
                    href="https://github.com/R-1493/Tanznite-Frontend"
                    type="button"
                    class="flex w-full items-center justify-center rounded-none rounded-tr-lg border border-transparent px-4 py-3 text-sm font-medium text-[#F576A9]  focus:z-10 focus:outline-none focus:ring-2 "
                  >
                    Get the code Frontend
                  </a>{' '}
                </div>
                <div class="flex h-0 flex-1">
                  {' '}
                  <a
                    target="_blank"
                    href="https://github.com/R-1493/Tanznite-Backend-"
                    class="flex w-full items-center justify-center rounded-none rounded-br-lg border border-transparent px-4 py-3 text-sm font-medium text-[#F576A9]   focus:outline-none focus:ring-2 "
                  >
                    Get the code Backend
                  </a>{' '}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
