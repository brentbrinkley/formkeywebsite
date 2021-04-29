<script>
  import ipad from '../assets/ipadslant.png'
  import Card from './Card.svelte'
</script>

<div class="flex items-center justify-center h-screen container mx-auto pt-12">
  <div class="w-1/3 z-10">
    <Card />
  </div>
  <img class="w-2/3" src={ipad} alt="" />
</div>
