import * as React from "react"
import { culture } from "content/culture"
import CompanyValueCard from "../CompanyValueCard"

export default function OurCultureAndValues() {
  return (
    <div className="relative flex flex-col custom-culture-bg bg-no-repeat justify-center">
      <div className="w-full max-w-[1344px] mx-auto px-5 mobileM:px-10">
        <div className="flex flex-col gap-14  laptop:flex-row laptop:justify-between items-center">
          <div className="w-full flex justify-center laptop:w-auto text-center laptop:text-left">
            <div className="w-335 mobileS:w-[391px] mobileM:text-center tablet:text-left">
              <h3 className="text-5xl leading-52 mobileS:text-56 mobileS:leading-64 font-bold text-gray-300 font-gradual ">
                Our culture <br /> and values
              </h3>
            </div>
          </div>

          <section className="w-full max-w-[800px]" aria-label="Culture Values">
            <div
              className="grid grid-cols-1 mobileM:grid-cols-2 gap-4 w-full"
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
