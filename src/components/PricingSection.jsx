import { pricingOptions } from "../data/pricingoptions";
import PricingCard from "./ui/cards/PricingCard";

export default function PricingSection() {
  return (
    <section>
      <div className="mt-20">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide">
          Pricing
        </h2>
        <div className="flex flex-wrap">
          {pricingOptions.map((option, index) => (
            <PricingCard option={option} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
