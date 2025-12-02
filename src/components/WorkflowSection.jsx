import codeImage from "../assets/code.jpg";
import { checklistItems } from "../data/checklistitems";
import WorkflowCard from "./ui/cards/WorkFlowCard";

export default function WorkflowSection() {
  return (
    <section>
      <div className="mt-20">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
          Accelerate your{" "}
          <span className="bg-linear-to-r from-orange-500 to-orange-800 bg-clip-text text-transparent">
            coding workflow
          </span>
        </h2>
        <div className="flex flex-wrap justify-center">
          <div className="p-2 w-full lg:w-1/2">
            <img src={codeImage} alt="Code" />
          </div>
          <div className="pt-12 w-full lg:w-1/2">
            {checklistItems.map((item, index) => (
              <WorkflowCard item={item} key={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
