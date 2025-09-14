import type { NextApiRequest, NextApiResponse } from "next";
import { propertyData } from "@/data/propertyData";
import { PropertyCardProps } from "@/interfaces";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<PropertyCardProps | { message: string }>
) {
  const { id } = req.query;
  const property = propertyData.find(
    (p) => p.id.toString() === id
  );

  if (!property) {
    return res.status(404).json({ message: "Property not found" });
  }

  res.status(200).json(property);
}
