import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const slug = req.query.slug;
  const articles = JSON.parse(fs.readFileSync("articles.json", "utf-8"));
  const article = articles.articles.find((a: any) => a.slug === slug);
  if (!article) {
    res.status(404).end();
  } else if (req.method === "GET") {
    await delay(1000);
    res.status(200).json(article);
  } else if (req.method === "PUT") {
    await delay(1000);
    const { title, content } = req.body;
    article.title = title;
    article.content = content;
    article.updatedAt = new Date();
    fs.writeFileSync("articles.json", JSON.stringify(articles));
    res.status(200).json(article);
  }
};

export default handler;
