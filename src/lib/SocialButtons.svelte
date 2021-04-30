<script>
  import Social from './Social.svelte'
  import socialData from './social'
  import social from './social'
</script>

<div class="flex items-center justify-start">
  {#each socialData as social}
    <Social
      link={social.link}
      title={social.title}
      iconName={social.iconName}
    />
  {/each}
</div>
