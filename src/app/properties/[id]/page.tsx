import { notFound } from "next/navigation";
import { PROPERTIES } from "@/data/properties";
import PropertyDetailClient from "./PropertyDetailClient";

export async function generateStaticParams() {
  return PROPERTIES.map((property) => ({
    id: property.id,
  }));
}

export default async function PropertyDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const property = PROPERTIES.find((p) => p.id === id);

  if (!property) {
    notFound();
  }

  // Get related properties in the same category or area
  const relatedProperties = PROPERTIES.filter(
    (p) =>
      p.id !== property.id &&
      (p.area === property.area || p.category === property.category),
  ).slice(0, 3);

  return (
    <PropertyDetailClient
      property={property}
      relatedProperties={relatedProperties}
    />
  );
}
