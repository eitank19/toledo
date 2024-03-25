import { Img } from '@/components/image';
import { urlForImage } from '@/sanity/lib/image';
import type { Article as ArticleType } from '@/types/index.types';
import type { Image } from 'sanity';

export const Article = ({
  article,
  image,
}: { article: ArticleType; image: Image }) => {
  return (
    <div className="flex max-md:flex-col items-center gap-5 md:gap-20 py-14">
      <Img
        className="md:order-last min-w-80 rounded-xl"
        width={330}
        src={urlForImage(image)}
      />
      <div>
        <h2 className="font-black pb-4 md:pb-3 text-balance text-2xl max-md:text-center">
          {article.title}
        </h2>
        <p className="text-base max-md:text-center text-pretty">
          {article.content}
        </p>
      </div>
    </div>
  );
};
