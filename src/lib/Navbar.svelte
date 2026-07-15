<script>
  import fkLogo from '../assets/formkey-logo.png'

  let navData = [
    // Temporarily hidden from users — /#/presskit route still active, share directly with press
    // {
    //   title: 'Press Kit',
    //   link: '#/presskit'
    // },
    // Temporarily hidden from users — re-add when Guides content is ready
    // {
    //   title: 'Guides',
    //   link: '#/guides'
    // },
    {
      title: 'Get In Touch',
      link: 'mailto:bbrinkley@formkey.app'
    },
    // Temporarily hidden from users
    // {
    //   title: 'Help Us Grow',
    //   link: 'https://www.buymeacoffee.com/S8VWrdFUg'
    // }
  ]
</script>

<header class="mb-6">
  <nav class="flex items-center justify-between pt-2 text-fkWhite">
    <!-- Logo Start -->
    <a
      class="hover:opacity-80 transition duration-300"
      href="/#/"
    >
      <img class="h-7 lg:h-8" src={fkLogo} alt="FormKey" />
    </a>
    <!-- End logo -->

    <!-- Links -->
    <div
      class="flex items-center justify-around text-fkWhite gap-4 font-headline"
    >
      {#each navData as nav}
        <a class="hover:opacity-80 transition duration-300" href={nav.link}
          >{nav.title}</a
        >
      {/each}
    </div>
    <!-- End links -->
  </nav>
</header>
