// pages/Project/index.jsx  (Project.jsx) — nav buttons restyled to match, everything else same
import React, { useRef, useEffect, useState } from 'react'
import ProjectList from '../../components/Project'
import projects from '../../data/Data.jsx'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import {
  HiOutlineArrowCircleRight,
  HiOutlineArrowCircleLeft,
} from 'react-icons/hi'

const Project = () => {
  const prevRef = useRef(null)
  const nextRef = useRef(null)

  const [navigationReady, setNavigationReady] = useState(false)
  const [isBeginning, setIsBeginning] = useState(true)
  const [isEnd, setIsEnd] = useState(false)

  useEffect(() => {
    setNavigationReady(true)
  }, [])

  const handleSlideChange = (swiper) => {
    setIsBeginning(swiper.isBeginning)
    setIsEnd(swiper.isEnd)
  }

  return (
    <section className="overflow-hidden relative min-h-[calc(100vh-90px)]">
      <style>{`
        .custom-project-swiper .swiper-pagination {
          bottom: 20px !important;
        }
        .custom-project-swiper .swiper-pagination-bullet {
          background-color: #F576A9 !important;
          opacity: 0.5;
          transition: opacity 0.3s;
          width: 12px;
          height: 12px;
          margin: 0 8px !important;
        }
        .custom-project-swiper .swiper-pagination-bullet-active {
          opacity: 1;
        }
        @media (max-width: 768px) {
          .custom-project-swiper .swiper-pagination {
            bottom: 10px !important;
          }
          .custom-project-swiper .swiper-pagination-bullet {
            width: 10px;
            height: 10px;
            margin: 0 6px !important;
          }
        }
      `}</style>

      <div className="max-w-screen-xl mx-auto px-8 md:px-12 relative h-full">
        <div className="absolute top-1/2 left-4 md:left-10 z-20 transform -translate-y-1/2">
          <button
            ref={prevRef}
            style={{
              opacity: isBeginning ? 0.4 : 1,
              cursor: isBeginning ? 'default' : 'pointer',
            }}
            disabled={isBeginning}
            className="w-11 h-11 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-sm shadow-md hover:scale-110 transition-transform"
          >
            <HiOutlineArrowCircleLeft className="text-[#F576A9] text-3xl md:text-4xl" />
          </button>
        </div>
        <div className="absolute top-1/2 right-4 md:right-10 z-20 transform -translate-y-1/2">
          <button
            ref={nextRef}
            style={{
              opacity: isEnd ? 0.4 : 1,
              cursor: isEnd ? 'default' : 'pointer',
            }}
            disabled={isEnd}
            className="w-11 h-11 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-sm shadow-md hover:scale-110 transition-transform"
          >
            <HiOutlineArrowCircleRight className="text-[#F576A9] text-3xl md:text-4xl" />
          </button>
        </div>
        {navigationReady && (
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            modules={[Pagination, Navigation]}
            className="custom-project-swiper h-full"
            onSlideChange={handleSlideChange}
            onInit={handleSlideChange}
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id}>
                <ProjectList project={project} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </section>
  )
}

export default Project