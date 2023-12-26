export const TransitionDescription = {
  transition1: {
    header: "Transition",
    description:
      "CSS transitions are a way to create animations by changing the values of CSS properties over time.",
    points: [
      // steps to use transition
      "We need to specify the property we want to animate.",
      "We need to specify the duration of the animation.",
      "We can specify the timing function of the animation.",
      "We can specify the delay of the animation.",
      "We can specify the number of times the animation should run.",
      //syntax
      "transition: property duration timing-function delay iteration-count;",
    ],
  },
  transition2: {
    head: "Transition super-charged with custom property",
    description:
      "Using custom property we can animate any property. The value of custom property can be changed using javascript. Transition will interpolate the value of custom property and animate the property.",
    points: [
      "Set a custom property with the value you want to animate.",
      "Use javascript to change the value of custom property.",
      "Here we are using react to change the value of custom property.",
    ],
  },
  example1: {
    head: "Example",
    description: "Here is a simple button with hover effect",
    points: [
      "We are using transition to animate the before sudo element.",
      "We are animating it's width, background color and transform properties.",
      "For 3d effect we used 6 blocks and used hover effect on each block.",
      "We are using transition to animate rotation and shadow properties.",
    ],
  },
  limitations: {
    head: "Limitations",
    description:
      "Transition is a very simple but powerful way to animate properties. But it has some limitations.",
    points: [
      "Very limited control over the animation.",
      "Can not animate properties that do not have numeric values.",
      "Can not animate multiple properties with different iteration count.",
    ],
  },
};
