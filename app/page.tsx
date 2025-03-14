import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]" style={{ marginTop: '-96px' }}>
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Guess the pic year</h1>
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">What is it about?</h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">In this game, you will see a picture. Your challenge is to guess the year the picture was taken in</p>
        <div className="flex gap-4 flex-row">
          <Button>Start guessing now</Button>
          <Button variant="secondary">How to play</Button>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://www.linkedin.com/in/quentin-berger-97a062182/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Linkedin
      </a>
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://qberger.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        My website
      </a>
      </footer>
    </div>
  );
}
