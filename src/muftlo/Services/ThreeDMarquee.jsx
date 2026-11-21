
import { ThreeDMarquee } from "@/muftlo/ui/3d-marquee";

export function ThreeDMarqueeDemoSecond() {
  const images = [
    "/__l5e/assets-v1/1695ccc0-320a-4dc3-b20a-6b7b84b7cc38/3795511ef3.png",
    "/__l5e/assets-v1/d9d3841e-871e-4f25-93e6-7c5c0a8fd14d/1d0a2250aa.png",
    "/__l5e/assets-v1/1df16837-616f-4464-9de1-6fb2fc392aec/a204caebef.webp",
    "/__l5e/assets-v1/e8013d6f-6908-4811-a3db-012b393a05da/1c0d74f362.png",
    "/__l5e/assets-v1/8a6457cb-a421-4178-a2d8-245dc488b688/85389d5be5.png",
    "/__l5e/assets-v1/670f9230-7583-4e0f-8b56-5bc6008055c8/761f5d59ef.png",
    "/__l5e/assets-v1/ae1169ef-e703-4dcc-8f2d-24e5a7fdf9ea/a66b4887ad.png",
    "/__l5e/assets-v1/0a0f7734-fcb7-4f14-9b5c-a7bdfac3e5de/aaa8815ae4.png",
    "/__l5e/assets-v1/6cbfcf7e-8ae2-4606-979d-eb6966486445/c9a56a7da8.png",
    "/__l5e/assets-v1/c00b72bc-c470-42dc-8488-35c22b8ea83f/99d691b5d7.webp",
    "/__l5e/assets-v1/31f74469-cb97-456f-b172-913293bd244c/15108bbccb.png",
    "/__l5e/assets-v1/a300379d-299f-4140-8820-aa7ad7217f66/0928e2689a.png",
    "/__l5e/assets-v1/52f0caa1-0203-410e-8733-253fee323f18/1481ed1b6e.png",
    "/__l5e/assets-v1/2499acbc-dce0-4d61-ba0c-97d3dad49c85/203bea556e.png",
    "/__l5e/assets-v1/9968ccec-2be1-4141-bcbf-84584af4a69c/863318ca53.webp",
    "/__l5e/assets-v1/e42fac68-347a-4b42-a2b1-078ec0dfb001/d9660c491f.png",
    "/__l5e/assets-v1/426b37ad-b936-42ab-84c3-81ba7624c69e/707d954a9f.png",
    "/__l5e/assets-v1/37465385-e551-4929-a40a-6d03e09c9941/773774a14e.png",
    "/__l5e/assets-v1/5e93ce27-a3df-4ed9-af69-0078fafa4e72/174bed5fb8.png",
    "/__l5e/assets-v1/59530245-f293-4200-9db0-749952ccde57/9d05a4fd7f.png",
    "/__l5e/assets-v1/7fe47878-9166-45dd-b83f-641474e58d8b/5937945bcd.webp",
    "/__l5e/assets-v1/aa289645-b6a4-42d2-998d-a281a4be8920/41cce38057.png",
    "/__l5e/assets-v1/bb437494-43b7-474b-a0a0-c07dd611b578/a8c0a4ce8a.png",
    "/__l5e/assets-v1/967fad15-7988-4b25-a693-6e985570bffb/1590d517ac.png",
    "/__l5e/assets-v1/234fda5e-1ded-4cb0-b89d-1cfd878fcb48/7ec5e8430a.png",
    "/__l5e/assets-v1/82f552e6-5dd9-4be1-9ec8-e39037ee2704/14088f6233.png",
    "/__l5e/assets-v1/92f917e8-e9b2-4017-8986-14422e517178/65986c8813.png",
    "/__l5e/assets-v1/ab9d2e57-e2e8-4923-8508-f1c856ca5acf/7d6f62c82b.png",
    "/__l5e/assets-v1/3197951c-f0c0-4970-a0a4-ccbaceac1677/8188a59002.png",
    "/__l5e/assets-v1/64713686-b819-40fa-98f8-9d5a5023d9f2/d20f5d2d7e.png",
    "/__l5e/assets-v1/5086c251-adca-4ad9-851d-e704ae1d6cb6/7c7069f78a.webp",
  ];
  return (
    <div className="relative mx-auto flex h-screen w-full flex-col items-center justify-center overflow-hidden">
      <h2 className="relative z-20 mx-auto max-w-4xl text-center text-lg font-bold text-balance text-white md:text-2xl lg:text-4xl">
        Transforming{" "}
        <span className="relative z-20 inline-block rounded-xlpx-4 py-1 text-white decoration-[6px] underline-offset-[16px]">
          ideas
        </span>{" "}
        into brands that connect and convert.
      </h2>

      <p className="relative z-20 mx-auto max-w-2xl py-8 text-center text-sm text-neutral-200 md:text-base">
        From strategy to storytelling — we craft digital experiences that make
        your brand unforgettable. Whether it’s scaling your reach, building
        trust, or driving sales, our team blends creativity and data to help you
        grow faster, smarter, and stronger.
      </p>

      {/* overlay */}
      <div className="absolute inset-0 z-10 h-full w-full bg-black/60 dark:bg-black/40" />

      <ThreeDMarquee
        className="pointer-events-none absolute inset-0 h-full w-full"
        images={images}
      />
    </div>
  );
}
