export default function Button({ className = "", children, link = "#" }) {
  return (
    <a
      href={link}
      className={`py-2 px-3 rounded-md ${className} transition duration-200 text-center`}
    >
      {children}
    </a>
  );
}
