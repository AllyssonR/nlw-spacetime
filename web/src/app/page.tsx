export default function Home() {
  return (
    <main className="grid grid-cols-2 h-screen">
      {/*Left*/}
      <div className=" relative flex felx-col items-start justify-between px-28 py-16 overflow-hidden">
        <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 bg-purple-700 opacity-50 rounded-full blur-full"></div>
      </div>
      {/*Right*/}
      <div className="flex flex-col p-16">
        <div className="flex h-full items-center justify-center">
          <p className="text-center leading-relaxed w-[360px]">
            Você ainda não registrou nemhuma lembrança,comece a{" "}
            <a href="" className="underline hover:text-gray-50">
              criar agora!
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
