export const AppBar = ({ name }) => {
  return (
    <div className="flex justify-between items-center w-full">
      <div className="font-semibold text-lg rounded-full bg-black px-4 py-2 text-white flex justify-end">
        Medium
      </div>
      <div className="flex items-center">
        <div className="font-semibold">Publish</div>
        <div>
          <span className="rounded-full font-semibold text-md border text-center px-3 py-1 object-cover bg-slate-300 text-black ml-4">
            {name[0].toLocaleUpperCase()}
          </span>
        </div>
      </div>
    </div>
  );
};
