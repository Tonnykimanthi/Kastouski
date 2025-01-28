type NewsItemProps = {
  status: string;
  title: string;
  createdAt: string;
};

const NewsItem = ({ status, title, createdAt }: NewsItemProps) => {
  return (
    <div className="border-b border-b-black pb-4 max-sm:text-center">
      <p className="font-medium">{status}</p>
      <div className="mt-1 flex items-center justify-between gap-2 max-sm:flex-col">
        <p className="font-light">{title}</p>
        <span className="text-sm font-light">{createdAt}</span>
      </div>
    </div>
  );
};

export default NewsItem;
