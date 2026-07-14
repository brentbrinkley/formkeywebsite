<script>
  import ipad from '../assets/ipad-app.webp'
  import { videoId } from './video'

  // optional extra classes for the image (e.g. drop-shadow on desktop)
  export let imgClass = ''

  // YouTube video id shown when the play button is pressed
  const ID = '5YXu6p_-jzc'

  // YouTube "billet" outline (curved top/bottom edges) as a scalable CSS mask,
  // so the frosted-glass (backdrop-blur) fill takes the exact YouTube shape.
  const YT_MASK =
    "url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 576 512%22%3E%3Cpath d=%22M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305z%22/%3E%3C/svg%3E') center / contain no-repeat"
  const maskStyle = `mask:${YT_MASK};-webkit-mask:${YT_MASK}`
</script>

<div class="relative">
  <img class={imgClass} src={ipad} alt="FormKey running on an iPad" />

  <button
    type="button"
    on:click={() => videoId.set(ID)}
    aria-label="Play video"
    class="group absolute inset-0 flex cursor-pointer items-center justify-center"
  >
    <span
      class="relative flex h-16 w-[4.5rem] items-center justify-center lg:h-20 lg:w-24"
    >
      <!-- frosted glass billet: kept static so the backdrop-blur is never
           re-rendered mid-animation (that re-blur was the jank); only its tint
           cross-fades on hover, which is cheap and smooth -->
      <span
        class="absolute inset-0 bg-fkWhite/30 backdrop-blur-lg transition-colors duration-300 ease-out group-hover:bg-fkWhite/50"
        style={maskStyle}
      ></span>
      <!-- solid white play triangle (static) -->
      <svg viewBox="0 0 576 512" class="relative h-full w-full" aria-hidden="true">
        <path d="M232.145 337.591V175.185l142.739 81.205z" class="fill-fkWhite" />
      </svg>
    </span>
  </button>
</div>
