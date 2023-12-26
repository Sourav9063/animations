"use client";
import Stars from "@/components/stars/stars";
import { dracula as theme } from "react-code-blocks";
import starsCode from "@/data/code/stars-code.json";
import CustomCodeBlock from "@/components/common/custom-code-block/custom-code-block";
import SBHCode from "@/data/code/complex/sbh-code.json";
import Description from "@/components/common/description/description";
import { ComplexDes } from "@/data/description/complex";
import Spacer from "@/components/common/spacer/spacer";
import AnimationContainer from "@/components/common/animation-container/animation-container";
import SBH from "@/components/complex/svg-animation/svg-animation";

export default function Complex() {
  const { complex1, complex2 } = ComplexDes;
  return (
    <>
      <Spacer width="100%" height="10vh" />
      <Description
        header={complex1.header}
        description={complex1.description}
        points={complex1.points}
      />
      <CustomCodeBlock
        code={{ left: starsCode.jsx, right: starsCode.css }}
        titles={{ left: "REACT", right: "CSS" }}
        customThemes={[theme, theme]}
      />
      <Stars />
      <Spacer width="100%" height="40vh" />
      <Description header={complex2.head} points={[]} />
      <AnimationContainer showBg={false} style={{ background: "black" }}>
        <SBH />
      </AnimationContainer>
      <Description
        description={complex2.description}
        points={complex2.points}
      />
      <CustomCodeBlock
        code={{ left: SBHCode.jsx, right: SBHCode.css }}
        titles={{ left: "REACT", right: "CSS" }}
        customThemes={[theme, theme]}
      />
    </>
  );
}
