import * as React from "react"
import { culture } from "content/culture"
import CompanyValueCard from "../CompanyValueCard"

export default function OurCultureAndValues() {
  return (
    <div className="relative h-screen flex flex-col justify-center custom-culture-bg bg-no-repeat">
      <div className="w-full max-w-[1344px] mx-auto px-5 sm:px-10">
        <div className="flex flex-col gap-14  xl:flex-row xl:justify-between items-center">
          <div className="w-full xl:w-auto text-center xl:text-left">
            <h3 className="text-56 font-bold text-gray-300 font-gradual leading-64">
              Our culture <br /> and values
            </h3>
          </div>

          <section className="w-full max-w-[800px]" aria-label="Culture Values">
            <div
              className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full"
              role="list"
            >
              {culture.map((item, index) => (
                <CompanyValueCard key={index} {...item} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
