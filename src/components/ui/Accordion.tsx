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

      if (target.checked) {
        target
          .closest("label")
          ?.querySelector(".accordion-icon")
          ?.classList.add("rotate-180");
      } else {
        target
          .closest("label")
          ?.querySelector(".accordion-icon")
          ?.classList.remove("rotate-180");
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
      className="bg-lightGreen/80 grid rounded-xl p-[40px] has-[:checked]:bg-mainYellow"
    >
      <input
        type="checkbox"
        name="checkbox"
        id={`radio${index}`}
        className="accordion-input peer hidden"
      />
      <div className="flex cursor-pointer items-center justify-between">
        <h5 className="text-xl sm:text-[32px] 2xl:text-5xl">{quiz}</h5>
        <GoChevronDown className="accordion-icon size-10 gap-5 transition 2xl:size-20" />
      </div>

      <div className="grid grid-rows-[0fr] transition-all duration-200 peer-checked:grid-rows-[1fr]">
        <div className="overflow-hidden">
          <p className="mt-[19px] font-light sm:text-[24px] 2xl:text-4xl">
            {answer}
          </p>
        </div>
      </div>
    </label>
  );
};

export default Accordion;
