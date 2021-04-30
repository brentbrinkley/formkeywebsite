<script>
  import fkLogo from '../assets/fkLogo-white.svg'
  import social from '../lib/social'
  import DownloadButton from './DownloadButton.svelte'
  import Social from './Social.svelte'
</script>

<header class="mb-6">
  <nav class="flex items-center justify-between pt-2 text-fkWhite">
    <!-- Logo -->
    <div class="text-fkWhite items-baseline rounded flex text-3xl">
      <img class="h-9 mx-1 my-1" src={fkLogo} alt="Form Key Logo" />
      <h1 class="hidden lg:block">ormKey</h1>
    </div>
    <!-- End logo -->

    <!-- Links -->
    <div class="hidden md:flex items-center justify-around text-fkWhite gap-4">
      <a class="" href="#">Press Kit</a>
      <a class="" href="#">Get In Touch</a>
      <a class="" href="https://www.buymeacoffee.com/S8VWrdFUg">Help Us Grow</a>
    </div>
    <!-- End links -->
  </nav>
</header>
