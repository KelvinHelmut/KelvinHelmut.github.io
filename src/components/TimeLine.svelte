<script>
    export let items
</script>

{#each items as item, index}
    <div class="flex flex-no-wrap justify-center { index % 2 == 0 ? 'lg:flex-row flex-row-reverse' : '' }">
        <!-- left col -->
        <div class="sm:w-2/5 w-4/5 flex-none p-2 { index % 2 == 0 ? '' : 'hidden lg:block' }">
            {#if index % 2 == 0}
                <div class="float-left rounded-lg bg-gray-100 bg-opacity-25 shadow-xl p-4 { index % 2 == 0 ? 'lg:float-right' : '' }">
                    <div class="text-center mb-2">
                        { item.nombre }
                    </div>

                    <img class="w-full h-full rounded-lg shadow" src="{ item.imagen }" alt="Certificado">

                    {#if item.url }
                        <div class="text-center text-xs text-gray-500 mt-2">
                            <a class="hover:text-blue-400" href={ item.url } target="_blank" rel="noopener noreferrer">Ver credencial</a>
                            {#if item.ID }
                                ( { item.ID } )
                            {/if}
                        </div>
                    {/if}
                </div>
            {/if}
        </div>
        <!--line column-->
        <div class="sm:w-1/5 w-1/5 flex-none float-left">
            <div class="bg-blue-600 p-1 h-full w-1 mx-auto">
                <button
                    class="h-24 w-24 mt-20 mb-20 bg-blue-600 hover:bg-blue-600 text-white
                    font-bold rounded-full -ml-12">
                    <pre>{ item.periodo }</pre>
                </button>
            </div>
        </div>
        <!--right column-->
        <div class="sm:w-2/5 w-4/5 flex-none p-2 { index % 2 == 0 ? 'hidden lg:block' : '' }">
            {#if index % 2 == 1}
                <div class="float-left rounded-lg bg-gray-100 bg-opacity-25 shadow-xl p-4">
                    <div class="text-center mb-2">
                        { item.nombre }
                    </div>

                    <img class="w-full h-full rounded-lg shadow" src="{ item.imagen }" alt="{ item.nombre }">

                    {#if item.url }
                        <div class="text-center text-xs text-gray-500 mt-2">
                            <a class="hover:text-blue-400" href={ item.url } target="_blank" rel="noopener noreferrer">Ver credencial</a>
                            {#if item.ID }
                                ( { item.ID } )
                            {/if}
                        </div>
                    {/if}
                </div>
            {/if}
        </div>
    </div>
{/each}