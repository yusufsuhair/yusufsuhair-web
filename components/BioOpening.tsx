import { getYearsOfExperience } from "@/lib/career";
import { PLAY_DEVELOPER_URL } from "@/lib/links";

interface BioOpeningProps {
  linkClassName: string;
}

// The opening shared by the Home and Services bios. Each page writes its own ending.
export default function BioOpening({ linkClassName }: BioOpeningProps) {
  return (
    <>
      I&apos;m a software engineer and AI agent builder with {getYearsOfExperience()}+ years of
      experience. I&apos;ve shipped{" "}
      <a href="/#projects" className={linkClassName}>
        70+ web and mobile products
      </a>
      , with my mobile apps reaching{" "}
      <a href={PLAY_DEVELOPER_URL} target="_blank" rel="noopener noreferrer" className={linkClassName}>
        6M+ installs on Google Play Store &amp; iOS App Store
      </a>
      . I&apos;ve completed HRD Corp Train-the-Trainer.
    </>
  );
}
