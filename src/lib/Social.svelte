<script>
  export let link
  export let title
  export let iconName
</script>

<div class="text-fkWhite text-3xl lg:text-2xl p-4">
  <a href={link} alt={title}>
    <i class={iconName} />
  </a>
</div>
