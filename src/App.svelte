<script>
  import Navbar from './lib/Navbar.svelte'
  import backdrop from './assets/backdrop.png'
  import Footer from './lib/Footer.svelte'
  import VideoModal from './lib/VideoModal.svelte'
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
  <div class="min-h-screen bg-fkGreen/25">
    <div
      class="min-h-screen bg-linear-to-b lg:bg-linear-to-bl from-fkGreen/40 to-fkOrange/40 bg-black/30 backdrop-blur-lg relative"
    >
      <div class="min-h-screen container mx-auto px-4 lg:px-10 relative pb-20">
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
      </div>
    </div>
  </div>
</main>

<VideoModal />
