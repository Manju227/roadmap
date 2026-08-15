document.addEventListener("DOMContentLoaded", () => {

  /* ==============================
     CATEGORY BAR
     ============================== */

  const bar = document.querySelector(".category-bar");
  const header = document.querySelector(".navbar, header");

  if (bar) {

    const headerHeight = header ? header.offsetHeight : 70;

    bar.style.position = "fixed";
    bar.style.left = "0";
    bar.style.width = "100%";
    bar.style.zIndex = "1001";
    bar.style.transition = "top 0.25s ease";

    if (header) {
      header.style.transition =
        "transform 0.25s ease, opacity 0.25s ease";
    }

    const updateBarPosition = () => {

      const hasScrolled = window.scrollY > 20;

      // At top → category bar below navbar
      // After scrolling → category bar moves to top
      bar.style.top = hasScrolled
        ? "0"
        : `${headerHeight}px`;

      if (header) {

        header.style.transform = hasScrolled
          ? "translateY(-100%)"
          : "translateY(0)";

        header.style.opacity = hasScrolled
          ? "0"
          : "1";
      }
    };

    window.addEventListener(
      "scroll",
      updateBarPosition,
      { passive: true }
    );

    updateBarPosition();
  }


  /* ==============================
     EMAILJS CONTACT FORM
     ============================== */

  emailjs.init({
    publicKey: "gtWk8G0wSVZtZEbhd"
  });


  const contactForm =
    document.getElementById("contact-form");

  const status =
    document.getElementById("status");


  if (contactForm) {

    contactForm.addEventListener(
      "submit",
      function(event) {

        event.preventDefault();

        status.textContent = "Sending...";


        emailjs.sendForm(
          "service_mp2h2xo",
          "template_6o48ael",
          this
        )

        .then(function() {

          status.textContent =
            "Message sent successfully!";

          contactForm.reset();

        })

        .catch(function(error) {

          console.error(
            "EmailJS Error:",
            error
          );

          status.textContent =
            "Failed to send message. Please try again.";

        });

      }
    );

  }

});
