<script>
  import Social from './Social.svelte'
  import socialData from './social'
  import social from './social'
</script>

<div
  class="flex flex-col items-center justify-around  lg:bg-fkWhite py-2 lg:bg-opacity-60 rounded-r-xl lg:w-auto z-30 backdrop-filter backdrop-blur-lg"
>
  {#each socialData as social}
    <Social
      link={social.link}
      title={social.title}
      iconName={social.iconName}
    />
  {/each}
</div>
