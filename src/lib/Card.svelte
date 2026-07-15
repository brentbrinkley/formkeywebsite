<script>
  // import DownloadButton from './DownloadButton.svelte' // hidden until the app launches

  import LearnButton from './LearnButton.svelte'
  import SocialButtons from './SocialButtons.svelte'
</script>

<div class="text-fkWhite">
  <h1 class="text-4xl font-headline font-medium">
    Unlock your music potential
  </h1>
  <p class="py-3 font-body font-light">
    FormKey is the first music suite that makes you a better musician as you use
    it.
  </p>
  <p class="pb-3 font-body font-light">
    Learn Form, a new music language anyone can read, then practice it with real
    sheet music.
  </p>
  <p class="pb-3 font-body font-light">
    Once you're comfortable, create your own songs in a 16-track sequencer using
    our new instruments, Tone and Wave, or any AUv3 plugin.
  </p>
  <div
    class="@container flex items-center justify-center mt-6 gap-2"
  >
    <!-- App Store button hidden until the app launches:
    <div class="hover:opacity-80 transition duration-300">
      <DownloadButton />
    </div>
    -->
    <div class="hover:opacity-80 transition duration-300">
      <LearnButton />
    </div>
  </div>

  <!-- Social icons: horizontal row under the main buttons, all sizes -->
  <div class="mt-6">
    <SocialButtons />
  </div>
</div>
