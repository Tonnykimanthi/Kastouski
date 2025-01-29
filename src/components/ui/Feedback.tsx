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
    <div className="rounded-xl bg-white p-5 pt-0">
      <div className="flex items-center">
        <Image width={100} height={100} src={avatar} alt="Avatar" />
        <span className="text-lg font-medium">{name}</span>
      </div>
      <p>{description}</p>
    </div>
  );
};

export default Feedback;
