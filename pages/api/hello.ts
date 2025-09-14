import type { NextApiRequest, NextApiResponse } from "next";
import { PropertyCardProps } from "@/interfaces";
import { propertyData } from "@/data/propertyData";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<PropertyCardProps[]>
) {
  res.status(200).json(propertyData);
}
