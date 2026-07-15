<script>
  import IpadVideo from './IpadVideo.svelte'
  import Card from './Card.svelte'
</script>

<div class="flex items-center justify-center justify-items-center">
  <div class="lg:w-1/4">
    <Card />
  </div>
  <div class="hidden lg:block lg:w-3/4 pl-2 pt-2 lg:-mt-6">
    <IpadVideo imgClass="drop-shadow-2xl" />
  </div>
</div>
