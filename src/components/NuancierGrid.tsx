import React from "react";
import { produits } from "../data";

interface NuancierGridProps {
  produitId: string;
}

const NuancierGrid: React.FC<NuancierGridProps> = ({ produitId }) => {
  const produit = produits.find((p) => p.id === produitId);

  if (!produit) return <p>Produit introuvable</p>;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4">
      {produit.nuancier.map((item) => (
        <div
          key={item.ref}
          className="relative overflow-hidden rounded-lg shadow-md group"
        >
          <img
            src={item.url}
            alt={item.ref}
            className="w-full h-32 sm:h-36 object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 flex items-center justify-center transition duration-300">
            <span className="text-white font-semibold text-sm opacity-0 group-hover:opacity-100">
              {item.ref}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NuancierGrid;
