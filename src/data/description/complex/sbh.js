export const sbhDescription = {
  head: "SVG animation",
  description:
    "SVG elements can be animated by using CSS properties or JavaScript.",
  points: [
    "Use useRef hooks to create references for the SVG element and the paths array.",
    "These references will be used to access the DOM elements and manipulate them.",
    "Used useLayoutEffect hook to get the length of the path.",
    "Then OnMouseEnter and OnMouseLeave events are used to trigger the animation.",
    "The animation is triggered by changing the stroke-dashoffset property of the path.",
    "The stroke-dashoffset property is the length of the path.",
    "When the stroke-dashoffset is 0 the path is completely visible.",
    "When the stroke-dashoffset is equal to the length of the path the path is completely invisible.",
    "So we are animating the stroke-dashoffset property from the length of the path to 3 times the length.",
    "This gives the illusion the path is being constructed",
  ],
};
