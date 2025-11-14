import { useState } from "react";
import { colors } from "@/data/colorsData";
import { Card, CardContent } from "@/components/ui/card";

export function ColorsGrid() {
  const [visibleCount, setVisibleCount] = useState(16);

  const loadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 16, colors.length));
  };

  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {colors.slice(0, visibleCount).map((color) => (
          <Card 
            key={color.id} 
            className="overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer group hover:-translate-y-2"
          >
            <div className="aspect-square relative overflow-hidden">
              <img
                src={color.url}
                alt={color.id}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <CardContent className="p-4 text-center">
              <p className="font-bold text-lg">{color.id}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {visibleCount < colors.length && (
        <div className="text-center mt-8">
          <button
            onClick={loadMore}
            className="px-8 py-3 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-lg hover:shadow-lg transition-all hover:scale-105"
          >
            Voir plus ({colors.length - visibleCount} restantes)
          </button>
        </div>
      )}
    </div>
  );
}
