<script>
  import ipad from '../assets/ipadslant.png'
  import Card from './Card.svelte'
</script>

<div class="flex items-center justify-center justify-items-center">
  <div class="lg:w-1/3">
    <Card />
  </div>
  <div class="hidden lg:block lg:w-2/3 pl-2 pt-2">
    <img class="filter drop-shadow-2xl" src={ipad} alt="" />
  </div>
</div>
