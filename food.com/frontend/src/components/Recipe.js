import React, { useEffect } from "react";
import { useParams } from "react-router";

function Recipe() {
  let { recipeSlug } = useParams();

  useEffect(() => {
    // Fetch post using the recipeSlug
  }, [recipeSlug]);

  return (
    <>
    </>
  );
}

export default Recipe;