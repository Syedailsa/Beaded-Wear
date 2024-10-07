import Image from "next/image";

export default function Home() {
  return (
    <main className="flex justify-end mr-10 items-center gap-80">
      <div className="h-15 w-[25rem]">
        <h1 className="font-bold text-5xl mb-11">
          Freelance <br />
          Web-designer
        </h1>
        <p className="font-semibold mb-16">
          If you want to deliver a smooth customer experience <br />
          and look good while doing it, a web designer can help.
        </p>
          <div className="grid grid-cols-4 text-sm font-semibold mb-2">
            <button className="h-9 w-32 border-solid border-2 rounded border-Turquoise bg-Turquoise text-black">
              Contact Us
            </button>

            <a
              className="col-start-3 col-end-5 p-2"
              href="https://www.figma.com/design/qpakADj3H3rNtWFQFWN2O8/101%2B-Free-Website-Headers-for-web-design-v1.2-(Community)?node-id=10-95&node-type=canvas&t=Xb22Ml3RR00afxPD-0"
            >
              HOW IT WORKS
            </a>
          </div>
      </div>

      <div className="relative top-12 mt-10 ">
        <Image src="/main.png" alt="main image" width={619} height={533.31} />
        <br /><br />
      </div>
    </main>
  );
}
