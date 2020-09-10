<template>
  <div class="js-container container" style="background: transparent">
    <div class="text-center pt-5" style="z-index: 99">
      <div>
        <img src="/img/custom/thumbsUp.svg" height="170" class="mb-5" alt />
      </div>
      <router-link slot="brand" class="navbar-brand mr-lg-5" to="/">
        <img src="img/custom/logo.svg" height="50" class="mb-3" alt="logo" />
      </router-link>
      <h5>Thanks for Supporting!</h5>
      <router-link to="/" class="btn btn-custom mt-5">Continue to Movies</router-link>
    </div>
  </div>
  <!-- <div class="container">
    <div class="container">
     
    </div>
  </div>-->
</template>
<script>
export default {
  mounted() {
    const Confettiful = function (el) {
      this.el = el;
      this.containerEl = null;

      this.confettiFrequency = 3;
      this.confettiColors = ["#fce18a", "#ff726d", "#b48def", "#f4306d"];
      this.confettiAnimations = ["slow", "medium", "fast"];

      this._setupElements();
      this._renderConfetti();
    };

    Confettiful.prototype._setupElements = function () {
      const containerEl = document.createElement("div");
      const elPosition = this.el.style.position;

      if (elPosition !== "relative" || elPosition !== "absolute") {
        this.el.style.position = "relative";
      }

      containerEl.classList.add("confetti-container");

      this.el.appendChild(containerEl);

      this.containerEl = containerEl;
    };

    Confettiful.prototype._renderConfetti = function () {
      this.confettiInterval = setInterval(() => {
        const confettiEl = document.createElement("div");
        const confettiSize = Math.floor(Math.random() * 3) + 7 + "px";
        const confettiBackground = this.confettiColors[
          Math.floor(Math.random() * this.confettiColors.length)
        ];
        const confettiLeft =
          Math.floor(Math.random() * this.el.offsetWidth) + "px";
        const confettiAnimation = this.confettiAnimations[
          Math.floor(Math.random() * this.confettiAnimations.length)
        ];

        confettiEl.classList.add(
          "confetti",
          "confetti--animation-" + confettiAnimation
        );
        confettiEl.style.left = confettiLeft;
        confettiEl.style.width = confettiSize;
        confettiEl.style.height = confettiSize;
        confettiEl.style.backgroundColor = confettiBackground;

        confettiEl.removeTimeout = setTimeout(function () {
          confettiEl.parentNode.removeChild(confettiEl);
        }, 3000);

        this.containerEl.appendChild(confettiEl);
      }, 25);
    };

    window.confettiful = new Confettiful(
      document.querySelector(".js-container")
    );
  },
};
</script>