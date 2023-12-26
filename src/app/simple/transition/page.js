"use client";

import { dracula as theme } from "react-code-blocks";
import transitionCode from "@/data/code/simple/transition.json";
import transitionCode2 from "@/data/code/simple/transition-2.json";
import transitionExampleCode from "@/data/code/simple/transition-example.json";
import CustomCodeBlock from "@/components/common/custom-code-block/custom-code-block";
import Description from "@/components/common/description/description";
import { TransitionDescription } from "@/data/description/simple/transition";
import AnimationContainer from "@/components/common/animation-container/animation-container";
import Transition from "@/components/simple/transition/transition";
import TransitionCus from "@/components/simple/transition/transition-cus";
import ButtonTransition from "@/components/simple/transition/button/button-transition";
import Spacer from "@/components/common/spacer/spacer";
import ButtonTransition3d from "@/components/simple/transition/button/button-transition-3d";

export default function Complex() {
  const { transition1, transition2, example1, limitations } =
    TransitionDescription;
  return (
    <>
      <Spacer width="100%" height="10vh" />
      <Description
        header={transition1.header}
        description={transition1.description}
        points={transition1.points}
      />
      <CustomCodeBlock
        code={{ left: transitionCode.jsx, right: transitionCode.css }}
        titles={{ left: "REACT", right: "CSS" }}
        customThemes={[theme, theme]}
      />
      <AnimationContainer>
        <Transition />
      </AnimationContainer>
      <Spacer width="100%" height="40vh" />
      <Description
        header={transition2.head}
        description={transition2.description}
        points={transition2.points}
      />
      <CustomCodeBlock
        code={{ left: transitionCode2.jsx, right: transitionCode2.css }}
        titles={{ left: "REACT", right: "CSS" }}
        customThemes={[theme, theme]}
      />
      <AnimationContainer>
        <TransitionCus />
      </AnimationContainer>
      <Spacer width="100%" height="40vh" />
      <Description
        header={example1.head}
        description={example1.description}
        points={example1.points}
      />
      <CustomCodeBlock
        code={{
          left: transitionExampleCode.jsx,
          right: transitionExampleCode.css,
        }}
        titles={{ left: "REACT", right: "CSS" }}
        customThemes={[theme, theme]}
      />
      <AnimationContainer>
        <ButtonTransition />
        <ButtonTransition3d text="3D" />
      </AnimationContainer>
      <Spacer width="100%" height="40vh" />
      <Description
        header={limitations.head}
        description={limitations.description}
        points={limitations.points}
      />
      <Spacer width="100%" height="40vh" />
    </>
  );
}
