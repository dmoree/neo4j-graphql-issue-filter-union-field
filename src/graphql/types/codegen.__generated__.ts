import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { GraphQLContext } from './context';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date and time, represented as an ISO-8601 string */
  DateTime: string;
};

export type Blog = {
  id: Scalars['ID'];
  name: Scalars['String'];
  isCreator: Scalars['Boolean'];
  isAuthor: Scalars['Boolean'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  creator: User;
  authors: Array<User>;
  posts: Array<Post>;
};


export type BlogCreatorArgs = {
  where?: Maybe<UserWhere>;
  options?: Maybe<UserOptions>;
};


export type BlogAuthorsArgs = {
  where?: Maybe<UserWhere>;
  options?: Maybe<UserOptions>;
};


export type BlogPostsArgs = {
  where?: Maybe<PostWhere>;
  options?: Maybe<PostOptions>;
};

export type BlogAuthorsDeleteFieldInput = {
  where?: Maybe<UserWhere>;
  delete?: Maybe<UserDeleteInput>;
};

export type BlogAuthorsFieldInput = {
  create?: Maybe<Array<UserCreateInput>>;
  connect?: Maybe<Array<UserConnectFieldInput>>;
};

export type BlogAuthorsUpdateFieldInput = {
  where?: Maybe<UserWhere>;
  update?: Maybe<UserUpdateInput>;
  connect?: Maybe<Array<UserConnectFieldInput>>;
  disconnect?: Maybe<Array<UserDisconnectFieldInput>>;
  create?: Maybe<Array<UserCreateInput>>;
  delete?: Maybe<Array<UserDeleteFieldInput>>;
};

export type BlogConnectFieldInput = {
  where?: Maybe<BlogWhere>;
  connect?: Maybe<BlogConnectInput>;
};

export type BlogConnectInput = {
  creator?: Maybe<UserConnectFieldInput>;
  authors?: Maybe<Array<UserConnectFieldInput>>;
  posts?: Maybe<Array<PostConnectFieldInput>>;
};

export type BlogCreateInput = {
  name: Scalars['String'];
  creator?: Maybe<BlogCreatorFieldInput>;
  authors?: Maybe<BlogAuthorsFieldInput>;
  posts?: Maybe<BlogPostsFieldInput>;
};

export type BlogCreatorDeleteFieldInput = {
  where?: Maybe<UserWhere>;
  delete?: Maybe<UserDeleteInput>;
};

export type BlogCreatorFieldInput = {
  create?: Maybe<UserCreateInput>;
  connect?: Maybe<UserConnectFieldInput>;
};

export type BlogCreatorUpdateFieldInput = {
  where?: Maybe<UserWhere>;
  update?: Maybe<UserUpdateInput>;
  connect?: Maybe<UserConnectFieldInput>;
  disconnect?: Maybe<UserDisconnectFieldInput>;
  create?: Maybe<UserCreateInput>;
  delete?: Maybe<UserDeleteFieldInput>;
};

export type BlogDeleteFieldInput = {
  where?: Maybe<BlogWhere>;
  delete?: Maybe<BlogDeleteInput>;
};

export type BlogDeleteInput = {
  creator?: Maybe<BlogCreatorDeleteFieldInput>;
  authors?: Maybe<Array<BlogAuthorsDeleteFieldInput>>;
  posts?: Maybe<Array<BlogPostsDeleteFieldInput>>;
};

export type BlogDisconnectFieldInput = {
  where?: Maybe<BlogWhere>;
  disconnect?: Maybe<BlogDisconnectInput>;
};

export type BlogDisconnectInput = {
  creator?: Maybe<UserDisconnectFieldInput>;
  authors?: Maybe<Array<UserDisconnectFieldInput>>;
  posts?: Maybe<Array<PostDisconnectFieldInput>>;
};

export type BlogOptions = {
  /** Specify one or more BlogSort objects to sort Blogs by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: Maybe<Array<Maybe<BlogSort>>>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type BlogPostsDeleteFieldInput = {
  where?: Maybe<PostWhere>;
  delete?: Maybe<PostDeleteInput>;
};

export type BlogPostsFieldInput = {
  create?: Maybe<Array<PostCreateInput>>;
  connect?: Maybe<Array<PostConnectFieldInput>>;
};

export type BlogPostsUpdateFieldInput = {
  where?: Maybe<PostWhere>;
  update?: Maybe<PostUpdateInput>;
  connect?: Maybe<Array<PostConnectFieldInput>>;
  disconnect?: Maybe<Array<PostDisconnectFieldInput>>;
  create?: Maybe<Array<PostCreateInput>>;
  delete?: Maybe<Array<PostDeleteFieldInput>>;
};

export type BlogRelationInput = {
  creator?: Maybe<UserCreateInput>;
  authors?: Maybe<Array<UserCreateInput>>;
  posts?: Maybe<Array<PostCreateInput>>;
};

/** Fields to sort Blogs by. The order in which sorts are applied is not guaranteed when specifying many fields in one BlogSort object. */
export type BlogSort = {
  id?: Maybe<SortDirection>;
  name?: Maybe<SortDirection>;
  createdAt?: Maybe<SortDirection>;
  updatedAt?: Maybe<SortDirection>;
};

export type BlogUpdateInput = {
  name?: Maybe<Scalars['String']>;
  creator?: Maybe<BlogCreatorUpdateFieldInput>;
  authors?: Maybe<Array<BlogAuthorsUpdateFieldInput>>;
  posts?: Maybe<Array<BlogPostsUpdateFieldInput>>;
};

export type BlogWhere = {
  OR?: Maybe<Array<BlogWhere>>;
  AND?: Maybe<Array<BlogWhere>>;
  id?: Maybe<Scalars['ID']>;
  id_NOT?: Maybe<Scalars['ID']>;
  id_IN?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id_NOT_IN?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id_CONTAINS?: Maybe<Scalars['ID']>;
  id_NOT_CONTAINS?: Maybe<Scalars['ID']>;
  id_STARTS_WITH?: Maybe<Scalars['ID']>;
  id_NOT_STARTS_WITH?: Maybe<Scalars['ID']>;
  id_ENDS_WITH?: Maybe<Scalars['ID']>;
  id_NOT_ENDS_WITH?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  name_NOT?: Maybe<Scalars['String']>;
  name_IN?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_NOT_IN?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_CONTAINS?: Maybe<Scalars['String']>;
  name_NOT_CONTAINS?: Maybe<Scalars['String']>;
  name_STARTS_WITH?: Maybe<Scalars['String']>;
  name_NOT_STARTS_WITH?: Maybe<Scalars['String']>;
  name_ENDS_WITH?: Maybe<Scalars['String']>;
  name_NOT_ENDS_WITH?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_NOT?: Maybe<Scalars['DateTime']>;
  createdAt_IN?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  createdAt_NOT_IN?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  createdAt_LT?: Maybe<Scalars['DateTime']>;
  createdAt_LTE?: Maybe<Scalars['DateTime']>;
  createdAt_GT?: Maybe<Scalars['DateTime']>;
  createdAt_GTE?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_NOT?: Maybe<Scalars['DateTime']>;
  updatedAt_IN?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  updatedAt_NOT_IN?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  updatedAt_LT?: Maybe<Scalars['DateTime']>;
  updatedAt_LTE?: Maybe<Scalars['DateTime']>;
  updatedAt_GT?: Maybe<Scalars['DateTime']>;
  updatedAt_GTE?: Maybe<Scalars['DateTime']>;
  creator?: Maybe<UserWhere>;
  creator_NOT?: Maybe<UserWhere>;
  creator_IN?: Maybe<Array<UserWhere>>;
  creator_NOT_IN?: Maybe<Array<UserWhere>>;
  authors?: Maybe<UserWhere>;
  authors_NOT?: Maybe<UserWhere>;
  posts?: Maybe<PostWhere>;
  posts_NOT?: Maybe<PostWhere>;
};

export type Comment = {
  id: Scalars['ID'];
  content: Scalars['String'];
  canDelete?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  author?: Maybe<User>;
  post?: Maybe<Post>;
};


export type CommentAuthorArgs = {
  where?: Maybe<UserWhere>;
  options?: Maybe<UserOptions>;
};


export type CommentPostArgs = {
  where?: Maybe<PostWhere>;
  options?: Maybe<PostOptions>;
};

export type CommentAuthorDeleteFieldInput = {
  where?: Maybe<UserWhere>;
  delete?: Maybe<UserDeleteInput>;
};

export type CommentAuthorFieldInput = {
  create?: Maybe<UserCreateInput>;
  connect?: Maybe<UserConnectFieldInput>;
};

export type CommentAuthorUpdateFieldInput = {
  where?: Maybe<UserWhere>;
  update?: Maybe<UserUpdateInput>;
  connect?: Maybe<UserConnectFieldInput>;
  disconnect?: Maybe<UserDisconnectFieldInput>;
  create?: Maybe<UserCreateInput>;
  delete?: Maybe<UserDeleteFieldInput>;
};

export type CommentConnectFieldInput = {
  where?: Maybe<CommentWhere>;
  connect?: Maybe<CommentConnectInput>;
};

export type CommentConnectInput = {
  author?: Maybe<UserConnectFieldInput>;
  post?: Maybe<PostConnectFieldInput>;
};

export type CommentCreateInput = {
  content: Scalars['String'];
  author?: Maybe<CommentAuthorFieldInput>;
  post?: Maybe<CommentPostFieldInput>;
};

export type CommentDeleteFieldInput = {
  where?: Maybe<CommentWhere>;
  delete?: Maybe<CommentDeleteInput>;
};

export type CommentDeleteInput = {
  author?: Maybe<CommentAuthorDeleteFieldInput>;
  post?: Maybe<CommentPostDeleteFieldInput>;
};

export type CommentDisconnectFieldInput = {
  where?: Maybe<CommentWhere>;
  disconnect?: Maybe<CommentDisconnectInput>;
};

export type CommentDisconnectInput = {
  author?: Maybe<UserDisconnectFieldInput>;
  post?: Maybe<PostDisconnectFieldInput>;
};

export type CommentOptions = {
  /** Specify one or more CommentSort objects to sort Comments by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: Maybe<Array<Maybe<CommentSort>>>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type CommentPostDeleteFieldInput = {
  where?: Maybe<PostWhere>;
  delete?: Maybe<PostDeleteInput>;
};

export type CommentPostFieldInput = {
  create?: Maybe<PostCreateInput>;
  connect?: Maybe<PostConnectFieldInput>;
};

export type CommentPostUpdateFieldInput = {
  where?: Maybe<PostWhere>;
  update?: Maybe<PostUpdateInput>;
  connect?: Maybe<PostConnectFieldInput>;
  disconnect?: Maybe<PostDisconnectFieldInput>;
  create?: Maybe<PostCreateInput>;
  delete?: Maybe<PostDeleteFieldInput>;
};

export type CommentRelationInput = {
  author?: Maybe<UserCreateInput>;
  post?: Maybe<PostCreateInput>;
};

/** Fields to sort Comments by. The order in which sorts are applied is not guaranteed when specifying many fields in one CommentSort object. */
export type CommentSort = {
  id?: Maybe<SortDirection>;
  content?: Maybe<SortDirection>;
  createdAt?: Maybe<SortDirection>;
  updatedAt?: Maybe<SortDirection>;
};

export type CommentUpdateInput = {
  content?: Maybe<Scalars['String']>;
  author?: Maybe<CommentAuthorUpdateFieldInput>;
  post?: Maybe<CommentPostUpdateFieldInput>;
};

export type CommentWhere = {
  OR?: Maybe<Array<CommentWhere>>;
  AND?: Maybe<Array<CommentWhere>>;
  id?: Maybe<Scalars['ID']>;
  id_NOT?: Maybe<Scalars['ID']>;
  id_IN?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id_NOT_IN?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id_CONTAINS?: Maybe<Scalars['ID']>;
  id_NOT_CONTAINS?: Maybe<Scalars['ID']>;
  id_STARTS_WITH?: Maybe<Scalars['ID']>;
  id_NOT_STARTS_WITH?: Maybe<Scalars['ID']>;
  id_ENDS_WITH?: Maybe<Scalars['ID']>;
  id_NOT_ENDS_WITH?: Maybe<Scalars['ID']>;
  content?: Maybe<Scalars['String']>;
  content_NOT?: Maybe<Scalars['String']>;
  content_IN?: Maybe<Array<Maybe<Scalars['String']>>>;
  content_NOT_IN?: Maybe<Array<Maybe<Scalars['String']>>>;
  content_CONTAINS?: Maybe<Scalars['String']>;
  content_NOT_CONTAINS?: Maybe<Scalars['String']>;
  content_STARTS_WITH?: Maybe<Scalars['String']>;
  content_NOT_STARTS_WITH?: Maybe<Scalars['String']>;
  content_ENDS_WITH?: Maybe<Scalars['String']>;
  content_NOT_ENDS_WITH?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_NOT?: Maybe<Scalars['DateTime']>;
  createdAt_IN?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  createdAt_NOT_IN?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  createdAt_LT?: Maybe<Scalars['DateTime']>;
  createdAt_LTE?: Maybe<Scalars['DateTime']>;
  createdAt_GT?: Maybe<Scalars['DateTime']>;
  createdAt_GTE?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_NOT?: Maybe<Scalars['DateTime']>;
  updatedAt_IN?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  updatedAt_NOT_IN?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  updatedAt_LT?: Maybe<Scalars['DateTime']>;
  updatedAt_LTE?: Maybe<Scalars['DateTime']>;
  updatedAt_GT?: Maybe<Scalars['DateTime']>;
  updatedAt_GTE?: Maybe<Scalars['DateTime']>;
  author?: Maybe<UserWhere>;
  author_NOT?: Maybe<UserWhere>;
  author_IN?: Maybe<Array<UserWhere>>;
  author_NOT_IN?: Maybe<Array<UserWhere>>;
  post?: Maybe<PostWhere>;
  post_NOT?: Maybe<PostWhere>;
  post_IN?: Maybe<Array<PostWhere>>;
  post_NOT_IN?: Maybe<Array<PostWhere>>;
};

export type CreateBlogsMutationResponse = {
  blogs: Array<Blog>;
};

export type CreateCommentsMutationResponse = {
  comments: Array<Comment>;
};

export type CreatePostsMutationResponse = {
  posts: Array<Post>;
};

export type CreateUsersMutationResponse = {
  users: Array<User>;
};


export type DeleteInfo = {
  nodesDeleted: Scalars['Int'];
  relationshipsDeleted: Scalars['Int'];
};

export type Mutation = {
  createBlogs: CreateBlogsMutationResponse;
  deleteBlogs: DeleteInfo;
  updateBlogs: UpdateBlogsMutationResponse;
  createComments: CreateCommentsMutationResponse;
  deleteComments: DeleteInfo;
  updateComments: UpdateCommentsMutationResponse;
  createPosts: CreatePostsMutationResponse;
  deletePosts: DeleteInfo;
  updatePosts: UpdatePostsMutationResponse;
  createUsers: CreateUsersMutationResponse;
  deleteUsers: DeleteInfo;
  updateUsers: UpdateUsersMutationResponse;
  signUp?: Maybe<Scalars['String']>;
  signIn?: Maybe<Scalars['String']>;
};


export type MutationCreateBlogsArgs = {
  input: Array<BlogCreateInput>;
};


export type MutationDeleteBlogsArgs = {
  where?: Maybe<BlogWhere>;
  delete?: Maybe<BlogDeleteInput>;
};


export type MutationUpdateBlogsArgs = {
  where?: Maybe<BlogWhere>;
  update?: Maybe<BlogUpdateInput>;
  connect?: Maybe<BlogConnectInput>;
  disconnect?: Maybe<BlogDisconnectInput>;
  create?: Maybe<BlogRelationInput>;
  delete?: Maybe<BlogDeleteInput>;
};


export type MutationCreateCommentsArgs = {
  input: Array<CommentCreateInput>;
};


export type MutationDeleteCommentsArgs = {
  where?: Maybe<CommentWhere>;
  delete?: Maybe<CommentDeleteInput>;
};


export type MutationUpdateCommentsArgs = {
  where?: Maybe<CommentWhere>;
  update?: Maybe<CommentUpdateInput>;
  connect?: Maybe<CommentConnectInput>;
  disconnect?: Maybe<CommentDisconnectInput>;
  create?: Maybe<CommentRelationInput>;
  delete?: Maybe<CommentDeleteInput>;
};


export type MutationCreatePostsArgs = {
  input: Array<PostCreateInput>;
};


export type MutationDeletePostsArgs = {
  where?: Maybe<PostWhere>;
  delete?: Maybe<PostDeleteInput>;
};


export type MutationUpdatePostsArgs = {
  where?: Maybe<PostWhere>;
  update?: Maybe<PostUpdateInput>;
  connect?: Maybe<PostConnectInput>;
  disconnect?: Maybe<PostDisconnectInput>;
  create?: Maybe<PostRelationInput>;
  delete?: Maybe<PostDeleteInput>;
};


export type MutationCreateUsersArgs = {
  input: Array<UserCreateInput>;
};


export type MutationDeleteUsersArgs = {
  where?: Maybe<UserWhere>;
  delete?: Maybe<UserDeleteInput>;
};


export type MutationUpdateUsersArgs = {
  where?: Maybe<UserWhere>;
  update?: Maybe<UserUpdateInput>;
  connect?: Maybe<UserConnectInput>;
  disconnect?: Maybe<UserDisconnectInput>;
  create?: Maybe<UserRelationInput>;
  delete?: Maybe<UserDeleteInput>;
};


export type MutationSignUpArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationSignInArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Post = {
  id: Scalars['ID'];
  title: Scalars['String'];
  content: Scalars['String'];
  canEdit: Scalars['Boolean'];
  canDelete: Scalars['Boolean'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  blog: Blog;
  comments: Array<Comment>;
  author: User;
};


export type PostBlogArgs = {
  where?: Maybe<BlogWhere>;
  options?: Maybe<BlogOptions>;
};


export type PostCommentsArgs = {
  where?: Maybe<CommentWhere>;
  options?: Maybe<CommentOptions>;
};


export type PostAuthorArgs = {
  where?: Maybe<UserWhere>;
  options?: Maybe<UserOptions>;
};

export type PostAuthorDeleteFieldInput = {
  where?: Maybe<UserWhere>;
  delete?: Maybe<UserDeleteInput>;
};

export type PostAuthorFieldInput = {
  create?: Maybe<UserCreateInput>;
  connect?: Maybe<UserConnectFieldInput>;
};

export type PostAuthorUpdateFieldInput = {
  where?: Maybe<UserWhere>;
  update?: Maybe<UserUpdateInput>;
  connect?: Maybe<UserConnectFieldInput>;
  disconnect?: Maybe<UserDisconnectFieldInput>;
  create?: Maybe<UserCreateInput>;
  delete?: Maybe<UserDeleteFieldInput>;
};

export type PostBlogDeleteFieldInput = {
  where?: Maybe<BlogWhere>;
  delete?: Maybe<BlogDeleteInput>;
};

export type PostBlogFieldInput = {
  create?: Maybe<BlogCreateInput>;
  connect?: Maybe<BlogConnectFieldInput>;
};

export type PostBlogUpdateFieldInput = {
  where?: Maybe<BlogWhere>;
  update?: Maybe<BlogUpdateInput>;
  connect?: Maybe<BlogConnectFieldInput>;
  disconnect?: Maybe<BlogDisconnectFieldInput>;
  create?: Maybe<BlogCreateInput>;
  delete?: Maybe<BlogDeleteFieldInput>;
};

export type PostCommentsDeleteFieldInput = {
  where?: Maybe<CommentWhere>;
  delete?: Maybe<CommentDeleteInput>;
};

export type PostCommentsFieldInput = {
  create?: Maybe<Array<CommentCreateInput>>;
  connect?: Maybe<Array<CommentConnectFieldInput>>;
};

export type PostCommentsUpdateFieldInput = {
  where?: Maybe<CommentWhere>;
  update?: Maybe<CommentUpdateInput>;
  connect?: Maybe<Array<CommentConnectFieldInput>>;
  disconnect?: Maybe<Array<CommentDisconnectFieldInput>>;
  create?: Maybe<Array<CommentCreateInput>>;
  delete?: Maybe<Array<CommentDeleteFieldInput>>;
};

export type PostConnectFieldInput = {
  where?: Maybe<PostWhere>;
  connect?: Maybe<PostConnectInput>;
};

export type PostConnectInput = {
  blog?: Maybe<BlogConnectFieldInput>;
  comments?: Maybe<Array<CommentConnectFieldInput>>;
  author?: Maybe<UserConnectFieldInput>;
};

export type PostCreateInput = {
  title: Scalars['String'];
  content: Scalars['String'];
  blog?: Maybe<PostBlogFieldInput>;
  comments?: Maybe<PostCommentsFieldInput>;
  author?: Maybe<PostAuthorFieldInput>;
};

export type PostDeleteFieldInput = {
  where?: Maybe<PostWhere>;
  delete?: Maybe<PostDeleteInput>;
};

export type PostDeleteInput = {
  blog?: Maybe<PostBlogDeleteFieldInput>;
  comments?: Maybe<Array<PostCommentsDeleteFieldInput>>;
  author?: Maybe<PostAuthorDeleteFieldInput>;
};

export type PostDisconnectFieldInput = {
  where?: Maybe<PostWhere>;
  disconnect?: Maybe<PostDisconnectInput>;
};

export type PostDisconnectInput = {
  blog?: Maybe<BlogDisconnectFieldInput>;
  comments?: Maybe<Array<CommentDisconnectFieldInput>>;
  author?: Maybe<UserDisconnectFieldInput>;
};

export type PostOptions = {
  /** Specify one or more PostSort objects to sort Posts by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: Maybe<Array<Maybe<PostSort>>>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type PostRelationInput = {
  blog?: Maybe<BlogCreateInput>;
  comments?: Maybe<Array<CommentCreateInput>>;
  author?: Maybe<UserCreateInput>;
};

/** Fields to sort Posts by. The order in which sorts are applied is not guaranteed when specifying many fields in one PostSort object. */
export type PostSort = {
  id?: Maybe<SortDirection>;
  title?: Maybe<SortDirection>;
  content?: Maybe<SortDirection>;
  createdAt?: Maybe<SortDirection>;
  updatedAt?: Maybe<SortDirection>;
};

export type PostUpdateInput = {
  title?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  blog?: Maybe<PostBlogUpdateFieldInput>;
  comments?: Maybe<Array<PostCommentsUpdateFieldInput>>;
  author?: Maybe<PostAuthorUpdateFieldInput>;
};

export type PostWhere = {
  OR?: Maybe<Array<PostWhere>>;
  AND?: Maybe<Array<PostWhere>>;
  id?: Maybe<Scalars['ID']>;
  id_NOT?: Maybe<Scalars['ID']>;
  id_IN?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id_NOT_IN?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id_CONTAINS?: Maybe<Scalars['ID']>;
  id_NOT_CONTAINS?: Maybe<Scalars['ID']>;
  id_STARTS_WITH?: Maybe<Scalars['ID']>;
  id_NOT_STARTS_WITH?: Maybe<Scalars['ID']>;
  id_ENDS_WITH?: Maybe<Scalars['ID']>;
  id_NOT_ENDS_WITH?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  title_NOT?: Maybe<Scalars['String']>;
  title_IN?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_NOT_IN?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_CONTAINS?: Maybe<Scalars['String']>;
  title_NOT_CONTAINS?: Maybe<Scalars['String']>;
  title_STARTS_WITH?: Maybe<Scalars['String']>;
  title_NOT_STARTS_WITH?: Maybe<Scalars['String']>;
  title_ENDS_WITH?: Maybe<Scalars['String']>;
  title_NOT_ENDS_WITH?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  content_NOT?: Maybe<Scalars['String']>;
  content_IN?: Maybe<Array<Maybe<Scalars['String']>>>;
  content_NOT_IN?: Maybe<Array<Maybe<Scalars['String']>>>;
  content_CONTAINS?: Maybe<Scalars['String']>;
  content_NOT_CONTAINS?: Maybe<Scalars['String']>;
  content_STARTS_WITH?: Maybe<Scalars['String']>;
  content_NOT_STARTS_WITH?: Maybe<Scalars['String']>;
  content_ENDS_WITH?: Maybe<Scalars['String']>;
  content_NOT_ENDS_WITH?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_NOT?: Maybe<Scalars['DateTime']>;
  createdAt_IN?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  createdAt_NOT_IN?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  createdAt_LT?: Maybe<Scalars['DateTime']>;
  createdAt_LTE?: Maybe<Scalars['DateTime']>;
  createdAt_GT?: Maybe<Scalars['DateTime']>;
  createdAt_GTE?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_NOT?: Maybe<Scalars['DateTime']>;
  updatedAt_IN?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  updatedAt_NOT_IN?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  updatedAt_LT?: Maybe<Scalars['DateTime']>;
  updatedAt_LTE?: Maybe<Scalars['DateTime']>;
  updatedAt_GT?: Maybe<Scalars['DateTime']>;
  updatedAt_GTE?: Maybe<Scalars['DateTime']>;
  blog?: Maybe<BlogWhere>;
  blog_NOT?: Maybe<BlogWhere>;
  blog_IN?: Maybe<Array<BlogWhere>>;
  blog_NOT_IN?: Maybe<Array<BlogWhere>>;
  comments?: Maybe<CommentWhere>;
  comments_NOT?: Maybe<CommentWhere>;
  author?: Maybe<UserWhere>;
  author_NOT?: Maybe<UserWhere>;
  author_IN?: Maybe<Array<UserWhere>>;
  author_NOT_IN?: Maybe<Array<UserWhere>>;
};

export type Query = {
  blogs: Array<Blog>;
  comments: Array<Comment>;
  posts: Array<Post>;
  users: Array<User>;
};


export type QueryBlogsArgs = {
  where?: Maybe<BlogWhere>;
  options?: Maybe<BlogOptions>;
};


export type QueryCommentsArgs = {
  where?: Maybe<CommentWhere>;
  options?: Maybe<CommentOptions>;
};


export type QueryPostsArgs = {
  where?: Maybe<PostWhere>;
  options?: Maybe<PostOptions>;
};


export type QueryUsersArgs = {
  where?: Maybe<UserWhere>;
  options?: Maybe<UserOptions>;
};

export enum SortDirection {
  /** Sort by field values in ascending order. */
  ASC = 'ASC',
  /** Sort by field values in descending order. */
  DESC = 'DESC'
}

export type UpdateBlogsMutationResponse = {
  blogs: Array<Blog>;
};

export type UpdateCommentsMutationResponse = {
  comments: Array<Comment>;
};

export type UpdatePostsMutationResponse = {
  posts: Array<Post>;
};

export type UpdateUsersMutationResponse = {
  users: Array<User>;
};

export type User = {
  id: Scalars['ID'];
  email: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdBlogs: Array<Blog>;
  authorsBlogs: Array<Blog>;
};


export type UserCreatedBlogsArgs = {
  where?: Maybe<BlogWhere>;
  options?: Maybe<BlogOptions>;
};


export type UserAuthorsBlogsArgs = {
  where?: Maybe<BlogWhere>;
  options?: Maybe<BlogOptions>;
};

export type UserAuthorsBlogsDeleteFieldInput = {
  where?: Maybe<BlogWhere>;
  delete?: Maybe<BlogDeleteInput>;
};

export type UserAuthorsBlogsFieldInput = {
  create?: Maybe<Array<BlogCreateInput>>;
  connect?: Maybe<Array<BlogConnectFieldInput>>;
};

export type UserAuthorsBlogsUpdateFieldInput = {
  where?: Maybe<BlogWhere>;
  update?: Maybe<BlogUpdateInput>;
  connect?: Maybe<Array<BlogConnectFieldInput>>;
  disconnect?: Maybe<Array<BlogDisconnectFieldInput>>;
  create?: Maybe<Array<BlogCreateInput>>;
  delete?: Maybe<Array<BlogDeleteFieldInput>>;
};

export type UserConnectFieldInput = {
  where?: Maybe<UserWhere>;
  connect?: Maybe<UserConnectInput>;
};

export type UserConnectInput = {
  createdBlogs?: Maybe<Array<BlogConnectFieldInput>>;
  authorsBlogs?: Maybe<Array<BlogConnectFieldInput>>;
};

export type UserCreateInput = {
  email: Scalars['String'];
  createdBlogs?: Maybe<UserCreatedBlogsFieldInput>;
  authorsBlogs?: Maybe<UserAuthorsBlogsFieldInput>;
};

export type UserCreatedBlogsDeleteFieldInput = {
  where?: Maybe<BlogWhere>;
  delete?: Maybe<BlogDeleteInput>;
};

export type UserCreatedBlogsFieldInput = {
  create?: Maybe<Array<BlogCreateInput>>;
  connect?: Maybe<Array<BlogConnectFieldInput>>;
};

export type UserCreatedBlogsUpdateFieldInput = {
  where?: Maybe<BlogWhere>;
  update?: Maybe<BlogUpdateInput>;
  connect?: Maybe<Array<BlogConnectFieldInput>>;
  disconnect?: Maybe<Array<BlogDisconnectFieldInput>>;
  create?: Maybe<Array<BlogCreateInput>>;
  delete?: Maybe<Array<BlogDeleteFieldInput>>;
};

export type UserDeleteFieldInput = {
  where?: Maybe<UserWhere>;
  delete?: Maybe<UserDeleteInput>;
};

export type UserDeleteInput = {
  createdBlogs?: Maybe<Array<UserCreatedBlogsDeleteFieldInput>>;
  authorsBlogs?: Maybe<Array<UserAuthorsBlogsDeleteFieldInput>>;
};

export type UserDisconnectFieldInput = {
  where?: Maybe<UserWhere>;
  disconnect?: Maybe<UserDisconnectInput>;
};

export type UserDisconnectInput = {
  createdBlogs?: Maybe<Array<BlogDisconnectFieldInput>>;
  authorsBlogs?: Maybe<Array<BlogDisconnectFieldInput>>;
};

export type UserOptions = {
  /** Specify one or more UserSort objects to sort Users by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: Maybe<Array<Maybe<UserSort>>>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type UserRelationInput = {
  createdBlogs?: Maybe<Array<BlogCreateInput>>;
  authorsBlogs?: Maybe<Array<BlogCreateInput>>;
};

/** Fields to sort Users by. The order in which sorts are applied is not guaranteed when specifying many fields in one UserSort object. */
export type UserSort = {
  id?: Maybe<SortDirection>;
  email?: Maybe<SortDirection>;
  createdAt?: Maybe<SortDirection>;
  updatedAt?: Maybe<SortDirection>;
};

export type UserUpdateInput = {
  email?: Maybe<Scalars['String']>;
  createdBlogs?: Maybe<Array<UserCreatedBlogsUpdateFieldInput>>;
  authorsBlogs?: Maybe<Array<UserAuthorsBlogsUpdateFieldInput>>;
};

export type UserWhere = {
  OR?: Maybe<Array<UserWhere>>;
  AND?: Maybe<Array<UserWhere>>;
  id?: Maybe<Scalars['ID']>;
  id_NOT?: Maybe<Scalars['ID']>;
  id_IN?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id_NOT_IN?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id_CONTAINS?: Maybe<Scalars['ID']>;
  id_NOT_CONTAINS?: Maybe<Scalars['ID']>;
  id_STARTS_WITH?: Maybe<Scalars['ID']>;
  id_NOT_STARTS_WITH?: Maybe<Scalars['ID']>;
  id_ENDS_WITH?: Maybe<Scalars['ID']>;
  id_NOT_ENDS_WITH?: Maybe<Scalars['ID']>;
  email?: Maybe<Scalars['String']>;
  email_NOT?: Maybe<Scalars['String']>;
  email_IN?: Maybe<Array<Maybe<Scalars['String']>>>;
  email_NOT_IN?: Maybe<Array<Maybe<Scalars['String']>>>;
  email_CONTAINS?: Maybe<Scalars['String']>;
  email_NOT_CONTAINS?: Maybe<Scalars['String']>;
  email_STARTS_WITH?: Maybe<Scalars['String']>;
  email_NOT_STARTS_WITH?: Maybe<Scalars['String']>;
  email_ENDS_WITH?: Maybe<Scalars['String']>;
  email_NOT_ENDS_WITH?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_NOT?: Maybe<Scalars['DateTime']>;
  createdAt_IN?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  createdAt_NOT_IN?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  createdAt_LT?: Maybe<Scalars['DateTime']>;
  createdAt_LTE?: Maybe<Scalars['DateTime']>;
  createdAt_GT?: Maybe<Scalars['DateTime']>;
  createdAt_GTE?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_NOT?: Maybe<Scalars['DateTime']>;
  updatedAt_IN?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  updatedAt_NOT_IN?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  updatedAt_LT?: Maybe<Scalars['DateTime']>;
  updatedAt_LTE?: Maybe<Scalars['DateTime']>;
  updatedAt_GT?: Maybe<Scalars['DateTime']>;
  updatedAt_GTE?: Maybe<Scalars['DateTime']>;
  createdBlogs?: Maybe<BlogWhere>;
  createdBlogs_NOT?: Maybe<BlogWhere>;
  authorsBlogs?: Maybe<BlogWhere>;
  authorsBlogs_NOT?: Maybe<BlogWhere>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Blog: ResolverTypeWrapper<Blog>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  BlogAuthorsDeleteFieldInput: BlogAuthorsDeleteFieldInput;
  BlogAuthorsFieldInput: BlogAuthorsFieldInput;
  BlogAuthorsUpdateFieldInput: BlogAuthorsUpdateFieldInput;
  BlogConnectFieldInput: BlogConnectFieldInput;
  BlogConnectInput: BlogConnectInput;
  BlogCreateInput: BlogCreateInput;
  BlogCreatorDeleteFieldInput: BlogCreatorDeleteFieldInput;
  BlogCreatorFieldInput: BlogCreatorFieldInput;
  BlogCreatorUpdateFieldInput: BlogCreatorUpdateFieldInput;
  BlogDeleteFieldInput: BlogDeleteFieldInput;
  BlogDeleteInput: BlogDeleteInput;
  BlogDisconnectFieldInput: BlogDisconnectFieldInput;
  BlogDisconnectInput: BlogDisconnectInput;
  BlogOptions: BlogOptions;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  BlogPostsDeleteFieldInput: BlogPostsDeleteFieldInput;
  BlogPostsFieldInput: BlogPostsFieldInput;
  BlogPostsUpdateFieldInput: BlogPostsUpdateFieldInput;
  BlogRelationInput: BlogRelationInput;
  BlogSort: BlogSort;
  BlogUpdateInput: BlogUpdateInput;
  BlogWhere: BlogWhere;
  Comment: ResolverTypeWrapper<Comment>;
  CommentAuthorDeleteFieldInput: CommentAuthorDeleteFieldInput;
  CommentAuthorFieldInput: CommentAuthorFieldInput;
  CommentAuthorUpdateFieldInput: CommentAuthorUpdateFieldInput;
  CommentConnectFieldInput: CommentConnectFieldInput;
  CommentConnectInput: CommentConnectInput;
  CommentCreateInput: CommentCreateInput;
  CommentDeleteFieldInput: CommentDeleteFieldInput;
  CommentDeleteInput: CommentDeleteInput;
  CommentDisconnectFieldInput: CommentDisconnectFieldInput;
  CommentDisconnectInput: CommentDisconnectInput;
  CommentOptions: CommentOptions;
  CommentPostDeleteFieldInput: CommentPostDeleteFieldInput;
  CommentPostFieldInput: CommentPostFieldInput;
  CommentPostUpdateFieldInput: CommentPostUpdateFieldInput;
  CommentRelationInput: CommentRelationInput;
  CommentSort: CommentSort;
  CommentUpdateInput: CommentUpdateInput;
  CommentWhere: CommentWhere;
  CreateBlogsMutationResponse: ResolverTypeWrapper<CreateBlogsMutationResponse>;
  CreateCommentsMutationResponse: ResolverTypeWrapper<CreateCommentsMutationResponse>;
  CreatePostsMutationResponse: ResolverTypeWrapper<CreatePostsMutationResponse>;
  CreateUsersMutationResponse: ResolverTypeWrapper<CreateUsersMutationResponse>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  DeleteInfo: ResolverTypeWrapper<DeleteInfo>;
  Mutation: ResolverTypeWrapper<{}>;
  Post: ResolverTypeWrapper<Post>;
  PostAuthorDeleteFieldInput: PostAuthorDeleteFieldInput;
  PostAuthorFieldInput: PostAuthorFieldInput;
  PostAuthorUpdateFieldInput: PostAuthorUpdateFieldInput;
  PostBlogDeleteFieldInput: PostBlogDeleteFieldInput;
  PostBlogFieldInput: PostBlogFieldInput;
  PostBlogUpdateFieldInput: PostBlogUpdateFieldInput;
  PostCommentsDeleteFieldInput: PostCommentsDeleteFieldInput;
  PostCommentsFieldInput: PostCommentsFieldInput;
  PostCommentsUpdateFieldInput: PostCommentsUpdateFieldInput;
  PostConnectFieldInput: PostConnectFieldInput;
  PostConnectInput: PostConnectInput;
  PostCreateInput: PostCreateInput;
  PostDeleteFieldInput: PostDeleteFieldInput;
  PostDeleteInput: PostDeleteInput;
  PostDisconnectFieldInput: PostDisconnectFieldInput;
  PostDisconnectInput: PostDisconnectInput;
  PostOptions: PostOptions;
  PostRelationInput: PostRelationInput;
  PostSort: PostSort;
  PostUpdateInput: PostUpdateInput;
  PostWhere: PostWhere;
  Query: ResolverTypeWrapper<{}>;
  SortDirection: SortDirection;
  UpdateBlogsMutationResponse: ResolverTypeWrapper<UpdateBlogsMutationResponse>;
  UpdateCommentsMutationResponse: ResolverTypeWrapper<UpdateCommentsMutationResponse>;
  UpdatePostsMutationResponse: ResolverTypeWrapper<UpdatePostsMutationResponse>;
  UpdateUsersMutationResponse: ResolverTypeWrapper<UpdateUsersMutationResponse>;
  User: ResolverTypeWrapper<User>;
  UserAuthorsBlogsDeleteFieldInput: UserAuthorsBlogsDeleteFieldInput;
  UserAuthorsBlogsFieldInput: UserAuthorsBlogsFieldInput;
  UserAuthorsBlogsUpdateFieldInput: UserAuthorsBlogsUpdateFieldInput;
  UserConnectFieldInput: UserConnectFieldInput;
  UserConnectInput: UserConnectInput;
  UserCreateInput: UserCreateInput;
  UserCreatedBlogsDeleteFieldInput: UserCreatedBlogsDeleteFieldInput;
  UserCreatedBlogsFieldInput: UserCreatedBlogsFieldInput;
  UserCreatedBlogsUpdateFieldInput: UserCreatedBlogsUpdateFieldInput;
  UserDeleteFieldInput: UserDeleteFieldInput;
  UserDeleteInput: UserDeleteInput;
  UserDisconnectFieldInput: UserDisconnectFieldInput;
  UserDisconnectInput: UserDisconnectInput;
  UserOptions: UserOptions;
  UserRelationInput: UserRelationInput;
  UserSort: UserSort;
  UserUpdateInput: UserUpdateInput;
  UserWhere: UserWhere;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Blog: Blog;
  ID: Scalars['ID'];
  String: Scalars['String'];
  Boolean: Scalars['Boolean'];
  BlogAuthorsDeleteFieldInput: BlogAuthorsDeleteFieldInput;
  BlogAuthorsFieldInput: BlogAuthorsFieldInput;
  BlogAuthorsUpdateFieldInput: BlogAuthorsUpdateFieldInput;
  BlogConnectFieldInput: BlogConnectFieldInput;
  BlogConnectInput: BlogConnectInput;
  BlogCreateInput: BlogCreateInput;
  BlogCreatorDeleteFieldInput: BlogCreatorDeleteFieldInput;
  BlogCreatorFieldInput: BlogCreatorFieldInput;
  BlogCreatorUpdateFieldInput: BlogCreatorUpdateFieldInput;
  BlogDeleteFieldInput: BlogDeleteFieldInput;
  BlogDeleteInput: BlogDeleteInput;
  BlogDisconnectFieldInput: BlogDisconnectFieldInput;
  BlogDisconnectInput: BlogDisconnectInput;
  BlogOptions: BlogOptions;
  Int: Scalars['Int'];
  BlogPostsDeleteFieldInput: BlogPostsDeleteFieldInput;
  BlogPostsFieldInput: BlogPostsFieldInput;
  BlogPostsUpdateFieldInput: BlogPostsUpdateFieldInput;
  BlogRelationInput: BlogRelationInput;
  BlogSort: BlogSort;
  BlogUpdateInput: BlogUpdateInput;
  BlogWhere: BlogWhere;
  Comment: Comment;
  CommentAuthorDeleteFieldInput: CommentAuthorDeleteFieldInput;
  CommentAuthorFieldInput: CommentAuthorFieldInput;
  CommentAuthorUpdateFieldInput: CommentAuthorUpdateFieldInput;
  CommentConnectFieldInput: CommentConnectFieldInput;
  CommentConnectInput: CommentConnectInput;
  CommentCreateInput: CommentCreateInput;
  CommentDeleteFieldInput: CommentDeleteFieldInput;
  CommentDeleteInput: CommentDeleteInput;
  CommentDisconnectFieldInput: CommentDisconnectFieldInput;
  CommentDisconnectInput: CommentDisconnectInput;
  CommentOptions: CommentOptions;
  CommentPostDeleteFieldInput: CommentPostDeleteFieldInput;
  CommentPostFieldInput: CommentPostFieldInput;
  CommentPostUpdateFieldInput: CommentPostUpdateFieldInput;
  CommentRelationInput: CommentRelationInput;
  CommentSort: CommentSort;
  CommentUpdateInput: CommentUpdateInput;
  CommentWhere: CommentWhere;
  CreateBlogsMutationResponse: CreateBlogsMutationResponse;
  CreateCommentsMutationResponse: CreateCommentsMutationResponse;
  CreatePostsMutationResponse: CreatePostsMutationResponse;
  CreateUsersMutationResponse: CreateUsersMutationResponse;
  DateTime: Scalars['DateTime'];
  DeleteInfo: DeleteInfo;
  Mutation: {};
  Post: Post;
  PostAuthorDeleteFieldInput: PostAuthorDeleteFieldInput;
  PostAuthorFieldInput: PostAuthorFieldInput;
  PostAuthorUpdateFieldInput: PostAuthorUpdateFieldInput;
  PostBlogDeleteFieldInput: PostBlogDeleteFieldInput;
  PostBlogFieldInput: PostBlogFieldInput;
  PostBlogUpdateFieldInput: PostBlogUpdateFieldInput;
  PostCommentsDeleteFieldInput: PostCommentsDeleteFieldInput;
  PostCommentsFieldInput: PostCommentsFieldInput;
  PostCommentsUpdateFieldInput: PostCommentsUpdateFieldInput;
  PostConnectFieldInput: PostConnectFieldInput;
  PostConnectInput: PostConnectInput;
  PostCreateInput: PostCreateInput;
  PostDeleteFieldInput: PostDeleteFieldInput;
  PostDeleteInput: PostDeleteInput;
  PostDisconnectFieldInput: PostDisconnectFieldInput;
  PostDisconnectInput: PostDisconnectInput;
  PostOptions: PostOptions;
  PostRelationInput: PostRelationInput;
  PostSort: PostSort;
  PostUpdateInput: PostUpdateInput;
  PostWhere: PostWhere;
  Query: {};
  UpdateBlogsMutationResponse: UpdateBlogsMutationResponse;
  UpdateCommentsMutationResponse: UpdateCommentsMutationResponse;
  UpdatePostsMutationResponse: UpdatePostsMutationResponse;
  UpdateUsersMutationResponse: UpdateUsersMutationResponse;
  User: User;
  UserAuthorsBlogsDeleteFieldInput: UserAuthorsBlogsDeleteFieldInput;
  UserAuthorsBlogsFieldInput: UserAuthorsBlogsFieldInput;
  UserAuthorsBlogsUpdateFieldInput: UserAuthorsBlogsUpdateFieldInput;
  UserConnectFieldInput: UserConnectFieldInput;
  UserConnectInput: UserConnectInput;
  UserCreateInput: UserCreateInput;
  UserCreatedBlogsDeleteFieldInput: UserCreatedBlogsDeleteFieldInput;
  UserCreatedBlogsFieldInput: UserCreatedBlogsFieldInput;
  UserCreatedBlogsUpdateFieldInput: UserCreatedBlogsUpdateFieldInput;
  UserDeleteFieldInput: UserDeleteFieldInput;
  UserDeleteInput: UserDeleteInput;
  UserDisconnectFieldInput: UserDisconnectFieldInput;
  UserDisconnectInput: UserDisconnectInput;
  UserOptions: UserOptions;
  UserRelationInput: UserRelationInput;
  UserSort: UserSort;
  UserUpdateInput: UserUpdateInput;
  UserWhere: UserWhere;
};

export type BlogResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Blog'] = ResolversParentTypes['Blog']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  isCreator?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isAuthor?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  creator?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<BlogCreatorArgs, never>>;
  authors?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType, RequireFields<BlogAuthorsArgs, never>>;
  posts?: Resolver<Array<ResolversTypes['Post']>, ParentType, ContextType, RequireFields<BlogPostsArgs, never>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CommentResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Comment'] = ResolversParentTypes['Comment']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  canDelete?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  author?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<CommentAuthorArgs, never>>;
  post?: Resolver<Maybe<ResolversTypes['Post']>, ParentType, ContextType, RequireFields<CommentPostArgs, never>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateBlogsMutationResponseResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['CreateBlogsMutationResponse'] = ResolversParentTypes['CreateBlogsMutationResponse']> = {
  blogs?: Resolver<Array<ResolversTypes['Blog']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateCommentsMutationResponseResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['CreateCommentsMutationResponse'] = ResolversParentTypes['CreateCommentsMutationResponse']> = {
  comments?: Resolver<Array<ResolversTypes['Comment']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreatePostsMutationResponseResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['CreatePostsMutationResponse'] = ResolversParentTypes['CreatePostsMutationResponse']> = {
  posts?: Resolver<Array<ResolversTypes['Post']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateUsersMutationResponseResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['CreateUsersMutationResponse'] = ResolversParentTypes['CreateUsersMutationResponse']> = {
  users?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type DeleteInfoResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['DeleteInfo'] = ResolversParentTypes['DeleteInfo']> = {
  nodesDeleted?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  relationshipsDeleted?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createBlogs?: Resolver<ResolversTypes['CreateBlogsMutationResponse'], ParentType, ContextType, RequireFields<MutationCreateBlogsArgs, 'input'>>;
  deleteBlogs?: Resolver<ResolversTypes['DeleteInfo'], ParentType, ContextType, RequireFields<MutationDeleteBlogsArgs, never>>;
  updateBlogs?: Resolver<ResolversTypes['UpdateBlogsMutationResponse'], ParentType, ContextType, RequireFields<MutationUpdateBlogsArgs, never>>;
  createComments?: Resolver<ResolversTypes['CreateCommentsMutationResponse'], ParentType, ContextType, RequireFields<MutationCreateCommentsArgs, 'input'>>;
  deleteComments?: Resolver<ResolversTypes['DeleteInfo'], ParentType, ContextType, RequireFields<MutationDeleteCommentsArgs, never>>;
  updateComments?: Resolver<ResolversTypes['UpdateCommentsMutationResponse'], ParentType, ContextType, RequireFields<MutationUpdateCommentsArgs, never>>;
  createPosts?: Resolver<ResolversTypes['CreatePostsMutationResponse'], ParentType, ContextType, RequireFields<MutationCreatePostsArgs, 'input'>>;
  deletePosts?: Resolver<ResolversTypes['DeleteInfo'], ParentType, ContextType, RequireFields<MutationDeletePostsArgs, never>>;
  updatePosts?: Resolver<ResolversTypes['UpdatePostsMutationResponse'], ParentType, ContextType, RequireFields<MutationUpdatePostsArgs, never>>;
  createUsers?: Resolver<ResolversTypes['CreateUsersMutationResponse'], ParentType, ContextType, RequireFields<MutationCreateUsersArgs, 'input'>>;
  deleteUsers?: Resolver<ResolversTypes['DeleteInfo'], ParentType, ContextType, RequireFields<MutationDeleteUsersArgs, never>>;
  updateUsers?: Resolver<ResolversTypes['UpdateUsersMutationResponse'], ParentType, ContextType, RequireFields<MutationUpdateUsersArgs, never>>;
  signUp?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<MutationSignUpArgs, 'email' | 'password'>>;
  signIn?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<MutationSignInArgs, 'email' | 'password'>>;
};

export type PostResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Post'] = ResolversParentTypes['Post']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  canEdit?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  canDelete?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  blog?: Resolver<ResolversTypes['Blog'], ParentType, ContextType, RequireFields<PostBlogArgs, never>>;
  comments?: Resolver<Array<ResolversTypes['Comment']>, ParentType, ContextType, RequireFields<PostCommentsArgs, never>>;
  author?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<PostAuthorArgs, never>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  blogs?: Resolver<Array<ResolversTypes['Blog']>, ParentType, ContextType, RequireFields<QueryBlogsArgs, never>>;
  comments?: Resolver<Array<ResolversTypes['Comment']>, ParentType, ContextType, RequireFields<QueryCommentsArgs, never>>;
  posts?: Resolver<Array<ResolversTypes['Post']>, ParentType, ContextType, RequireFields<QueryPostsArgs, never>>;
  users?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryUsersArgs, never>>;
};

export type UpdateBlogsMutationResponseResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['UpdateBlogsMutationResponse'] = ResolversParentTypes['UpdateBlogsMutationResponse']> = {
  blogs?: Resolver<Array<ResolversTypes['Blog']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateCommentsMutationResponseResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['UpdateCommentsMutationResponse'] = ResolversParentTypes['UpdateCommentsMutationResponse']> = {
  comments?: Resolver<Array<ResolversTypes['Comment']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdatePostsMutationResponseResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['UpdatePostsMutationResponse'] = ResolversParentTypes['UpdatePostsMutationResponse']> = {
  posts?: Resolver<Array<ResolversTypes['Post']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateUsersMutationResponseResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['UpdateUsersMutationResponse'] = ResolversParentTypes['UpdateUsersMutationResponse']> = {
  users?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  createdBlogs?: Resolver<Array<ResolversTypes['Blog']>, ParentType, ContextType, RequireFields<UserCreatedBlogsArgs, never>>;
  authorsBlogs?: Resolver<Array<ResolversTypes['Blog']>, ParentType, ContextType, RequireFields<UserAuthorsBlogsArgs, never>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = GraphQLContext> = {
  Blog?: BlogResolvers<ContextType>;
  Comment?: CommentResolvers<ContextType>;
  CreateBlogsMutationResponse?: CreateBlogsMutationResponseResolvers<ContextType>;
  CreateCommentsMutationResponse?: CreateCommentsMutationResponseResolvers<ContextType>;
  CreatePostsMutationResponse?: CreatePostsMutationResponseResolvers<ContextType>;
  CreateUsersMutationResponse?: CreateUsersMutationResponseResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  DeleteInfo?: DeleteInfoResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Post?: PostResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  UpdateBlogsMutationResponse?: UpdateBlogsMutationResponseResolvers<ContextType>;
  UpdateCommentsMutationResponse?: UpdateCommentsMutationResponseResolvers<ContextType>;
  UpdatePostsMutationResponse?: UpdatePostsMutationResponseResolvers<ContextType>;
  UpdateUsersMutationResponse?: UpdateUsersMutationResponseResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = GraphQLContext> = Resolvers<ContextType>;
