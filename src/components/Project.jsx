import React from 'react'

const ProjectList = ({ project }) => {
  const rotateClasses = ['rotate-6', '-rotate-12', 'rotate-6', '-rotate-12']

  const sources = []

  if (project.frontend) {
    sources.push({
      label: 'Get the code Frontend',
      url: project.frontend,
    })
  }
  if (project.backend) {
    sources.push({
      label: 'Get the code Backend',
      url: project.backend,
    })
  }
  if (project.website) {
    sources.push({
      label: 'Visit Website',
      url: project.website,
    })
  }
  if (project.demo) {
    sources.push({
      label: 'View Demo',
      url: project.demo,
    })
  }
  if (project.video) {
    sources.push({
      label: 'Watch Video',
      url: project.video,
    })
  }

  return (
    <section className="bg-zinc-50 overflow-hidden">
      <div className="min-h-screen flex flex-col justify-start items-center pt-40 px-8 md:px-12 space-y-16">
        <div className="flex flex-col sm:flex-row mx-auto gap-4 sm:gap-0">
          {project.imageList.map((img, index) => (
            <a key={index} href="#_" className="sm:w-1/4 p-2 sm:p-0">
              <img
                src={img}
                alt={project.title}
                className={`rounded-xl ${
                  rotateClasses[index % rotateClasses.length]
                } 
                  hover:rotate-0 duration-500 hover:-translate-y-12 
                  h-full w-full hover:scale-150 transform origin-bottom 
                  max-h-64 `}
              />
            </a>
          ))}
        </div>

        <div className="pointer-events-none fixed inset-x-0 bottom-20 sm:flex sm:justify-center sm:px-6 sm:pb-5 lg:px-8">
          <div className="pointer-events-auto flex w-full max-w-md divide-x divide-neutral-200 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="flex w-0 flex-1 items-center p-4">
              <div className="w-full">
                <p className="text-sm font-medium text-neutral-900">
                  Tech Stack:
                </p>
                <p className="mt-1 text-sm text-neutral-500">{project.desc}</p>
                <p className="mt-2 text-xs text-[#F576A9] underline">
                  <a>by © Retaj Alharbi</a>
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-col divide-y divide-neutral-200 w-full">
                {sources.map(({ label, url }, i) => (
                  <div className="flex h-0 flex-1" key={i}>
                    <a
                      target="_blank"
                      href={url}
                      className={`flex w-full items-center justify-center rounded-none border border-transparent px-4 py-3 text-sm font-medium text-[#F576A9] focus:outline-none focus:ring-2 ${
                        i === 0
                          ? 'rounded-tr-lg'
                          : i === sources.length - 1
                          ? 'rounded-br-lg'
                          : ''
                      }`}
                      rel="noreferrer"
                    >
                      {label}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectList
