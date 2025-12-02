import {
  communityLinks,
  platformLinks,
  resourcesLinks,
} from "../data/footerlinks";
import FooterLinksCard from "./ui/cards/FooterlinksCard";

export default function Footer() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
      <FooterLinksCard title="Resources" links={resourcesLinks} />
      <FooterLinksCard title="Platform" links={platformLinks} />
      <FooterLinksCard title="Community" links={communityLinks} />
    </div>
  );
}
