// Components
import Accordion from "@/components/ui/Accordion";
import SubTitle from "@/components/ui/SubTitle";
import { questionsList } from "@/constants/questionsList";

const QuestionBlock = () => {
  return (
    <section className="p-16 max-lg:px-10 max-md:px-5">
      <div>
        <SubTitle title="Часто задаваемые вопросы" />
      </div>
      <div className="mt-5 flex flex-col gap-y-5">
        {questionsList.map((question, index) => (
          <Accordion key={index} {...question} index={index} />
        ))}
      </div>
    </section>
  );
};

export default QuestionBlock;
