"use client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import PropertyDetail from "@/components/property/PropertyDetail";

export default function PropertyDetailPage() {
  const router = useRouter();
  const { id } = router.query;
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    fetch(`/api/properties/${id}`)
      .then((res) => res.json())
      .then((data) => setProperty(data))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!property) return <p>Property not found</p>;

  return <PropertyDetail property={property} />;
}
