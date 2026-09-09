const zoomArea = document.getElementById("zoomImage");
 const zoomImage = document.getElementById("zoomImage");

 let scale = 1;
 let zoomEnabled = false;
 const zoomStep = 0.1;
 const minScale = 1;
 const maxScale = 5;

 zoomImage.addEventListener("click", () => {
     zoomImage.style.cursor = "grab";
zoomEnabled = true;
});


document.addEventListener("click", (e) => {
if (e.target !== zoomImage) {
    zoomImage.style.cursor = "default";
zoomEnabled = false;}
});

 zoomArea.addEventListener("wheel", function (e) {
    if(!zoomEnabled) return;
 e.preventDefault();

 if (e.deltaY < 0) {
 scale += zoomStep;
 } else {
 scale -= zoomStep;
 }

 scale = Math.max(minScale, Math.min(maxScale, scale));

 zoomImage.style.transformOrigin = `${e.offsetX}px ${e.offsetY}px`;
 zoomImage.style.transform = `scale(${scale})`;


 });