export const keyframeDescription = {
  keyframe1: {
    head: "@Keyframe",
    description:
      "Keyframe is a CSS property that allows you to create your own animation. It is a collection of CSS style properties that define the animation sequence.",
    points: [
      "We need to specify the name of the keyframe.",
      "We need to specify the percentage of the animation.",
      "We can specify the CSS properties we want to animate.",
      "@keyframes name {\n0% {\nCSS properties\n}\n100% {\nCSS properties\n}\n}",
    ],
  },
  keyframe2: {
    head: "Mixed with animation delay",
    description:
      "We can use animation delay to delay the animation. We can use multiple keyframes to create a complex animation.",
    points: [],
  },
  limitations: {
    head: "Limitations",
    description:
      "Keyframe is a very powerful way to create animation. But it has some limitations.",
    points: [
      "Keyframe animations lack direct user interaction like pausing, rewinding, or scrubbing through the animation.",
      "Once defined, keyframe animations cannot be modified or altered dynamically based on user actions or events.",
      "Multiple keyframe animations running simultaneously can sometimes conflict with each other, leading to unexpected results.",
      "Maintaining keyframe animations can be difficult, especially if you want to change the timing or duration of the animation."
    ],
  },
};
