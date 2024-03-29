import getData from "./lib/getData";
import Header from "./ui/home/Header";
import { HomeButton } from "./ui/global/Buttons";
import Link from "next/link";

export default async function Home() {
  const data = await getData();
  const quizzes = data.quizzes;

  return (
    <main className="flex flex-col items-center justify-center gap-[85px] max-w-[1160px] m-auto">
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <h1 className="heading-l">
            Welcome to the <span className="font-bold">Frontend Quiz!</span>
          </h1>
          <p className="text-body-s text-grey-navy italic mt-12">
            Pick a subject to get started.
          </p>
        </div>
        <ul className="flex flex-col gap-3 sm:gap-6">
          {quizzes.map((quiz) => (
            <li key={quiz.title}>
              <Link href={`/quiz/${quiz.title}`}>
                <HomeButton
                  key={quiz.title}
                  icon={quiz.icon}
                  title={quiz.title}
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
