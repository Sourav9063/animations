"use client";

import { dracula as theme } from "react-code-blocks";
import keyframeCode from "@/data/code/simple/keyframe.json";
import keyframeArrowCode from "@/data/code/simple/keyframe-arrow.json";
import transitionExampleCode from "@/data/code/simple/transition-example.json";
import CustomCodeBlock from "@/components/common/custom-code-block/custom-code-block";
import Description from "@/components/common/description/description";
import AnimationContainer from "@/components/common/animation-container/animation-container";
import { keyframeDescription } from "@/data/description/simple/keyframe";
import KeyframeBox from "@/components/simple/keyframe/keyframe-box";
import Spacer from "@/components/common/spacer/spacer";
import Arrow from "@/components/simple/keyframe/arrow/arrow";

export default function Keyframe() {
  const { keyframe1, keyframe2, limitations } = keyframeDescription;
  return (
    <>
      <Spacer width="100%" height="10vh" />
      <Description
        header={keyframe1.head}
        description={keyframe1.description}
        points={keyframe1.points}
      />
      <CustomCodeBlock
        code={{ left: keyframeCode.jsx, right: keyframeCode.css }}
        titles={{ left: "REACT", right: "CSS" }}
        customThemes={[theme, theme]}
      />
      <AnimationContainer>
        <KeyframeBox />
      </AnimationContainer>
      <Spacer width="100%" height="40vh" />
      <Description
        header={keyframe2.head}
        description={keyframe2.description}
        points={keyframe2.points}
      />
      <CustomCodeBlock
        code={{ left: keyframeArrowCode.jsx, right: keyframeArrowCode.css }}
        titles={{ left: "REACT", right: "CSS" }}
        customThemes={[theme, theme]}
      />

      <AnimationContainer>
        <Arrow />
      </AnimationContainer>
      <Spacer width="100%" height="40vh" />
      <Description
        header={limitations.head}
        description={limitations.description}
        points={limitations.points}
      />
      <Spacer width="100%" height="40vh" />
      {/* <Spacer width="100%" height="40vh" />
      <Description
        header={simple2.head}
        description={simple2.description}
        points={simple2.points}
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
      <Spacer width="100%" height="40vh" /> */}
    </>
  );
}
