<script>
  import ipad from '../assets/fullipad.png'
  import DownloadButton from './DownloadButton.svelte'

  import LearnButton from './LearnButton.svelte'
</script>

<div class="text-fkWhite">
  <h1 class="text-4xl">Welcome to the future of music creation!</h1>
  <p class="py-3">
    FormKey is the first instrument designed so that anyone can create music.
    Each note has it's own shape and each octave is separated by color. Making
    note patterns easy to remember and play.
  </p>
  <p class="pb-3">
    FormKey's note grid also aids in playability. Learn a melody or a chord once
    and the pattern is the same no matter where you move your hands.
  </p>
  <div
    class="flex items-center justify-center mt-6 gap-3 flex-wrap mb-6 lg:mb-0"
  >
    <div class="">
      <DownloadButton />
    </div>
    <LearnButton />
  </div>
</div>
