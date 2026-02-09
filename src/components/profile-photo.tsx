'use client';

import Image from 'next/image';
import { useState } from 'react';

const PRIMARY_PHOTO = '/images/profile.jpg';
const FALLBACK_PHOTO = '/images/profile-placeholder.svg';
const PHOTO_SIZE = 1200;
const DESKTOP_PHOTO_WIDTH = '28rem';
const MOBILE_PHOTO_WIDTH = '92vw';

export function ProfilePhoto() {
  const [photoSrc, setPhotoSrc] = useState(PRIMARY_PHOTO);

  return (
    <div className='photo-frame'>
      <Image
        src={photoSrc}
        alt='Portrait of Gustavo Tartas'
        width={PHOTO_SIZE}
        height={PHOTO_SIZE}
        sizes={`(max-width: 1024px) ${MOBILE_PHOTO_WIDTH}, ${DESKTOP_PHOTO_WIDTH}`}
        quality={100}
        className='h-full w-full object-cover'
        priority
        onError={() => {
          if (photoSrc !== FALLBACK_PHOTO) {
            setPhotoSrc(FALLBACK_PHOTO);
          }
        }}
      />
    </div>
  );
}
