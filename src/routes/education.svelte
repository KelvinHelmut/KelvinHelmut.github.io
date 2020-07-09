<script>
  import { fade, fly } from "svelte/transition"
  import TimeLine from '../components/TimeLine.svelte'
  import me from "../me.json"
  import education from "../education.json"
  import courses from "../courses.json"
</script>

<style>

</style>

<svelte:head>
  <title>{me.name}</title>
</svelte:head>

<div in:fly={{ y: -500, duration: 500, delay: 500 }} out:fly={{ y: -500, duration: 500 }} class="w-full xl:w-10/12 m-auto">

    <div class="w-full text-center text-2xl font-semibold mb-10">
        <span>Education</span>
    </div>
    <TimeLine items={ education }></TimeLine>

    <div class="h-24"></div>
    <div class="w-full text-center text-2xl font-semibold mb-10">
        <span>Courses & MOOCs</span>
    </div>
    <TimeLine items={ courses }></TimeLine>

</div>
