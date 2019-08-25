import * as React from "react";
import "./Rating.scss";

export interface IRatingProps {
  rating: number;
  total: number;
}

export default function Rating({ rating, total }: IRatingProps) {
  return (
    <>
      {[...Array(total)].map((n, i) => (
        <span
          key={i}
          className={i < rating ? "fa fa-star checked" : "fa fa-star"}
        />
      ))}
    </>
  );
}
