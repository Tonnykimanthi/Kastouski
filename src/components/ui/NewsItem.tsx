type NewsItemProps = {
  status: string;
  title: string;
  createdAt: string;
};

const NewsItem = ({ status, title, createdAt }: NewsItemProps) => {
  return (
    <div className="border-b border-b-black pb-4 max-sm:text-center">
      <p className="text-[22px] font-medium">{status}</p>
      <div className="mt-[15px] flex items-center justify-between gap-2 text-[18px] font-light max-sm:flex-col">
        <p>{title}</p>
        <span>{createdAt}</span>
      </div>
    </div>
  );
};

export default NewsItem;
