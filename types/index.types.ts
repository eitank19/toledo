import type { ImageProps } from 'next/image';
import type { NextMiddleware } from 'next/server';
import type * as React from 'react';
import type { Image } from 'sanity';

export type PageProps = Readonly<{
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}>;

export type MiddlewareFactory = (middleware: NextMiddleware) => NextMiddleware;

export type NavType = { title: string; href: `/${string}` };

type OmittedImageProps = 'height' | 'width' | 'srcSet' | 'placeholder' | 'alt';

type ModifiedImageProps = Partial<{
  alt: string;
  width: number;
  height: number;
  placeholder: 'blur' | 'color' | 'shimmer' | 'empty' | `data:image/${string}`;
}>;

export type ImgProps = ModifiedImageProps &
  Omit<ImageProps, OmittedImageProps> &
  Omit<React.ImgHTMLAttributes<HTMLImageElement>, OmittedImageProps>;

export type HeroType = {
  _id: string;
  _rev: string;
  _type: 'hero';
  _createdAt: string;
  _updatedAt: string;
  title: string;
  subtitle: string;
  description: string;
  callToAction: string;
  phoneNumber: string;
  bulletPoints: string[];
  backgroundImage: {
    _type: 'image';
    asset: {
      _type: 'reference';
      _ref: string;
    };
  };
  mainImage: {
    _type: 'image';
    asset: {
      _type: 'reference';
      _ref: string;
    };
  };
};

export interface ServiceType {
  _createdAt: Date;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: Date;
  homepage: Homepage;
  servicePage: ServicePage;
}

export interface Homepage {
  description: string;
  icon: Image;
  name: string;
  slug: Slug;
}

export interface Slug {
  _type: string;
  current: string;
}

export interface ServicePage {
  article: Article;
  benefits: string[];
  caption: string;
  description: string;
  gallery: Gallery[];
  title: string;
}

export interface Article {
  content: string;
  faq: FAQ[];
  title: string;
}

export interface FAQ {
  _key: string;
  answer: string;
  question: string;
}

export interface Gallery {
  _key: string;
  _type: string;
  asset: Asset;
}

export interface BenefitType {
  _id: string;
  _rev: string;
  _type: string;
  description: string;
  icon: Image;
  link: Link;
  title: string;
  _createdAt: Date;
  _updatedAt: Date;
}


export interface Link {
  href: string;
  label: string;
}

export interface LocationType {
    _createdAt: Date;
    _id:        string;
    _rev:       string;
    _type:      string;
    _updatedAt: Date;
    image:      Image;
    locations:  string[];
}

export interface Asset {
    _ref:  string;
    _type: string;
}
