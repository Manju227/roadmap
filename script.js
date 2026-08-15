/* Move the category bar to the very top after the user starts scrolling. */
document.addEventListener("DOMContentLoaded", () => {
  const bar = document.querySelector(".category-bar");
  const header = document.querySelector(".navbar, header");

  if (!bar) return;

  const headerHeight = header ? header.offsetHeight : 70;

  bar.style.position = "fixed";
  bar.style.left = "0";
  bar.style.width = "100%";
  bar.style.zIndex = "1001";
  bar.style.transition = "top 0.25s ease";

  if (header) {
    header.style.transition = "transform 0.25s ease, opacity 0.25s ease";
  }

  const updateBarPosition = () => {
    const hasScrolled = window.scrollY > 20;

    // At page top, bar is below header; after scrolling, it moves to top.
    bar.style.top = hasScrolled ? "0" : `${headerHeight}px`;

    if (header) {
      header.style.transform = hasScrolled ? "translateY(-100%)" : "translateY(0)";
      header.style.opacity = hasScrolled ? "0" : "1";
    }
  };

  window.addEventListener("scroll", updateBarPosition, { passive: true });
  updateBarPosition();
});

emailjs.init({
    publicKey: "gtWk8G0wSVZtZEbhd"
});

document.getElementById("contact-form").addEventListener("submit", function(event) {

    event.preventDefault();

    const status = document.getElementById("status");

    status.textContent = "Sending...";

    emailjs.sendForm(
        "service_mp2h2xo",
        "template_6o48ael",
        this
    )
    .then(function() {

        status.textContent = "Message sent successfully!";

        document.getElementById("contact-form").reset();

    })
    .catch(function(error) {

        console.error(error);

        status.textContent = "Failed to send message.";

    });

});
