"use strict";

function outer() {
  var count = 5;
  console.log("Outer before inner:", count);

  function inner() {
    // `var count` is hoisted to the top of inner and shadows outer count.
    console.log("Inner before assignment:", count); // undefined
    var count = 10;
    console.log("Inner after assignment:", count); // 10
  }

  inner();
  console.log("Outer after inner:", count); // 5
}

outer();

// Arrow-function comparison: without a local count, the arrow reads outer count.
function outerWithArrow() {
  let count = 5;
  const inner = () => {
    console.log("Arrow reads outer count:", count); // 5
  };
  inner();
}

outerWithArrow();
