import Image from "next/image";

// TO FIX LATER

type FeedbackProps = {
  avatar: string;
  name: string;
  description: string;
};

//  TO BE FIXED -> POSITIONING

const Feedback = ({ avatar, name, description }: FeedbackProps) => {
  return (
    <div className="h-full pt-10">
      <div className="h-full rounded-xl bg-white p-[42px] pt-0 max-lg:p-8">
        <div className="flex items-center max-lg:-mt-10">
          <Image
            width={100}
            height={100}
            src={avatar}
            alt="Avatar"
            className="-mt-5 w-[100px] 2xl:-mt-8 2xl:w-40"
          />
          <span className="text-28px] text-xl font-medium 2xl:text-[28px]">
            {name}
          </span>
        </div>
        <p className="text-[18px] font-light 2xl:text-xl">{description}</p>
      </div>
    </div>
  );
};

export default Feedback;
