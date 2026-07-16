<script>
  import IpadVideo from './IpadVideo.svelte'
  import Card from './Card.svelte'
</script>

<div class="flex items-center justify-center justify-items-center lg:min-h-[calc(100vh_-_10rem)]">
  <div class="lg:w-1/4">
    <Card />
  </div>
  <div class="hidden lg:block lg:w-3/4 pl-2 pt-2">
    <IpadVideo imgClass="drop-shadow-2xl lg:max-h-[calc(100vh_-_11rem)] lg:mx-auto" />
  </div>
</div>
