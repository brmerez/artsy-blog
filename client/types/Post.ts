export interface Post{
  _id: string,
  title: string,
  content: string,
  slug: string,
  published: boolean,
  createdAt: Date,
  updatedAt: Date
}