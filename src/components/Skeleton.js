import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function FeaturedItemsSkeleton() {
  return (
    <div style={{ width: "360px", marginBottom: 20 }}>
      <Skeleton
        width={360}
        height={250}
        baseColor="rgb(196, 193, 193)"
        highlightColor="rgb(170, 167, 167)"
        count={1}
        style={{ marginBottom: 20 }}
      />
      <Skeleton
        height={20}
        baseColor="rgb(196, 193, 193)"
        highlightColor="rgb(170, 167, 167)"
        count={4}
        style={{ marginTop: 10 }}
      />
    </div>
  );
}

export { FeaturedItemsSkeleton };
