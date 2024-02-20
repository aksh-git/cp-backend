import { Router, Request, Response } from "express";
import { GenriceCRUD, mapSlugToSchema } from "../../db/utils";

const operationRouter: Router = Router();

operationRouter.post("/:modelName", async (req, res) => {
  const modelName: string = req.params.modelName;
  // const action: string = req.body.action; // 'create', 'read', 'update', 'delete'
  // const payload: any = req.body.payload;
  // const startIndex: number = req.body.startIndex || 0;
  // const limit: number = req.body.limit || 10;

  try {
    const Model: any = mapSlugToSchema[modelName];

    if (!Model) {
      return res
        .status(404)
        .json({ success: false, message: "Model not found" });
    }

    const data = await GenriceCRUD(req);
    if (data?.status) {
      return res.status(data.status).json({
        success: data.success,
        messsage: data.message || "",
        data: data.data || {},
      });
    }

    return res.json({
      success: data.success,
      messsage: data.message || "",
      data: data.data || {},
    });
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

export default operationRouter;
