const credentials = [
  {
    name: "HRD Corp TRAIN-THE-TRAINER Certificate of Completion",
    issuer: "Success Edge Academy PLT",
    details: "Assessment requirements fulfilled on 25 October 2026.",
  },
  {
    name: "Google AI Professional Certificate",
    issuer: "Google via Coursera",
    details: "Completed 29 October 2026. Eight courses.",
  },
  {
    name: "AI Security & Governance Course Certificate",
    issuer: "Securiti",
    details: null,
  },
  {
    name: "Certified Blockchain Developer",
    issuer: "Blockchain Council",
    details: "Issued 28 October 2026. Valid until 28 October 2028.",
  },
];

const historicalTraining = [
  {
    name: "Kotlin Android Developer Expert",
    issuer: "Dicoding",
    details: "Issued 28 January 2020. Expired 28 January 2023.",
  },
  {
    name: "Menjadi Android Developer Expert",
    issuer: "Dicoding",
    details: "Issued 6 November 2019. Expired 6 November 2022.",
  },
];

export default function CertificationsWidget() {
  return (
    <section id="certifications" aria-labelledby="certifications-title" className="py-24 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 id="certifications-title" className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">
          Certifications &amp; Professional Development
        </h2>
        <p className="text-zinc-400 text-base max-w-2xl mb-12">
          Training in facilitation, AI, security and blockchain, alongside my work building products.
        </p>

        <h3 className="text-xl font-medium tracking-tight text-white mb-4">Current credentials</h3>
        <ul className="divide-y divide-white/10 border-y border-white/10">
          {credentials.map((credential) => (
            <li key={credential.name} className="py-6 grid gap-2 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:gap-10">
              <div className="min-w-0">
                <h4 className="text-base md:text-lg font-medium text-white leading-relaxed">{credential.name}</h4>
                <p className="text-sm text-zinc-400 mt-1">{credential.issuer}</p>
              </div>
              {credential.details && (
                <p className="text-sm text-zinc-400 leading-relaxed md:pt-1">{credential.details}</p>
              )}
            </li>
          ))}
        </ul>

        <div className="mt-12">
          <h3 className="text-xl font-medium tracking-tight text-white mb-3">Historical training</h3>
          <p className="text-sm text-zinc-400 max-w-2xl mb-4">
            These credentials have expired and are included as part of my earlier Android development training.
          </p>
          <ul className="divide-y divide-white/10 border-y border-white/10">
            {historicalTraining.map((credential) => (
              <li key={credential.name} className="py-6 grid gap-2 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:gap-10">
                <div className="min-w-0">
                  <h4 className="text-base font-medium text-zinc-300 leading-relaxed">{credential.name}</h4>
                  <p className="text-sm text-zinc-400 mt-1">{credential.issuer}</p>
                </div>
                <p className="text-sm text-zinc-400 leading-relaxed md:pt-1">{credential.details}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
