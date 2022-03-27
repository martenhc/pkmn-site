import { FC, useState } from 'react';
import { Loader } from '../../atom/loader/loader';
import { StyledImage } from './image.styled';

type ImageProps = {
  alt: string;
  src: string;
  withOnHoverScaling?: boolean;
};

export const Image: FC<ImageProps> = ({
  src,
  alt,
  withOnHoverScaling = false,
}) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  return (
    <>
      {!isImageLoaded && <Loader />}
      <StyledImage
        withOnHoverScaling={withOnHoverScaling}
        isLoaded={isImageLoaded}
        onLoad={handleImageLoad}
        src={src}
        alt={alt}
      />
    </>
  );
};
