<script>
  import fkLogo from '../assets/fkLogo-white.svg'
  import social from '../lib/social'
  import DownloadButton from './DownloadButton.svelte'
  import Social from './Social.svelte'
</script>

<header class="fixed w-screen top-0">
  <nav
    class="flex items-center justify-between container mx-auto pr-4 pt-2 text-fkWhite"
  >
    <!-- Logo -->
    <div class="text-fkWhite items-baseline rounded flex text-3xl">
      <img class="h-9 mx-1 my-1" src={fkLogo} alt="Form Key Logo" />
      <h1 class="">ormKey</h1>
    </div>
    <!-- End logo -->

    <!-- Links -->
    <div class="hidden md:flex items-center justify-around text-fkWhite">
      <a class="mx-4" href="#">Press Kit</a>
      <a href="#">Get In Touch</a>
      <a class="mx-4" href="#">Support Our Efforts</a>
    </div>
    <!-- End links -->
  </nav>
</header>
