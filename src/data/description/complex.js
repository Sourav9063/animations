export const ComplexDes = {
  complex1: {
    header: "Lets implement what we have learned so far!",
    description:
      "We will be making a star component that takes in a number and renders that many stars.",
    points: [
      "We use onMouseMove and onTouchMove to get the position of the mouse or finger on the screen.",
      "Then calculate the relative position of the mouse or finger on the screen.",
      "Then we calculate the distance between the mouse or finger and the star.",
      "If the distance is less than a certain amount, we move the star change the opacity of the star.",
      "We used custom css properties to make the stars move and change opacity.",
    ],
  },
  complex2: {
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
  },
};
