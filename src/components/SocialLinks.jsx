import { FaFacebookF, FaGlobe, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const NETWORKS = [
  { key: "facebook", label: "Facebook", Icon: FaFacebookF },
  { key: "instagram", label: "Instagram", Icon: FaInstagram },
  { key: "linkedin", label: "LinkedIn", Icon: FaLinkedinIn },
  { key: "youtube", label: "YouTube", Icon: FaYoutube },
  { key: "website", label: "Strona projektu", Icon: FaGlobe },
];

export default function SocialLinks({ links = {}, color }) {
  const available = NETWORKS.filter(({ key }) => links[key]);
  if (available.length === 0) return null;

  return (
    <ul className="social" style={color ? { "--social-color": color } : undefined}>
      {available.map(({ key, label, Icon }) => (
        <li key={key}>
          <a href={links[key]} target="_blank" rel="noopener noreferrer" aria-label={label}>
            <Icon aria-hidden="true" />
          </a>
        </li>
      ))}
    </ul>
  );
}
