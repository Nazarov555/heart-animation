const bodyElement = document.querySelector("body");

bodyElement.addEventListener("mousemove", (event)=>{

    const xPosition = event.offsetX;
    const yPosition = event.offsetY;

    const spanElement = document.createElement("span");

    spanElement.style.left = xPosition + "px";
    spanElement.style.top = yPosition + "px";

    const size = Math.random()*400;

    spanElement.style.width = size + "px";
    spanElement.style.height = size + "px";

    bodyElement.appendChild(spanElement);

    setTimeout(()=>{
        spanElement.remove();
    }, 800);
});
bodyElement.addEventListener("click", (event)=>{

    const xPosition = event.offsetX;
    const yPosition = event.offsetY;

    const spanElement = document.createElement("span");

    spanElement.style.left = xPosition + "px";
    spanElement.style.top = yPosition + "px";

    const size = Math.random()*400;

    spanElement.style.width = size + "px";
    spanElement.style.height = size + "px";

    bodyElement.appendChild(spanElement);

    setTimeout(()=>{
        spanElement.remove();
    }, 800);
});