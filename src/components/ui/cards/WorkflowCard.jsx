import CheckIcon from "../icons/CheckIcon";

export default function WorkflowCard({ item }) {
  return (
    <div className="flex mb-12">
      <div className="text-green-400 mx-6 bg-neutral-900 w-10 h-10 p-2 justify-center items-center flex rounded-full">
        <CheckIcon />
      </div>
      <div>
        <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
        <p className="text-md text-neutral-500">{item.description}</p>
      </div>
    </div>
  );
}
