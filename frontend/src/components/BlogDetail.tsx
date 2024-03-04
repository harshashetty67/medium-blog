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
      <div className="pt-2 px-9 border-b-2 border-slate-300 pb-4">
        <AppBar name={"undefined"} />
      </div>
      <div className="grid grid-cols-12 px-10 py-5">
        <div className="col-span-8 w-11/12 text-justify">
          <div className="font-extrabold text-4xl">{title}</div>
          <div className="mt-4 font-normal text-lg">{content}</div>
        </div>
        <div className="col-span-4  text-xl">
          <div>Author</div>
          <div className="flex mt-3 items-center">
            <span className="mr-2 rounded-full font-semibold text-sm border text-center px-3 py-1 object-cover bg-slate-200 text-black ">
              {name[0].toLocaleUpperCase()}
            </span>
            <div className="font-bold">{name}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
