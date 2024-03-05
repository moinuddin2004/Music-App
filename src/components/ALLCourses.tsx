import React from 'react'
import Link from 'next/link'
import { Button } from './ui/Moving-border'
import FeaturedCard from './FeaturedCard'


const ALLcourses= () => {
  return (
   <div className="py-12 bg-gray-900">
        <div>
            <div className="text-center">
                <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED COURSES</h2>
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Learn With the Best</p>
            </div>
        </div>
        <div className="mt-10 mx-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
              <FeaturedCard />
              <FeaturedCard />
              <FeaturedCard />
            </div>
        </div>
        <div className="mt-20 text-center">
            <Link href={"/courses"}>
              <Button
                borderRadius="1.75rem"
                className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
              >
                Explore courses
              </Button>
             
            </Link>
        </div>
    </div>
  )
}

export default ALLcourses;