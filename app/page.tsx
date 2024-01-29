export default async function Home() {
  function delay() {
    return new Promise((resolve) => setTimeout(resolve, 3000));
  }

  await delay();

  return (
    <main className="flex justify-center items-center h-screen">
      <h1 className="text-5xl md:text-9xl font-extrabold">Mind Games</h1>
    </main>
  );
}
