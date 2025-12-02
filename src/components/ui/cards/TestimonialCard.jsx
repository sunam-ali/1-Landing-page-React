export default function TestimonialCard({ testimonial }) {
  return (
    <div className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
      <div className="bg-neutral rounded-md p-6 text-md border border-neutral-800 font-thin">
        <p>{testimonial.text}</p>
        <div className="flex mt-8 items-center">
          <img
            className="w-12 h-12 mr-6 rounded-full border border-neutral-300"
            src={testimonial.image}
            alt={testimonial.user}
          />
          <div>
            <h6>{testimonial.user}</h6>
            <span className="text-sm font-normal italic text-neutral-600">{testimonial.company}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
