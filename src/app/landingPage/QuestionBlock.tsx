// Components
import Accordion from "@/components/ui/Accordion";
import SubTitle from "@/components/ui/SubTitle";
import { questionsList } from "@/constants/questionsList";

const QuestionBlock = () => {
  return (
    <section className="p-16 max-lg:px-10 max-md:px-5">
      <div className="mx-auto 2xl:max-w-[150rem]">
        <SubTitle title="Часто задаваемые вопросы" />
      </div>
      <div className="mx-auto mt-5 flex flex-col gap-y-5 2xl:max-w-[150rem]">
        {questionsList.map((question, index) => (
          <Accordion key={index} {...question} index={index} />
        ))}
      </div>
    </section>
  );
};

export default QuestionBlock;
