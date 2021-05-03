<script>
  import fkLogo from '../assets/fkLogo-white.svg'

  var showMenu = false
  import { slide } from 'svelte/transition'

  let toggleMenu = () => (showMenu = !showMenu)
</script>

<header class="mb-6">
  <nav class="flex items-center justify-between pt-2 text-fkWhite">
    <!-- Logo -->
    <a href="/#/">
      <div
        class="text-fkWhite items-baseline rounded flex text-3xl hover:opacity-80 transition duration-300"
      >
        <img class="h-9 mx-1 my-1" src={fkLogo} alt="Form Key Logo" />
        <h1 class="hidden lg:block font-headline">ormKey</h1>
      </div>
    </a>
    <!-- End logo -->

    <!-- Links -->
    <div
      class="hidden md:flex items-center justify-around text-fkWhite gap-4 font-headline "
    >
      <a class="hover:opacity-80 transition duration-300" href="#/presskit"
        >Press Kit</a
      >
      <a
        class="hover:opacity-80 transition duration-300"
        href="mailto:brentbrinkley@gmail.com">Get In Touch</a
      >
      <a
        class="hover:opacity-80 transition duration-300"
        href="https://www.buymeacoffee.com/S8VWrdFUg">Help Us Grow</a
      >
    </div>
    <!-- End links -->

    <!-- Start mobile nav icon -->
    <div class="md:hidden transition duration-300">
      <button on:click|preventDefault={toggleMenu}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>
    </div>
    <!-- End mobile Nav -->
  </nav>
  <!-- Mobile links -->
  {#if showMenu}
    <div
      transition:slide|local
      class="inline-block md:hidden text-fkWhite font-headline font-semibold text-xl"
    >
      <a
        class=" block hover:opacity-80 transition duration-300 py-8"
        href="#/presskit">Press Kit</a
      >
      <a
        class=" block hover:opacity-80 transition duration-300"
        href="mailto:brentbrinkley@gmail.com">Get In Touch</a
      >
      <a
        class=" block hover:opacity-80 transition duration-300 py-8"
        href="https://www.buymeacoffee.com/S8VWrdFUg">Help Us Grow</a
      >
    </div>
  {/if}
</header>
