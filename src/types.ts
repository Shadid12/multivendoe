export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Shop = {
  __typename?: 'Shop';
  name: Scalars['String'];
  category?: Maybe<Array<Scalars['String']>>;
  owner: User;
  image?: Maybe<Scalars['String']>;
  _id: Scalars['ID'];
};

export type User = {
  __typename?: 'User';
  name: Scalars['String'];
  email: Scalars['String'];
  shops?: Maybe<Array<Shop>>;
};

export type Product = {
  __typename?: 'Product';
  _id: Scalars['ID'];
  name: Scalars['String'];
  price: Scalars['Float'];
  shop: Shop;
  image: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  shops?: Maybe<Array<Maybe<Shop>>>;
};
