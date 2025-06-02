import React from 'react'
import { Img1 } from '../../utils'
import { Img3 } from '../../utils'
import { Img2 } from '../../utils'
import { Img4 } from '../../utils'

const Projects = () => {
  return (
    <section className="bg-zinc-50 overflow-hidden">
      <div className="max-w-screen-xl 2xl:max-w-screen-3xl px-8 md:px-12 mx-auto py-12 lg:py-24 space-y-24 h-auto min-h-screen flex flex-col justify-center">
        <div className="flex flex-col sm:flex-row mx-auto gap-4 sm:gap-0">
          <a href="#_" className="sm:w-1/4 p-2 sm:p-0">
            <img
              src={Img1}
              alt="Tanznaite Project"
              className="rounded-xl rotate-6 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full hover:scale-150 transform origin-bottom max-h-64 object-cover"
            />
          </a>
          <a href="#_" className="sm:w-1/4 p-2 sm:p-0">
            <img
              src={Img2}
              className="rounded-xl -rotate-12 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full hover:scale-150 transform origin-bottom max-h-64 object-cover"
              alt="#_"
            />
          </a>
          <a href="#_" className="sm:w-1/4 p-2 sm:p-0">
            <img
              src={Img3}
              className="rounded-xl rotate-6 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full hover:scale-150 transform origin-bottom max-h-64 object-cover"
              alt="#_"
            />
          </a>
          <a href="#_" className="sm:w-1/4 p-2 sm:p-0">
            <img
              src={Img4}
              className="rounded-xl -rotate-12 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full hover:scale-150 transform origin-bottom max-h-64 object-cover"
              alt="#_"
            />
          </a>
        </div>
        <div className="pointer-events-none fixed inset-x-0 bottom-0 sm:flex sm:justify-center sm:px-6 sm:pb-5 lg:px-8">
          <div className="pointer-events-auto flex w-full max-w-md divide-x divide-neutral-200 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="flex w-0 flex-1 items-center p-4">
              <div className="w-full">
                <p className="text-sm font-medium text-neutral-900">
                  Tech Stack:
                </p>
                <p className="mt-1 text-sm text-neutral-500">
                  C#, ASP.NET, React (Vite), Tailwind CSS, PostgreSQL
                </p>
                <p className="mt-2 text-xs text-[#F576A9] underline">
                  <a>by © Retaj Alharbi</a>
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-col divide-y divide-neutral-200">
                <div className="flex h-0 flex-1">
                  <a
                    target="_blank"
                    href="https://github.com/R-1493/Tanznite-Frontend"
                    type="button"
                    className="flex w-full items-center justify-center rounded-none rounded-tr-lg border border-transparent px-4 py-3 text-sm font-medium text-[#F576A9] focus:z-10 focus:outline-none focus:ring-2"
                    rel="noreferrer"
                  >
                    Get the code Frontend
                  </a>
                </div>
                <div className="flex h-0 flex-1">
                  <a
                    target="_blank"
                    href="https://github.com/R-1493/Tanznite-Backend-"
                    className="flex w-full items-center justify-center rounded-none rounded-br-lg border border-transparent px-4 py-3 text-sm font-medium text-[#F576A9] focus:outline-none focus:ring-2"
                    rel="noreferrer"
                  >
                    Get the code Backend
                  </a>
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
