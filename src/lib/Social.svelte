<script>
  export let link
  export let title
  export let iconName = ''
  export let svg = ''
</script>

<div
  class="text-fkWhite text-3xl lg:text-2xl p-4 hover:opacity-40 transition duration-300"
>
  <a href={link} aria-label={title}>
    {#if svg === 'x'}
      <svg
        viewBox="0 0 512 512"
        class="inline-block w-[1em] h-[1em] fill-current align-[-0.125em]"
        aria-hidden="true"
      >
        <path
          d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
        />
      </svg>
    {:else}
      <i class={iconName}></i>
    {/if}
  </a>
</div>
