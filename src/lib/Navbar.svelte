<script>
  import { each } from 'svelte/internal'
  import fkLogo from '../assets/fkLogo-white.svg'

  var showMenu = false
  let toggleMenu = () => (showMenu = !showMenu)
  let navData = [
    {
      title: 'Press Kit',
      link: '#/presskit'
    },
    {
      title: 'Guides',
      link: '#/guides'
    },
    {
      title: 'Get In Touch',
      link: 'mailto:brentbrinkley@gmail.com'
    },
    {
      title: 'Help Us Grow',
      link: 'https://www.buymeacoffee.com/S8VWrdFUg'
    }
  ]
</script>

<header class="mb-6">
  <nav class="flex items-center justify-between pt-2 text-fkWhite">
    <!-- Logo -->
    <a class="active:bg-green-700" href="/#/">
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
      {#each navData as nav}
        <a
          on:pointerup|preventDefault
          class="hover:opacity-80 transition duration-300 outline-none"
          href={nav.link}>{nav.title}</a
        >
      {/each}
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
    <!-- End mobile Nav Icon -->
  </nav>
  <!-- Mobile links -->
  <div
    class="fixed md:hidden inset-y-0 left-0 text-fkWhite font-headline font-semibold text-xl bg-fkWhite px-4 z-30 bg-opacity-60 rounded-r-2xl transform {showMenu
      ? ''
      : '-translate-x-full'} transition duration-500 ease-in-out pt-10 backdrop-filter backdrop-blur-xl"
  >
    {#each navData as nav}
      <a
        on:click={toggleMenu}
        class=" block hover:opacity-80 transition duration-300 mb-10 text-fkGreen"
        href={nav.link}>{nav.title}</a
      >
    {/each}
  </div>
  <!-- End Mobile links -->
</header>
