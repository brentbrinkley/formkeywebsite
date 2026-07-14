<script>
  import Social from './Social.svelte'
  import socialData from './social'
</script>

<div
  class="flex flex-row items-center justify-center py-2"
>
  {#each socialData as social}
    <Social
      link={social.link}
      title={social.title}
      iconName={social.iconName}
      svg={social.svg}
    />
  {/each}
</div>
