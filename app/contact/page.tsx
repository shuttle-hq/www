'use client';

import { Button } from "components/elements";
import { NextSeo } from "next-seo";
import { FormEvent, MouseEvent, useState } from "react";
import { Metadata } from "next";

type FormTargetOption = "support@shuttle.rs" | "hello@shuttle.rs";

export default function Contact() {
  const [isOpen, setIsOpen] = useState(false);
  const [target, setTarget] = useState<FormTargetOption>("support@shuttle.rs");
  const [name, setName] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [body, setBody] = useState<string>("");

  const handleSubmit = (
    e: FormEvent<HTMLFormElement> | MouseEvent<HTMLButtonElement>,
  ) => {
    if (!name || !subject || !body) return;

    e.preventDefault();

    window.location.href = `mailto:${target}?subject=${name} - ${subject}&body=${body}`;
  };

  const options = [
    { value: "support@shuttle.rs", label: "Support" },
    { value: "hello@shuttle.rs", label: "General Inquiry" },
  ];

  return (
    <main>
      <NextSeo
        title="Contact | Shuttle"
        description="Need to contact us? Fill out the form and we'll get back to you."
        openGraph={{
          images: [
            {
              url: "https://www.shuttle.dev/images/og-image.png",
              width: 3516,
              height: 1432,
              alt: "Shuttle.dev - Build Backends Fast",
            },
          ],
        }}
      />
      <section className="mx-auto mt-24 w-full max-w-2xl items-center px-5 sm:px-10 lg:mt-28">
        <h2 className="text-gradient my-12 bg-clip-text text-center font-gradual text-[56px] font-bold leading-[150%] text-head">
          Contact
        </h2>
        <form
          onSubmit={handleSubmit}
          className="grid w-full grid-cols-1 gap-y-6 text-black dark:text-head"
        >
          <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-0">
            <div>
              <label htmlFor="name" className="block text-sm font-medium">
                Name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="block w-full rounded-md border-gray-300 bg-[#E9E9E9] py-3 px-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-black"
                />
              </div>
            </div>
            <div>
              <label htmlFor="contact-type" className="block text-sm font-medium">
                Contact type
              </label>
              <div className="relative mt-1">
                <button
                  type="button"
                  className="relative w-full cursor-default rounded-md border border-gray-300 bg-[#E9E9E9] py-3 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:bg-black sm:text-sm"
                  aria-haspopup="listbox"
                  aria-expanded="true"
                  aria-labelledby="listbox-label"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <span className="block truncate">
                    {options.find((option) => option.value === target)?.label}
                  </span>
                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                    <svg
                      className="h-5 w-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </button>

                {isOpen && (
                  <ul
                    className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-[#E9E9E9] py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-black sm:text-sm"
                    tabIndex={-1}
                    role="listbox"
                    aria-labelledby="listbox-label"
                    aria-activedescendant="listbox-option-3"
                  >
                    {options.map((option) => (
                      <li
                        key={option.value}
                        className="relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 hover:bg-indigo-600 hover:text-white dark:text-white"
                        id="listbox-option-0"
                        role="option"
                        onClick={() => {
                          setTarget(option.value as FormTargetOption);
                          setIsOpen(false);
                        }}
                      >
                        <span
                          className={`block truncate ${
                            target === option.value ? "font-semibold" : "font-normal"
                          }`}
                        >
                          {option.label}
                        </span>

                        {target === option.value && (
                          <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600">
                            <svg
                              className="h-5 w-5"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
          <div>
            <label htmlFor="subject" className="block text-sm font-medium">
              Subject
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="subject"
                id="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="block w-full rounded-md border-gray-300 bg-[#E9E9E9] py-3 px-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-black"
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium">
              Message
            </label>
            <div className="mt-1">
              <textarea
                id="message"
                name="message"
                rows={4}
                value={body}
                onChange={(e) => setBody(e.target.value)}
                className="block w-full rounded-md border-gray-300 bg-[#E9E9E9] py-3 px-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-black"
              />
            </div>
          </div>
          <div className="text-center">
            <Button variant="primary" onClick={handleSubmit}>Submit</Button>
          </div>
        </form>
      </section>
    </main>
  );
}