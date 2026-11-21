
import { useState, useRef } from "react";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/muftlo/ui/button";

const videos = [
  {
    id: "1",
    videoUrl:
      "/__l5e/assets-v1/f00670b1-3a9d-46c8-b959-5f47064b6002/bts-reel.mp4",
  },
  {
    id: "2",
    videoUrl:
      "/__l5e/assets-v1/37dc010a-eb1e-42b0-8ac5-89580957ed0b/search-abode-24.mp4",
  },
  {
    id: "3",
    videoUrl:
      "/__l5e/assets-v1/5f7b2a1c-7acb-4db3-9d06-21a80c8c3229/search-abode-26.mp4",
  },
  {
    id: "4",
    videoUrl:
      "/__l5e/assets-v1/40fff7a3-0bb5-478e-b1b3-fc8a73c2f886/gym-reel.mp4",
  },
  {
    id: "5",
    videoUrl:
      "/__l5e/assets-v1/b0e57753-2246-4b23-bb85-5f173fbca491/soni-bagh.mp4",
  },
  {
    id: "6",
    videoUrl:
      "/__l5e/assets-v1/b9b1e3f5-6c8e-4234-9847-26f476f66ee6/search-abode-36.mp4",
  },
  {
    id: "7",
    videoUrl:
      "/__l5e/assets-v1/543e750a-0e3b-41f7-9766-414c6111c026/crude-fit.mp4",
  },
  {
    id: "8",
    videoUrl:
      "/__l5e/assets-v1/ec230386-f626-4f15-9f67-5b98676a89e1/floresta.mp4",
  },
  {
    id: "9",
    videoUrl:
      "/__l5e/assets-v1/0d072cf2-f72e-481c-8bda-8fb014749c40/aavhan.mp4",
  },
];

export default function VideoSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  const scrollToIndex = (index) => {
    if (sliderRef.current) {
      const cardWidth = 320; // w-80
      const gap = 16; // gap-4
      const scrollPosition = index * (cardWidth + gap);
      sliderRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  const handlePrevious = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : videos.length - 1;
    scrollToIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = currentIndex < videos.length - 1 ? currentIndex + 1 : 0;
    scrollToIndex(newIndex);
  };

  return (
    <div className="relative w-full mb-10 mt-20">
      <div
        ref={sliderRef}
        className="flex gap-4 overflow-x-auto pb-4 scroll-snap-x scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {videos.map((video) => (
          <div
            key={video.id}
            className="flex-shrink-0 w-80 h-[500px] rounded-xl overflow-hidden shadow-lg scroll-snap-start relative"
          >
            <video
              className="absolute top-0 left-0 w-full h-full object-cover"
              src={video.videoUrl}
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        ))}
      </div>
    </div>
  );
}

