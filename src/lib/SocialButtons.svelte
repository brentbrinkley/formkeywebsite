<script>
  import Social from './Social.svelte'
  import socialData from './social'
  import social from './social'
</script>

<div
  class="flex lg:flex-col justify-around  lg:bg-fkWhite py-2 lg:bg-opacity-40 rounded-r-xl lg:w-auto"
  style="backdrop-filter: blur(80px);"
>
  {#each socialData as social}
    <Social
      link={social.link}
      title={social.title}
      iconName={social.iconName}
    />
  {/each}
</div>
