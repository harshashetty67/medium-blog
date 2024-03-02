export const Quote = () => {
  return (
    <div className="h-screen w-full bg-slate-200 flex justify-center items-center px-10">
      <div className="flex flex-col justify-center">
        <div className="mb-4 font-bold text-3xl max-w-screen-sm">
          "The customer service I receieved was exceptional. The support team
          went above and beyond to address my concerns."
        </div>
        <div>
          <h2 className="font-bold text-xl">Jules Winnfield</h2>
          <div className="text-gray-500 font-semibold">CEO, Acme Inc</div>
        </div>
      </div>
    </div>
  );
};
