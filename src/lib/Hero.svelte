<script>
  import ipad from '../assets/ipadslant.png'
  import Card from './Card.svelte'
</script>

<div
  class="flex items-center justify-center h-screen lg:container lg:mx-auto lg:pt-12"
>
  <div class="lg:w-1/3 z-10">
    <Card />
  </div>
  <div class="hidden lg:block lg:w-2/3">
    <img src={ipad} alt="" />
  </div>
</div>
