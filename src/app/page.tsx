import { Footer } from "./components/Footer";
import { Main } from "./components/Main";

const Page = () => {
  return (
    <div>
      <main className="mt-8 flex flex-col justify-center w-screen h-full bg-slate-200 dark:bg-black  "> 
          <Main />
          <Footer/>
      </main>
    </div>
  )
}

export default Page;