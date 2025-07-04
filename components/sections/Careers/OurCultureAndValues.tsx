import * as React from "react"
import { culture } from "content/culture"
import CompanyValueCard from "../CompanyValueCard"

export default function OurCultureAndValues() {
  return (
    <div className="relative w-full custom-culture-bg py-10">
      <div className="w-full">
        <div className="flex flex-col gap-14 lg:flex-row lg:justify-between items-center">
          <div className="w-full flex justify-center lg:w-auto text-center lg:text-left">
            <div className="w-96 sm:text-center md:text-left">
              <h3 className="text-5xl leading-52 sm:text-56 sm:leading-64 font-bold text-gray-300 font-gradual">
                Our culture <br /> and values
              </h3>
            </div>
          </div>

          <section className="w-full max-w-[800px]" aria-label="Culture Values">
            <div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full"
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
