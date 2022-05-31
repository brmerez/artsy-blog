import { Router, Request, Response } from "express";
import * as PostController from "../controllers/PostController";

const postRouter = Router();

postRouter.get(`/`, async (req:Request, res:Response) => {
  try{
    const posts = await PostController.getPosts();
    return res.json(posts);
  }
  catch(err){
    return res.status(500).json({ message: "Error while fetching posts."});
  }
});

postRouter.get(`/:slug`, async (req:Request, res:Response) => {
  const slug = req.params.slug;
  try{
    const post = await PostController.getPost(slug);
    return res.json(post);
  }
  catch(err){
    return res.status(404).json({message: "Post not found"});
  }
});

postRouter.post("/", async (req:Request, res:Response) => {
  const { title, content, published } = req.body;
  try{
    const post = await PostController.createPost(title, content, published);
    return res.json(post);
  }
  catch(err){
    console.log(err);
    return res.status(500).json({ message: "Error while creating post.", error: err });
  }
});

postRouter.put("/:id", async (req:Request, res:Response) => {
  const id = req.params.id;
  const { title, content, published } = req.body;
  try{
    const post = await PostController.editPost(id, title, content, published);
    return res.json(post);
  }
  catch(err){
    return res.status(404).json({ message: "Post not found."});
  }
});

postRouter.delete("/:id", async (req:Request, res:Response) => {
  const id = req.params.id;
  try{
    const post = await PostController.deletePost(id);
    return res.json(post);
  }
  catch(err){
    return res.status(500).send({ message: "Error while deleting post."});
  }
})

export default postRouter;