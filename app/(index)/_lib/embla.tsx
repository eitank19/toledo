import type { CarouselApi } from '@/components/ui/carousel';
import * as React from 'react';

const useEmbla = (cb?: (api: CarouselApi) => void) => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }
    setCurrent(api.selectedScrollSnap());

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap());
    });

    cb?.(api);
  }, [api, cb]);
  return {
    api,
    current,
    setApi,
  };
};

export default useEmbla;
