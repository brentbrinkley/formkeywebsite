<script>
  import Social from './Social.svelte'
  import socialData from './social'
  import social from './social'
</script>

<div
  class="flex flex-col justify-items-center bg-fkGray bg-opacity-40 rounded-r-xl"
>
  {#each socialData as social}
    <Social
      link={social.link}
      title={social.title}
      iconName={social.iconName}
    />
  {/each}
</div>
