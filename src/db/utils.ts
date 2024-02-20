import { Lead } from "./models/Lead";
import { CRUDResponse } from "../lib/types";

export const mapSlugToSchema: { [key: string]: any } = {
  lead: Lead,
};

export async function GenriceCRUD(req: any): Promise<CRUDResponse> {
  const modelName: string = req.params.modelName;
  const action: string = req.body.action; // 'create', 'read', 'update', 'delete'
  const payload: any = req.body.payload;
  const startIndex: number = req.body.startIndex || 0;
  const limit: number = req.body.limit || 10;

  try {
    const Model: any = mapSlugToSchema[modelName];

    if (!Model) {
      return {
        success: false,
        status: 404,
        message: "Model Not found",
      };
    }

    switch (action) {
      case "create":
        // TODO : add middleware to validate payload
        const newItem: any = new Model(payload);
        await newItem.save();
        return {
          status: 200,
          success: true,
          message: "Item created successfully",
        };

      case "read":
        const items = await Model.find().skip(startIndex).limit(limit);

        if (!items) {
          return {
            status: 500,
            success: false,
            message: "Error occurred while fetching items",
          };
        }
        return { status: 200, success: true, data: items };

      case "update":
        const updatePayload: any = req.body.updatePayload;
        const itemId: string = req.body.itemId;
        const updatedItem: any = await Model.findByIdAndUpdate(
          itemId,
          updatePayload,
          { new: true }
        ).exec();
        if (!updatedItem) {
          return {
            status: 500,
            success: false,
            message: "Error occurred while updating data",
          };
        }
        return {
          success: true,
          message: "Item updated successfully",
          data: updatedItem,
        };

      case "delete":
        if (!payload.id) {
          return {
            status: 404,
            success: false,
            message: "Model not found",
          };
        }

        await Model.findByIdAndDelete({ _id: payload.id }).exec((err: any) => {
          if (err) {
            return {
              status: 500,
              success: false,
              message: "Error occurred while fetching items",
            };
          }
          return {
            status: 200,
            success: true,
            message: "Item deleted successfully",
          };
        });
        break;

      default:
        return { status: 400, success: false, message: "Invalid action" };
    }
  } catch (error) {
    console.log(error);
    return {
      status: 500,
      success: false,
      message: "Internal server error",
    };
  }
  return {
    success: false,
  };
}
