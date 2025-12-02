import { testimonials } from "../data/testimonials";
import TestimonialCard from "./ui/cards/TestimonialCard";

export default function Testimonials() {
  return (
    <section>
      <div className="mt-10 tracking-wide">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-20">
          What people are saying
        </h2>
        <div className="flex flex-wrap justify-center">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard testimonial={testimonial} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
