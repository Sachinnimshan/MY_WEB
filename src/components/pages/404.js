import React from "react";
import { NotFoundBanner, NotFoundContainer } from "../pages.styled";

function NotFound() {
  return (
    <NotFoundContainer>
      <NotFoundBanner src="/Images/404.png" alt="404 Not Found" />
    </NotFoundContainer>
  );
}

export default NotFound;
