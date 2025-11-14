import { colorData } from "@/data/colorData";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

export function ColorsGrid() {
  const [showAll, setShowAll] = useState(false);

  // Organisation : A→D, ligne par ligne
  const sortedColors = (() => {
    const cols = { A: [], B: [], C: [], D: [] };
    colorData.forEach(c => {
      const col = c.id[0] as "A" | "B" | "C" | "D";
      cols[col].push(c);
    });
    const maxLength = Math.max(cols.A.length, cols.B.length, cols.C.length, cols.D.length);
    const result: typeof colorData = [];
    for (let i = 0; i < maxLength; i++) {
      if (cols.A[i]) result.push(cols.A[i]);
      if (cols.B[i]) result.push(cols.B[i]);
      if (cols.C[i]) result.push(cols.C[i]);
      if (cols.D[i]) result.push(cols.D[i]);
    }
    return result;
  })();

  const colorsToShow = showAll ? sortedColors : sortedColors.slice(0, 8);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {colorsToShow.map(color => (
          <Card
            key={color.id}
            className="overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer group hover:-translate-y-2 animate-fade-in"
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

      {sortedColors.length > 8 && (
        <div className="text-center mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-8 py-3 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-lg hover:shadow-lg transition-all hover:scale-105"
          >
            {showAll ? "Voir moins" : `Voir plus (${sortedColors.length - 8} autres nuances)`}
          </button>
        </div>
      )}
    </>
  );
}
