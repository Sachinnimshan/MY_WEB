import React from "react";
import { useResponsive } from "../../../hooks/useResponsive";
import { LibraryContainer, SectionContainer, SectionTitle } from "../../pages.styled";

function Library() {
  const { mobile } = useResponsive();
  return (
    <SectionContainer>
      <SectionTitle mobile={mobile} marginBottom>
        Libraries
      </SectionTitle>
      <LibraryContainer>
          
      </LibraryContainer>
    </SectionContainer>
  );
}

export default Library;
