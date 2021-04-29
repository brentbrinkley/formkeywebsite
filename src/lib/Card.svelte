<script>
  import ipad from '../assets/fullipad.png'
  import DownloadButton from './DownloadButton.svelte'
  import ipadIcon from '../assets/whiteipad.svg'
  import iphoneIcon from '../assets/iphonewhite.svg'
  import SocialButtons from './SocialButtons.svelte'
  import LearnButton from './LearnButton.svelte'
</script>

<div class="text-fkWhite pr-5">
  <h1 class="text-4xl">Welcome to the future of music creation</h1>
  <p class="py-3">
    FormKey is the first instrument designed so that anyone can learn how to
    play music. Octaves are color based and each note has a shape. Welcome to
    the future
  </p>
  <p class="pb-3">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet fugiat, quo
    enim nesciunt molestiae cupiditate reprehenderit dolorum nostrum aut veniam
    repudiandae vitae dolor dignissimos adipisci odio, repellendus rem,
    excepturi saepe!
  </p>

  <div class="flex items-center my-8">
    <div class="mr-6">
      <DownloadButton />
    </div>

    <LearnButton />

    <!-- <div>
      <img class="h-16 px-2" src={ipadIcon} alt="" />
    </div>
    <div>
      <img class="h-12" src={iphoneIcon} alt="" />
    </div> -->
  </div>
  <div>
    <SocialButtons />
  </div>
</div>
