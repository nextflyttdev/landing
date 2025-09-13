import { type ReactNode } from "react";

export function FormPageHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: ReactNode;
}) {
  return (
    <div className="pt-2 pb-8">
      <p className=" text-title font-bold text-3xl">{title}</p>
      {subtitle && (
        <div className=" mt-2  text-base text-content font-medium">
          {subtitle}
        </div>
      )}
    </div>
  );
}