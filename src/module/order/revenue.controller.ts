import { Request, Response } from "express";
import Order from "./order.model";

// Calculate total revenue
 const calculateRevenue = async (req: Request, res: Response): Promise<any> => {
  try {
    const revenue = await Order.aggregate([
      {
        $group: {
          _id: null,
          totalRevenue: { $sum: "$totalPrice" },
        },
      },
    ]);

    const totalRevenue = revenue[0]?.totalRevenue || 0;

    return res.status(200).json({
      message: "Revenue calculated successfully",
      status: true,
      data: { totalRevenue },
    });
  } catch (error: any) {
    return res.status(500).json({
      message: "Internal server error",
      status: false,
      error: error.message,
    });
  }
};
export default calculateRevenue;