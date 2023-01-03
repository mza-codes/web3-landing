import Loader from "./components/Loader";

function App() {
  return (
    <main
      className="bg-gradient-to-tr from-green-300 via-red-300 to-fuchsia-300 flex-col gap-3 
      min-h-screen w-full flex items-center justify-center text-center"
    >
      <div
        className="bg-emerald-900 bg-opacity-50 hover:bg-opacity-100 w-64 h-72 flex items-center flex-col justify-center
        rounded-lg text-2xl p-4 font-semibold font-poppins text-white"
      >
        Hello World
        <Loader color="#f8f8f8" inline={1} />
      </div>
      <p className="font-poorStory text-5xl font-semibold">Vite + TS</p>
        <span className="font-righteous text-2xl font-medium">Powered By: TailwindCSS</span>
      <span className="font-righteous text-2xl font-medium">mza-codes</span>
    </main>
  );
}

export default App;
