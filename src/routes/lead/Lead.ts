import { Router } from "express";
import { Lead } from "../../db/models/Lead";

const leadRouter = Router();

leadRouter.get("getByID/:leadID", async (req, res) => {
  const { leadID } = req.params;
  if (!leadID || leadID.length) {
    return res.status(404).json({
      success: false,
      message: "This lead does not exist. kindly re-check the lead Id.",
    });
  }

  try {
    const lead = await Lead.findById(leadID);
    if (!lead) {
      return res.status(404).json({
        success: false,
        message: "This lead does not exist. kindly re-check the lead Id.",
      });
    }

    // sending ok
    res.status(200).json({
      success: false,
      message: "This lead does not exist. kindly re-check the lead Id.",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal server error.",
    });
  }
});
