const signFunction = document.querySelector(".linear-sign-function");
const left = document.querySelector(".left");
const zero = document.querySelector(".zero");
const right = document.querySelector(".right");
const rightSingn = document.querySelector(".right .sign");
const leftSingn = document.querySelector(".left .sign");
const rightInequality = document.querySelector(".right .inequality");
const leftInequality = document.querySelector(".left .inequality");
const buttons = document.querySelector(".buttons");
const equation = document.querySelector(".equation");
const linear = document.querySelector(".linear");
const quadratic = document.querySelector(".quadratic");
const linearEquation = document.querySelector(".linear-equation");
const linearSubmit = document.querySelector(".linear-equation button");
const plot = document.getElementById("plot");

linear.onclick = () => {
  equation.style.visibility = "hidden";
  linearEquation.style.visibility = "visible";
  linearSubmit.onclick = () => {
    const firstInput = document.querySelector(".first").value.toLowerCase();
    const secondInput = document.querySelector(".second").value.toLowerCase();
    let linearEquationString;
    if (firstInput.includes("x")) {
      if (firstInput === "x") {
        firstInput = "1x";
      }
      linearEquationString = `${firstInput}+${+secondInput}`;
      const coefficientOfX = +firstInput.replace("x", "");
      const zeroOfFunction = -secondInput / coefficientOfX;
      signFunction.style.visibility = "visible";
      zero.innerHTML = `<h1>${zeroOfFunction}</h1>`;
      if (coefficientOfX > 0) {
        rightSingn.innerHTML = "Positive";
        rightInequality.innerHTML = `<b>x</b> > <b>${zeroOfFunction}</b>`;
        leftSingn.innerHTML = "Negative";
        leftInequality.innerHTML = `<b>x</b> < <b>${zeroOfFunction}</b>`;
      } else {
        rightSingn.innerHTML = "Negative";
        rightInequality.innerHTML = `x > ${zeroOfFunction}`;
        leftSingn.innerHTML = "Positive";
        rightInequality.innerHTML = `x < ${zeroOfFunction}`;
      }
      console.log(rightInequality.innerHTML);
    } else {
      if (secondInput === "x") {
        secondInput = "1x";
      }
      linearEquationString = `${secondInput}+${firstInput}`;
      const coefficientOfX = +secondInput.replace("x", "");
      const zeroOfFunction = -firstInput / coefficientOfX;

      signFunction.style.visibility = "visible";
      zero.innerHTML = `<h1>${zeroOfFunction}</h1>`;
      if (coefficientOfX > 0) {
        rightSingn.innerHTML = "Positive";
        rightInequality.innerHTML = `<b>x</b> > <b>${zeroOfFunction}</b>`;
        leftSingn.innerHTML = "Negative";
        leftInequality.innerHTML = `<b>x</b> < <b>${zeroOfFunction}</b>`;
        functionPlot({
          target: "#plot",
          width: 600,
          height: 400,
          grid: true,
          data: [
            {
              fn: linearEquationString,
              color: "red",
            },
          ],
        });
        plot.style.display = "block";
      } else {
        rightSingn.innerHTML = "Negative";
        rightInequality.innerHTML = `<b>x</b> > <b>${zeroOfFunction}</b>`;
        leftSingn.innerHTML = "Positive";
        rightInequality.innerHTML = `<b>x</b> < <b>${zeroOfFunction}</b>`;
      }

      console.log(rightInequality.innerHTML);
      console.log(plot);
    }
    functionPlot({
      target: "#plot",
      width: 600,
      height: 400,
      grid: true,
      data: [
        {
          fn: linearEquationString,
          color: "red",
        },
      ],
    });
    plot.style.display = "block";
  };
};

quadratic.onclick = () => {};
