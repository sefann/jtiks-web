'use client';

interface PortraitVideoProps {
  videoSrc: string;
  poster?: string;
  alt?: string;
}

export default function PortraitVideo({ videoSrc, poster, alt = 'Service video' }: PortraitVideoProps) {
  return (
    <div className="relative w-full max-w-sm mx-auto aspect-[4/5] rounded-2xl overflow-hidden bg-nude-beige/20">
      <video
        src={videoSrc}
        poster={poster}
        controls
        className="w-full h-full object-cover"
        playsInline
        aria-label={alt}
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

