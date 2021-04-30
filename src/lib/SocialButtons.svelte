<script>
  import Social from './Social.svelte'
  import socialData from './social'
  import social from './social'
</script>

<div
  class="flex flex-col justify-items-center bg-fkWhite bg-opacity-40 rounded-r-xl bg-clip-padding"
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
