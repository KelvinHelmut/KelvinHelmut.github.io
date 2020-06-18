<script>
	export let segment;
	let menuVisible = false

	function toggleMenu() {
		menuVisible = !menuVisible
	}
</script>

<style>
	nav {
		top: 0;
	}
	
	[aria-current] {
		position: relative;
		display: inline-block;
		color: white;
	}

	[aria-current]::after {
		position: absolute;
		content: '';
		width: calc(100%);
		height: 1px;
		background-color: rgb(255,255,255);
		display: block;
		bottom: -1px;
	}
</style>

<nav class="flex items-center justify-between flex-wrap bg-teal-500 p-5 fixed w-full z-10">
	<div class="flex items-center flex-shrink-0 text-white mr-6">
		<svg class="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><path d="M12 19.5c3.75 0 7.159-3.379 6.768-4.125-.393-.75-2.268 1.875-6.768 1.875s-6-2.625-6.375-1.875S8.25 19.5 12 19.5zm4.125-12c.623 0 1.125.502 1.125 1.125v1.5c0 .623-.502 1.125-1.125 1.125A1.123 1.123 0 0115 10.125v-1.5c0-.623.502-1.125 1.125-1.125zm-8.25 0C8.498 7.5 9 8.002 9 8.625v1.5c0 .623-.502 1.125-1.125 1.125a1.123 1.123 0 01-1.125-1.125v-1.5c0-.623.502-1.125 1.125-1.125zM12 0C5.381 0 0 5.381 0 12s5.381 12 12 12 12-5.381 12-12S18.619 0 12 0zm0 1.5c5.808 0 10.5 4.692 10.5 10.5S17.808 22.5 12 22.5 1.5 17.808 1.5 12 6.192 1.5 12 1.5Z"/></svg>
		<span class="font-semibold text-xl tracking-tight"><a href="."><span class="text-teal-100">Kelvin</span><span class="text-teal-900">Helmut</span></a></span>
	</div>
	<div class="block lg:hidden">
		<button on:click={ toggleMenu } class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
			<svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
		</button>
	</div>
	<div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto { menuVisible ? '' : 'hidden' } lg:block">
		<div class="lg:flex-grow"></div>
		<div class="text-sm">
			<a aria-current="{segment === 'about' ? 'page' : undefined}" href="about" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">Contact</a>

			<!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
				the blog data when we hover over the link or tap it on a touchscreen -->
			<!-- <a rel=prefetch aria-current="{segment === 'blog' ? 'page' : undefined}" href="blog" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">blog</a> -->
		</div>
		<!-- <div>
			<a href="#" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Download</a>
		</div> -->
	</div>
</nav>

{#if segment !== undefined}
<div class="h-24"></div>
{/if}