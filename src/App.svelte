<script>
  import Navbar from './lib/Navbar.svelte'
  import backdrop from './assets/backdrop.png'
  import Sidebar from './lib/Sidebar.svelte'
  import Footer from './lib/Footer.svelte'
  import Router from 'svelte-spa-router'
  import Home from './lib/Home.svelte'
  import Presskit from './lib/Presskit.svelte'
  import { slide } from 'svelte/transition'
  import Guides from './lib/Guides.svelte'
</script>

<!-- <main> -->

<!-- <img class="object-cover object-center h-screen w-full" src={fkBG} alt="" /> -->
<main
  class="bg-cover bg-no-repeat"
  style="background-image: url('{backdrop}');"
>
  <div class="h-screen bg-fkGreen bg-opacity-60">
    <div
      class="h-screen bg-gradient-to-t lg:bg-gradient-to-tr from-fkGreen relative"
    >
      <div class="h-full container mx-auto px-4 lg:px-10 relative">
        <Navbar />
        <div transition:slide class="">
          <Router
            routes={{
              '/': Home,
              '/presskit': Presskit,
              '/guides': Guides
            }}
          />
        </div>

        <Footer />
        <div class="lg:hidden">
          <Sidebar />
        </div>
      </div>
      <div class="hidden lg:block">
        <Sidebar />
      </div>
    </div>
  </div>
</main>
