import type { FC } from "react";
import React from "react";

type Props = {
  rating: number;
  size?: string;
  totalStars?: number;
  color?: string;
};

const Stars: FC<Props> = ({
  rating,
  size = "1.563rem",
  totalStars = 5,
  color = "#FFFFFF",
}) => {
  const stars: React.SVGProps<SVGSVGElement>[] = [];

  function RenderStar(star: number) {
    const fillPercentage = star * 100;

    return (
      <svg
        key={stars.length}
        width={size}
        height={size}
        viewBox={`0 0 25 25`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id={`filling--${fillPercentage}`}>
            <stop offset={fillPercentage + "%"} stopColor={color} />
            <stop offset="0" stopColor="transparent" />
          </linearGradient>
        </defs>
        <path
          d="m12.667.4 3.77 7.957L25 9.567l-6.233 6.128L20.29 24.4l-7.622-4.171-7.623 4.17 1.522-8.704L.333 9.567l8.564-1.21L12.667.4Z"
          fill={`url(#filling--${fillPercentage})`}
        />
      </svg>
    );
  }

  function RenderRating(rating: number) {
    // IF THE RATING IS NOT A WHOLE NUMBER, GET FRACTION
    const fraction = rating % 1;
    const emptyStars = totalStars - rating;

    // RENDER FULL STARS
    for (let index = 1; index <= rating; index++) {
      stars.push(RenderStar(1));
    }

    // RENDER FRACTION STARS
    if (fraction !== 0) stars.push(RenderStar(fraction));

    // RENDER EMPTY STARS
    for (let index = 1; index <= emptyStars; index++) {
      stars.push(RenderStar(0));
    }

    return stars;
  }

  return <>{RenderRating(rating)}</>;
};

export default Stars;
