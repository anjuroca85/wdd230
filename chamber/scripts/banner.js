document.addEventListener("DOMContentLoaded", () => {
  const today = new Date();
  const day = today.getDay(); // 0: Sunday, 1: Monday, ..., 6: Saturday

  if (day >= 1 && day <= 3) {
    // Show banner on Monday, Tuesday, Wednesday
    const banner = document.createElement("div");
    banner.id = "meetGreetBanner";
    banner.innerHTML = `
      <p>Join us for the Chamber of Commerce meet and greet on Wednesday at 7:00 p.m.</p>
      <button id="closeBanner">❌</button>
    `;
    document.body.prepend(banner);

    document.querySelector("#closeBanner").addEventListener("click", () => {
      banner.style.display = "none";
    });
  }
});
