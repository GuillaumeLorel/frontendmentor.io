import Image from "next/image";

interface GetStartedBlockServerProps {
  title: string;
  button: {
    text: string;
    link: string;
  }[];
}

export default async function GetStartedBlockServer({
  title,
  button,
}: GetStartedBlockServerProps) {
  return (
    <aside className="py-20 bg-primary-light-coral relative">
      <div className="wrapper flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-2">
        <h2 className="title-h2 text-secondary-sacramento-state-green">
          {title}
        </h2>
        <a
          href={button[0].link}
          className="min-w-max text-base-lg leading-base-lg text-secondary-sacramento-state-green 
          font-semibold py-[9px] px-8 border-[2px] border-solid border-secondary-sacramento-state-green rounded-3xl
          hover:bg-secondary-sacramento-state-green hover:text-white ease-out duration-300"
        >
          {button[0].text}
        </a>
      </div>
      <div className="w-[200px] h-[122px] absolute bottom-0 left-0">
        <Image
          src="/shape-get-started.svg"
          alt="Shape get started"
          className="object-contain"
          fill
        />
      </div>
    </aside>
  );
}
