<script>
  import Social from './Social.svelte'
  import socialData from './social'
  import social from './social'
</script>

<div
  class="flex flex-col items-center justify-around  lg:bg-fkWhite py-2 lg:bg-opacity-60 rounded-r-xl lg:w-auto"
  style="backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);"
>
  {#each socialData as social}
    <Social
      link={social.link}
      title={social.title}
      iconName={social.iconName}
    />
  {/each}
</div>
