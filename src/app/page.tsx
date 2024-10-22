export default function Home() {
  return (
    <div className="flex flex-col items-center">

    <div className="flex  m-6 w-full justify-around">
        <div className="bg-blue-500 h-56 w-56">card 1</div>
        <div className="bg-green-500 h-56 w-56">card 2</div>
        <div className="bg-red-500 h-56 w-56">card 3</div>
    </div>

    <div className="flex m-6 w-full justify-around">
        <div className="bg-yellow-500 h-56 w-56">card 4</div>
        <div className="bg-purple-500 h-56 w-56">card 5</div>
    </div>
</div>
  );
}