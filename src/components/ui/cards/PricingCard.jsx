import CheckIcon from "../icons/CheckIcon";

export default function PricingCard({ option }) {
  return (
    <div className="w-full sm:w-1/2 lg:w-1/3 p-2">
      <div className="p-10 border border-neutral-700 rounded-xl">
        <p>
          {option.title}{" "}
          {option.title === "Pro" && (
            <span className="bg-linear-to-r from-orange-500 to-red-400 bg-clip-text text-transparent">
              (Most Popular)
            </span>
          )}
        </p>
        <p className="mb-8">
          <span className="text-5xl mt-6 mr-2">{option.price}</span>
          <span className="text-neutral-400 tracking-tight">/Month</span>
        </p>
        <ul>
          {option.features.map((feature, index) => (
            <li key={index} className="mt-8 flex items-center">
              <CheckIcon />
              <span className="ml-2">{feature}</span>
            </li>
          ))}
        </ul>
        <a
          href="#"
          className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-20 tracking-tight text-xl hover:bg-orange-900 border border-orange-900 rounded-lg transition duration-200"
        >
          Subscribe
        </a>
      </div>
    </div>
  );
}
