<script>
  import { videoId } from './video'

  const close = () => videoId.set(null)

  function onKeydown(e) {
    if (e.key === 'Escape') close()
  }
</script>

<svelte:window on:keydown={onKeydown} />

{#if $videoId}
  <!-- svelte-ignore a11y_click_events_have_key_events a11y_no_static_element_interactions -->
  <div
    class="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
    on:click={(e) => {
      if (e.target === e.currentTarget) close()
    }}
  >
    <button
      type="button"
      on:click={close}
      aria-label="Close video"
      class="absolute top-4 right-5 z-10 text-5xl leading-none text-fkWhite transition hover:opacity-70"
      >&times;</button
    >
    <div class="aspect-video w-[min(100%,170vh)]">
      <iframe
        class="h-full w-full rounded-xl shadow-2xl"
        src="https://www.youtube.com/embed/{$videoId}?autoplay=1&rel=0&modestbranding=1&iv_load_policy=3&playsinline=1"
        title="FormKey video"
        frameborder="0"
        allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
        allowfullscreen
      ></iframe>
    </div>
  </div>
{/if}
