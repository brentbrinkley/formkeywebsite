<script>
  import appButton from '../assets/appstore_button.svg'

  // App Store link — re-enable (wrap the img in <a href={appstoreLink}>) once the app is live:
  // let appstoreLink = 'https://apps.apple.com/us/app/formkey/id1535350561'
</script>

<!-- App Store: coming soon, intentionally not clickable -->
<div class="relative cursor-not-allowed select-none" aria-disabled="true">
  <img
    class="h-[clamp(2.25rem,15.5cqw,3.5rem)] border-fkWhite border-2 rounded-xl opacity-50 grayscale"
    src={appButton}
    alt="Download on the App Store, coming soon"
  />
  <span class="absolute inset-0 flex items-center justify-center">
    <span
      class="rounded bg-black/70 px-2 py-0.5 text-xs font-semibold uppercase tracking-wide text-fkWhite"
    >
      Coming Soon
    </span>
  </span>
</div>
