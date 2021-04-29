<script>
  import Social from './Social.svelte'
  import socialData from './social'
  import social from './social'
</script>

<div class="flex items-center justify-evenly py-6">
  {#each socialData as social}
    <Social
      link={social.link}
      title={social.title}
      iconName={social.iconName}
    />
  {/each}
</div>
