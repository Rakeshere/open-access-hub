import { getSiteMedia } from "@/muftlo/site-media";

const work = [
  { name: "Dotsquares", image: "Dots.jpg", alt: "Dotsquares company profile video project" },
  { name: "Search Abode", image: "Best Digital Marketing.jpg", alt: "Search Abode digital marketing project" },
  { name: "Sondaryam", image: "Sondaryam.jpg", alt: "Sondaryam podcast and branding project" },
  { name: "RNT School", image: "RNT.jpg", alt: "RNT School digital presence project" },
  { name: "Pastelli", image: "Pastelli.jpg", alt: "Pastelli fashion brand project" },
];

const rotations = [-5, 13, -7, -4, 10];

export default function WorkGallery() {
  return (
    <section aria-labelledby="selected-work-title" className="footer-photo-scene bg-brand-navy px-5 pt-16 text-brand-cream sm:px-8 md:pt-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-5 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase text-brand-orange">Selected work</p>
            <h2 id="selected-work-title" className="max-w-3xl text-4xl font-extrabold leading-tight md:text-6xl">
              Good work speaks for itself.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-brand-cream/65 md:pb-1">
            A few of the brands we’ve helped shape, tell their story, and grow.
          </p>
        </div>

        <div className="footer-photo-stage">
          {work.map((item, index) => (
            <figure
              key={item.name}
              className="footer-photo-card bg-brand-cream p-2 pb-3 text-brand-navy"
              style={{ "--photo-index": index, "--photo-rotation": `${rotations[index]}deg`, "--photo-delay": `${index * -1.5}s` }}
            >
              <img
                src={getSiteMedia(item.image)}
                alt={item.alt}
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <figcaption className="px-2 pt-2 text-sm font-semibold">{item.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}