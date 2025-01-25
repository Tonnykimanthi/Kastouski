import Image from "next/image";
// Assets

const Navbar = () => {
  return (
    <header className="flex justify-between items-center">
      <div className="">
        <Image width={150} height={100} src={"logo.svg"} alt="Logo" />
      </div>
      <nav>
        <ul className="flex items-center gap-x-5 text-lg">
          <li>Главная</li>
          <li>Новости</li>
          <li>Возможности</li>
          <li>Преимущества</li>
          <li>FAQs</li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
