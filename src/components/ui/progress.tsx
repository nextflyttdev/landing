import { useMemo } from "react";

export function Progress({
  current,
  total,
}: {
  current: number;
  total: number;
}) {
  const progress = useMemo(() => {
    if (total === 0) return 0;
    return Math.round((current / total) * 100);
  }, [current, total]);

  return (
    <div className="w-full relative h-3 bg-primary bg-opacity-10 rounded-xl">
      <div
        className="absolute h-3 top-0 left-0 bg-primary rounded-xl"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
}