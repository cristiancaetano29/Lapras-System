import { useRouter } from "next/router";
import NavbarDash from "../../components/NavbarDash";


export default function HistoricPage(){
  return (
    <>
      <NavbarDash title="Histórico" />
      <div class="m-0 font-sans antialiased font-normal text-base leading-default bg-zinc-100 dark:bg-gray-700 h-screen">
        <div class="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%] dark:bg-gray-700">
          <div class="2xl:container h-full bg-zinc-100 dark:bg-gray-700 fadeIn">
            <div class="2xl:container h-full  dark:bg-gray-700">
              <div class="flex justify-center items-center">

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};