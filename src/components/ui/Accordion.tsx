"use client";

// Icons
import { GoChevronDown } from "react-icons/go";

type AccordionProps = {
  quiz: string;
  answer: string;
  index: number;
};

// TO BE FIXED

const Accordion = ({ quiz, answer, index }: AccordionProps) => {
  return (
    <label
      htmlFor={`radio${index}`}
      className="grid rounded-xl bg-mainGreen/40 p-5 has-[:checked]:bg-mainYellow"
    >
      <input
        type="radio"
        name="radioEl"
        id={`radio${index}`}
        className="question-input peer hidden"
      />
      <div className="flex cursor-pointer items-center justify-between">
        <h5 className="text-lg font-medium">{quiz}</h5>
        <button>
          <GoChevronDown className={`h-7 w-7`} />
        </button>
      </div>

      <div className="grid grid-rows-[0fr] transition-all peer-checked:grid-rows-[1fr]">
        <div className="overflow-hidden">
          <p className="mt-2">{answer}</p>
        </div>
      </div>
    </label>
  );
};

export default Accordion;
