<script>
  import Counter from './lib/Counter.svelte'
  import Navbar from './lib/Navbar.svelte'
  //   import fkBG from './assets/fkbackground.png'
  import DownloadButton from './lib/DownloadButton.svelte'
  import backdrop from './assets/backdrop.png'
  import Card from './lib/Card.svelte'
  import Poster from './lib/Hero.svelte'
  import Hero from './lib/Hero.svelte'

  let imageURL =
    'https://images.unsplash.com/photo-1599009432364-3dc0d1932da2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80'
</script>

<!-- <main> -->

<!-- <img class="object-cover object-center h-screen w-full" src={fkBG} alt="" /> -->
<main
  class="h-screen bg-cover bg-no-repeat object-cover relative"
  style="background-image: url('{backdrop}');"
>
  <div class="h-screen bg-fkGreen bg-opacity-60">
    <div class="h-screen bg-gradient-to-tr from-fkGreen">
      <div>
        <Navbar />
        <Hero />
      </div>
    </div>
  </div>

  <!-- <DownloadButton /> -->
</main>
