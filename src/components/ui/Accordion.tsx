"use client";

import { useEffect } from "react";
// Icons
import { GoChevronDown } from "react-icons/go";

type AccordionProps = {
  quiz: string;
  answer: string;
  index: number;
};

// TO BE FIXED

const Accordion = ({ quiz, answer, index }: AccordionProps) => {
  useEffect(() => {
    const accordionInputs = document.querySelectorAll(".accordion-input");
    const handleAccordion = (event: Event) => {
      const target = event.target as HTMLInputElement;

      document
        .querySelectorAll(".accordion-icon")
        .forEach((icon) => icon.classList.remove("rotate-180"));

      if (target.checked) {
        target
          .closest("label")
          ?.querySelector(".accordion-icon")
          ?.classList.add("rotate-180");
      }
    };

    accordionInputs.forEach((input) => {
      input.addEventListener("change", handleAccordion);
    });

    return () => {
      accordionInputs.forEach((input) => {
        input.removeEventListener("change", handleAccordion);
      });
    };
  }, []);

  return (
    <label
      htmlFor={`radio${index}`}
      className="bg-lightGreen/80 grid rounded-xl p-5 has-[:checked]:bg-mainYellow"
    >
      <input
        type="radio"
        name="radioEl"
        id={`radio${index}`}
        className="accordion-input peer hidden"
      />
      <div className="flex cursor-pointer items-center justify-between">
        <h5 className="text-lg">{quiz}</h5>
        <button>
          <GoChevronDown className="accordion-icon h-7 w-7 transition" />
        </button>
      </div>

      <div className="grid grid-rows-[0fr] transition-all duration-200 peer-checked:grid-rows-[1fr]">
        <div className="overflow-hidden">
          <p className="mt-2 font-light">{answer}</p>
        </div>
      </div>
    </label>
  );
};

export default Accordion;
