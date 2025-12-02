export default function FooterLinksCard({ title, links }) {
  return (
    <div>
      <h3 className="text-md font-semibold mb-4">{title}</h3>
      <ul className="space-y-2">
        {links.map((link, index) => (
          <li key={index}>
            <a className="text-neutral-300 hover:text-white" href={link.href}>
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
