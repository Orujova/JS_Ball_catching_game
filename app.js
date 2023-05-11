const cursor = document.getElementById("cursor");
const cursor_second = document.getElementById("cursor_second");
document.addEventListener("mousemove", (e) => {
  //clientX clientY
  // console.log("X" + e.clientX)
  // console.log("Y" + e.clientY)
  let x = e.clientX;
  let y = e.clientY;
  cursor.style.left = x + "px";
  cursor.style.top = y + "px";

  cursor_second.style.left = x + "px";
  cursor_second.style.top = y + "px";
});
