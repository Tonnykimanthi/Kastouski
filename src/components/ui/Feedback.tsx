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
    <div className="rounded-xl bg-white p-[42px] h-full pt-0">
      <div className="flex items-center">
        <Image
          width={100}
          height={100}
          src={avatar}
          alt="Avatar"
          className="2xl:w-40"
        />
        <span className="text-lg font-medium 2xl:text-2xl">{name}</span>
      </div>
      <p className="2xl:text-xl">{description}</p>
    </div>
  );
};

export default Feedback;
