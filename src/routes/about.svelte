<script>
	import { fade, fly } from 'svelte/transition'
	import me from '../me.json'
</script>

<style>
	
</style>

<svelte:head>
	<title>{ me.name }</title>
</svelte:head>

<div in:fly={{ y: -500, duration: 500, delay: 500 }} out:fly={{ y: -500, duration: 500 }} class="sm:flex p-6 w-full xl:w-10/12 m-auto">

	<div class="w-full lg:w-1/4 m-auto bg-transparent overflow-hidden my-4">
        <!-- <div class="flex items-center px-6 py-3 bg-teal-900">
            <svg class="h-6 w-6 text-white fill-current" viewBox="0 0 24 24">
                <path d="M.92 3.332c-.776 0-1.216.67-.692 1.383l2.537 4.403v7.86c0 2.013 1.467 3.69 3.459 3.69H20.31a3.75 3.75 0 003.69-3.69V7.043a3.723 3.723 0 00-3.668-3.71zm5.786 3.71H20.1c.587 0 1.153.357 1.153.923 0 .566-.566.922-1.153.922H6.706c-.587 0-1.153-.356-1.153-.922 0-.566.566-.923 1.153-.923zm0 3.69H20.1c.587 0 1.153.356 1.153.922 0 .566-.566.922-1.153.922H6.706c-.587 0-1.153-.356-1.153-.922 0-.566.566-.922 1.153-.922zm-.021 3.71h9.705c.587 0 1.153.356 1.153.922 0 .566-.566.923-1.153.923H6.685c-.587 0-1.153-.357-1.153-.923 0-.566.566-.922 1.153-.922Z"/>
            </svg>
            <h1 class="mx-3 text-white font-semibold text-lg">Contact me</h1>
        </div> -->
        <div class="py-4 px-6">
            <h1 class="text-2xl font-semibold text-gray-800">{ me.name }</h1>
            <p class="py-2 text-lg text-gray-700">{ me.profession }</p>
            <div class="flex items-center mt-4 text-gray-700">
                <svg class="h-6 w-6 fill-current" viewBox="0 0 512 512">
                    <path d="M256 32c-88.004 0-160 70.557-160 156.801C96 306.4 256 480 256 480s160-173.6 160-291.199C416 102.557 344.004 32 256 32zm0 212.801c-31.996 0-57.144-24.645-57.144-56 0-31.357 25.147-56 57.144-56s57.144 24.643 57.144 56c0 31.355-25.148 56-57.144 56z"/>
                </svg>
                <span class="px-2 text-sm">Arequipa - Perú</span>
            </div>
            <div class="flex items-center mt-4 text-gray-700">
				<a href="mailto:{ me.email }" class="flex hover:text-blue-600">
					<svg class="h-6 w-6 fill-current" viewBox="0 0 512 512">
						<path d="M437.332 80H74.668C51.199 80 32 99.198 32 122.667v266.666C32 412.802 51.199 432 74.668 432h362.664C460.801 432 480 412.802 480 389.333V122.667C480 99.198 460.801 80 437.332 80zM432 170.667L256 288 80 170.667V128l176 117.333L432 128v42.667z"/>
					</svg>
                	<span class="px-2 text-sm">{ me.email }</span>
				</a>
            </div>
			<div class="flex items-center mt-4 text-gray-700">
				<a href="https://api.whatsapp.com/send?phone={ me.phone }" class="flex hover:text-green-700" target="_blank" rel="noopener noreferrer">
					<svg class="h-6 w-6 fill-current" viewBox="0 0 512 512">
						<path d="M256,32c123.5,0,224,100.5,224,224S379.5,480,256,480S32,379.5,32,256S132.5,32,256,32 M256,0C114.625,0,0,114.625,0,256 s114.625,256,256,256s256-114.625,256-256S397.375,0,256,0L256,0z M398.719,341.594l-1.438-4.375 c-3.375-10.062-14.5-20.562-24.75-23.375L334.688,303.5c-10.25-2.781-24.875,0.969-32.405,8.5l-13.688,13.688 c-49.75-13.469-88.781-52.5-102.219-102.25l13.688-13.688c7.5-7.5,11.25-22.125,8.469-32.406L198.219,139.5 c-2.781-10.25-13.344-21.375-23.406-24.75l-4.313-1.438c-10.094-3.375-24.5,0.031-32,7.563l-20.5,20.5 c-3.656,3.625-6,14.031-6,14.063c-0.688,65.063,24.813,127.719,70.813,173.75c45.875,45.875,108.313,71.345,173.156,70.781 c0.344,0,11.063-2.281,14.719-5.938l20.5-20.5C398.688,366.062,402.062,351.656,398.719,341.594z"/>
					</svg>
                	<span class="px-2 text-sm">{ me.phone }</span>
				</a>
            </div>

			{#each me.socialNetworks as socialNetwork}
				{#if socialNetwork.url}
					<div class="flex items-center mt-4 text-gray-700">
						<a href={ socialNetwork.url } class="flex hover:{ socialNetwork.color }" target="_blank" rel="noopener noreferrer">
							<svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
								<path d={socialNetwork.svg} />
							</svg>
							<span class="px-2 text-sm">{ socialNetwork.user }</span>
						</a>
					</div>
				{/if}
			{/each}
        </div>
    </div>

	<div class="w-full lg:w-3/4 lg:ml-10">
		<iframe title="CV" src="/CV.pdf" class="w-full md:h-full h-64" frameborder="0" />	
	</div>
</div>