import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const slug = req.query.slug;
  if (req.method === "GET") {
    await delay(3000);
    const comments = JSON.parse(fs.readFileSync("comments.json", "utf-8"));
    const articles = JSON.parse(fs.readFileSync("articles.json", "utf-8"));
    const articleId = articles.articles.find((a: any) => a.slug === slug).id;
    const comment = comments.comments.filter((c: any) => c.articleId === articleId);
    res.status(200).json(comment);
  }
};

export default handler;
