import slugify from "slugify";
import { v4 as uuid } from "uuid";
import { prisma } from "../db/db";

function getPosts() {
  return prisma.post.findMany({orderBy: [{createdAt: "desc"}]});
}

function getPost(slug: string) {
  return prisma.post.findFirst({
    where: { slug },
  });
}

function createPost(title: string, content: string, published:boolean=false) {
  return prisma.post.create({
    data: {
      slug: slugify(title.toLowerCase()),
      title,
      content,
      published
    },
  });
}

function editPost(id: string, title: string, content: string, published:boolean=false) {
  return prisma.post.update({
    where: { id },
    data: {
      slug: slugify(title.toLowerCase()),
      title,
      content,
      published
    },
  });
}

function deletePost(id: string) {
  return prisma.post.delete({
    where: { id },
  });
}

export { createPost, editPost, getPosts, getPost, deletePost };