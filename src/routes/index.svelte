<script>
	import { fade, fly } from 'svelte/transition'
	import me from '../me.json'
</script>

<style>

</style>

<svelte:head>
	<title>{ me.name }</title>
</svelte:head>

<div in:fly={{ y: -500, duration: 500, delay: 500 }} out:fly={{ y: -500, duration: 500 }} class="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0 text-gray-900">

	<!--Img Col-->
	<div class="w-full lg:w-2/5">
		<!-- Big profile image for side bar (desktop) -->
		<img src="images/foto-mobile.jpg" class="rounded-none lg:rounded-full shadow-2xl hidden lg:block" alt="FOTO">
		<!-- Image from: http://unsplash.com/photos/MP0IUfwrn0A -->
	</div>
    
	<!--Main Col-->
	<div id="profile" class="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl--- bg-transparent opacity-75 mx-6 lg:mx-0">
	
		<div class="p-4 md:p-12 text-center lg:text-left---">
			<!-- Image for mobile view-->
			<div class="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center" style="background-image: url('images/foto-mobile.jpg')"></div>
			
			<h1 class="text-3xl font-bold pt-8 lg:pt-0">{ me.profession }</h1>
			<div class="mx-auto w-4/5 pt-3 border-b-2 border-teal-500 opacity-25"></div>
			<p class="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start---"><svg class="h-4 fill-current text-teal-600 pr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19.527 4.799c1.212 2.608.937 5.678-.405 8.173-1.101 2.047-2.744 3.74-4.098 5.614-.619.858-1.244 1.75-1.669 2.727-.141.325-.263.658-.383.992-.121.333-.224.673-.34 1.008-.109.314-.236.684-.627.687h-.007c-.466-.001-.579-.53-.695-.887-.284-.874-.581-1.713-1.019-2.525-.51-.944-1.145-1.817-1.79-2.671L19.527 4.799zM8.545 7.705l-3.959 4.707c.724 1.54 1.821 2.863 2.871 4.18.247.31.494.622.737.936l4.984-5.925-.029.01c-1.741.601-3.691-.291-4.392-1.987a3.377 3.377 0 0 1-.209-.716c-.063-.437-.077-.761-.004-1.198l.001-.007zM5.492 3.149l-.003.004c-1.947 2.466-2.281 5.88-1.117 8.77l4.785-5.689-.058-.05-3.607-3.035zM14.661.436l-3.838 4.563a.295.295 0 0 1 .027-.01c1.6-.551 3.403.15 4.22 1.626.176.319.323.683.377 1.045.068.446.085.773.012 1.22l-.003.016 3.836-4.561A8.382 8.382 0 0 0 14.67.439l-.009-.003zM9.466 5.868L14.162.285l-.047-.012A8.31 8.31 0 0 0 11.986 0a8.439 8.439 0 0 0-6.169 2.766l-.016.018 3.665 3.084z"/></svg> { me.location }</p>
			<p class="pt-8 text-sm">{ me.intro }</p>

			<div class="pt-12 pb-8">
				<a href="about" class="bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-full flex m-auto w-48 justify-center">
					<span class="mr-5">Contact me</span>
					<svg class="h-6 fill-current text-white-600" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
						<path d="M.92 3.332c-.776 0-1.216.67-.692 1.383l2.537 4.403v7.86c0 2.013 1.467 3.69 3.459 3.69H20.31a3.75 3.75 0 003.69-3.69V7.043a3.723 3.723 0 00-3.668-3.71zm5.786 3.71H20.1c.587 0 1.153.357 1.153.923 0 .566-.566.922-1.153.922H6.706c-.587 0-1.153-.356-1.153-.922 0-.566.566-.923 1.153-.923zm0 3.69H20.1c.587 0 1.153.356 1.153.922 0 .566-.566.922-1.153.922H6.706c-.587 0-1.153-.356-1.153-.922 0-.566.566-.922 1.153-.922zm-.021 3.71h9.705c.587 0 1.153.356 1.153.922 0 .566-.566.923-1.153.923H6.685c-.587 0-1.153-.357-1.153-.923 0-.566.566-.922 1.153-.922Z"/>
					</svg>
				</a> 
			</div>

			<div class="mt-6 pb-16 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-wrap items-center justify-between">
				{#each me.socialNetworks as socialNetwork }
					{#if socialNetwork.url }
						<a class="link" href={socialNetwork.url} target="_blank">
							<svg class="h-6 fill-current text-gray-600 hover:{socialNetwork.color}" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
								<title>{ socialNetwork.title }</title>
								<path d={socialNetwork.svg}/>
							</svg>
						</a>
					{/if}
				{/each}

				<!-- Use https://simpleicons.org/ to find the svg for your preferred product --> 
			</div>

		</div>

	</div>

</div>

<div class="hidden hover:text-black hover:text-blue-600 hover:text-blue-400 hover:text-blue-700 hover:text-pink-700 hover:text-red-700"></div>