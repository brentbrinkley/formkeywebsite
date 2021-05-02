<script>
  import fkLogo from '../assets/fkLogo-white.svg'
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
  </nav>
</header>
