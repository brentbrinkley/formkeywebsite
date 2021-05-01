<!-- <div>Hello World</div> -->
<script>
  import Hero from './Hero.svelte'
  import fullipad from '../assets/fullipad.png'
</script>

<div>
  <div class="lg:hidden mb-5">
    <img src={fullipad} alt="" />
  </div>
  <Hero />
</div>
