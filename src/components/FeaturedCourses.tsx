"use client"
import React from 'react'
import courseData from '../app/data/music_courses.json'
import Link from 'next/link'
import { BackgroundGradient } from './ui/background-gradient'
import Image from 'next/image';
    interface Course  {
      id: number,
      title: string,
      slug: string,
      description: string,
      price: number,
      instructor: string,
      isFeatured: boolean,
      image?: string 
    };
const FeaturedCourses = () => {
  const featuredCourses  = courseData.courses.filter((course: Course) => course.isFeatured)
  return (
    <>
    <div className="py-12 w-full h-auto bg-gradient-to-br from-gray-900 to-black">
      <div>
        <div className="text-center">
          <h1 className="text-[15px] text-teal-600 font-semibold tracking-wide">FEATURED COURSES</h1>
          <p className="mt-2 text-3xl leading-8 tracking-tight sm:text-4xl text-white font-[700]">Learn With the Best</p>
        </div>
      </div>
      <div className="mt-10">
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center items-center">
        {featuredCourses.map((course: Course)=> (
          <li key={course.id} className="flex justify-center">
            <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
              <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow ">
                <p className="text-2xl my-[13px] ">{course.title}</p>
              <p className="">{course.description}</p>
              {/* background gradient animation */}
                  <div className="w-full my-[20px] h-auto max-w-md overflow-hidden rounded-lg">
                    <Image
                      src={`/courses/${course.image}`}
                      width={400}
                      height={100}
                      alt={`${course.image}`}
                      className="rounded object-cover"
                    />
                  </div>
              <Link href={`/courses/${course.slug}`} className="mt-[7px]">Learn More</Link>
              </div>

            </BackgroundGradient> 
            
          </li>
        ))}
        </ul>
      </div>
      <div className="mt-20 text-center ">
        <Link href="/courses"
        className="px-4 py-2 rounded border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
        >View All Courses</Link>
      </div>
    </div>
    </>
  )
}

export default FeaturedCourses