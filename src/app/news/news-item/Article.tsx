import Image from "next/image";
import { socialLinksList } from "@/constants/SocialLinksList";
// Components
import SubTitle from "@/components/ui/SubTitle";
import SocialLinks from "@/components/ui/SocialLink";

const Article = () => {
  return (
    <article className="flex-[2] max-lg:flex-[1] max-md:flex max-md:flex-col max-md:items-center">
      <div>
        <SubTitle title="Функция перевода средств" />
        <p className="mt-2 font-light">
          Android 4.9.x Обновление (Ноябрь 2023)
        </p>
      </div>
      <div className="mt-5 flex items-center gap-x-4">
        <Image
          width={50}
          height={50}
          src={"/rounded-logo.svg"}
          alt="Logo"
          className="w-auto"
        />
        <span>
          <p className="font-light">FinFlow поддержка</p>
          <p className="font-extralight">
            10 месяцев назад | <span>Обновлено</span>
          </p>
        </span>
      </div>

      {/* Content */}
      <div className="mt-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere repellat
        omnis eaque tempora, temporibus itaque soluta corporis placeat nobis
        maxime porro voluptates architecto eos beatae. Nisi quidem iure magni
        consectetur! Tempora, tempore minus veniam nemo dolore amet esse beatae
        ex velit, iste eveniet libero id delectus dolores ipsa exercitationem
        pariatur sit optio iusto magni quas sapiente doloribus neque. Aliquid,
        debitis. Illo, delectus. Autem nemo totam delectus, tempore, rem at
        ducimus aperiam, voluptatum eius quam debitis veniam. Aspernatur aliquid
        nesciunt deserunt pariatur ratione nisi vel sit, error et voluptate
        quisquam quasi? Esse natus, illo ducimus dolores quisquam quo voluptas
        quidem beatae ab minima? Minus, repellat nemo enim ducimus amet
        doloribus. Excepturi corrupti dignissimos reiciendis optio voluptatem
        esse? Repudiandae quaerat doloribus dignissimos. Nam error dolore quae,
        deserunt nostrum necessitatibus impedit doloremque assumenda in commodi
        earum maxime recusandae consequatur illum obcaecati soluta ad inventore
        quasi? Sit delectus perspiciatis blanditiis laborum, similique illum
        repellat? Corrupti optio veniam aliquid aut vitae saepe iure ipsa! Odio
        beatae numquam dolores voluptatibus alias molestias temporibus eum
        obcaecati porro saepe natus non harum maxime at aliquam, aliquid rerum
        quam. Nihil maiores dolores minima cum nam incidunt neque, adipisci
        harum, aliquid nulla omnis sequi dicta ipsa aperiam officia repellat
        nostrum illo maxime tenetur esse laborum nesciunt ratione quaerat id?
        Optio? Debitis perferendis dignissimos consectetur quis delectus
        voluptatem facere necessitatibus quia tenetur est ad corporis dolorum
        dolorem ea natus, nobis, doloribus quam assumenda officia laboriosam.
        Molestiae inventore in eligendi dolorum porro. Dicta dolorem, culpa ex,
        ipsum, adipisci eos quibusdam sapiente impedit repudiandae officiis
        minima odio quae ipsam voluptatem qui minus iste ut. Neque impedit sequi
        accusantium fugiat eos eum ullam iusto. Sed molestiae, velit omnis sequi
        maiores nam amet harum totam similique architecto quo ratione tenetur
        ipsam, consequuntur mollitia doloribus animi fugit eos vero
        reprehenderit libero debitis odit alias numquam? Fuga?
      </div>

      <div className="mt-10 flex gap-5 border-b border-b-black pb-5">
        {socialLinksList.map((item, index) => (
          <SocialLinks
            key={index}
            {...item}
            styles="hover:border-black hover:bg-transparent"
          />
        ))}
      </div>

      <div className="mt-5 flex flex-col items-center gap-2 text-center">
        <p>Было ли обновление полезным?</p>
        <div className="space-x-4">
          <button className="w-20 rounded-full border border-mainGreen py-1 transition hover:bg-mainGreen hover:text-white">
            Да
          </button>
          <button className="w-20 rounded-full border border-red-500 py-1 transition hover:text-red-500">
            Нет
          </button>
        </div>
        <p>1000 человек из 1174 сочли это полезным</p>
        <div className="mt-10">
          <p>У вас есть еще вопросы?</p>
          <button className="text-blue-500 transition hover:text-blue-600">
            Отправьте запрос
          </button>
        </div>
      </div>
    </article>
  );
};

export default Article;
