import { AppBar } from "./AppBar";

export const BlogDetail = ({
  title,
  content,
  name,
}: {
  title: string;
  content: string;
  name: string;
}) => {
  return (
    <div>
      <div className="px-9 border-b-2 border-slate-200 py-3">
        <AppBar name={name || "Anonymous"} />
      </div>
      <div className="grid grid-cols-12 px-10 py-8">
        <div className="col-span-8 justify-self-end w-11/12">
          <div className="font-extrabold text-4xl">{title}</div>
          <div className=" text-slate-500 text-md font-medium mt-4">
            Published on December 2, 2023
          </div>
          <div className="mt-4 text-slate-700 font-medium text-lg">
            {content}
          </div>
        </div>
        <div className="col-span-4 justify-self-center text-xl">
          <div>Author</div>
          <div className="flex mt-3 items-center">
            <span className="mr-2 rounded-full font-semibold text-sm border text-center px-4 py-2 object-cover bg-slate-300 text-black ">
              {name[0].toLocaleUpperCase()}
            </span>

            <div className="ml-2">
              <div className="font-bold">{name}</div>
              <div className="font-normal text-slate-600 text-lg">
                Bio of the author like his skills and knowledge
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
