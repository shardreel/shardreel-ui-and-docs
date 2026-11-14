import { ImageResponse } from 'next/og';
import { appName } from '@/lib/shared';

export const alt = 'shardreel: turn long gameplay into Shorts, Reels and TikToks';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: 80,
          background: '#000',
          color: '#fff',
        }}
      >
        <div style={{ fontSize: 36, color: '#a1a1aa' }}>{appName}</div>
        <div style={{ fontSize: 88, fontWeight: 700, marginTop: 24, lineHeight: 1.05 }}>
          Hours of gameplay in. Shorts out.
        </div>
        <div style={{ fontSize: 34, color: '#a1a1aa', marginTop: 32 }}>
          Local AI video clipper for Apple Silicon. Captioned 9:16 clips for Shorts, Reels and TikTok.
        </div>
      </div>
    ),
    size,
  );
}
