import { Router } from "express";
import { mapSlugToView } from "./lib";

const viewRouter = Router();

viewRouter.get("/:slug", async (req, res) => {
  const { slug } = req.params;
  if (!slug || !Object.keys(mapSlugToView).includes(slug)) {
    return res.send({
      message: "We support these views",
      views: Object.keys(mapSlugToView),
    });
  }
  return res.status(200).json(mapSlugToView[slug]);
});

export default viewRouter;
