'use client';

import Image from 'next/image';

const PRIMARY_PHOTO = '/images/profile.jpg';
const FALLBACK_PHOTO = '/images/profile-placeholder.svg';
const PHOTO_SIZE = 560;

export function ProfilePhoto() {
  return (
    <div className='photo-frame'>
      <Image
        src={PRIMARY_PHOTO || FALLBACK_PHOTO}
        alt='Portrait of Gustavo Tartas'
        width={PHOTO_SIZE}
        height={PHOTO_SIZE}
        className='h-full w-full object-cover'
        priority
      />
    </div>
  );
}
