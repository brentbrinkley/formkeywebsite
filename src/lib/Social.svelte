<script>
  export let link
  export let title
  export let iconName
</script>

<div class="text-fkWhite text-2xl px-2">
  <a href={link} alt={title}>
    <i class={iconName} />
  </a>
</div>
