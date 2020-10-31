import { Image, Skeleton } from '@chakra-ui/core';
import ProgressiveImage from 'react-progressive-image';
import { ImageProps } from '@chakra-ui/core/dist/Image';

type LazyImageProps = ImageProps & {
  src: string;
  width: string;
  height?: string;
  rounded: string;
};

export function LazyImage(props: LazyImageProps) {
  const { src, height, width, rounded } = props;

  return (
    <ProgressiveImage delay={ 500 } src={ src } placeholder='/avatars/placeholder.png'>
      { (src, loading) => {
        return loading ? (
          <Skeleton rounded={ rounded } height={ height } width={ width } d='block' />
        ) : (
          <Image { ...props } />
        );
      } }
    </ProgressiveImage>
  );
}
