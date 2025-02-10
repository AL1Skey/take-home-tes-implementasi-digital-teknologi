<script setup>
import { onMounted } from 'vue';
import { ref } from 'vue';

const config = useRuntimeConfig();
const cms = useState('cms', () => null); // Initialize with null
const loading = ref(true);

async function getData(url) {
  try {
    console.log('Fetching data from:', url);
    const data = await $fetch(url);
    console.log('Fetched data:', data);
    if(data?.data?.data){
      return data.data.data;
    }
    if(data?.data){
      return data.data;
    }
    return data || null;
  } catch (err) {
    console.error('Request failed:', err);
    return null;
  }
}

async function runAll() {
  try {
    const [headerData, footerData, servicesData, projectData] = await Promise.all([
      await getData(`${config.public.apiBase}/public/headers`),
      await getData(`${config.public.apiBase}/public/footers`),
      await getData(`${config.public.apiBase}/public/services`),
      await getData(`${config.public.apiBase}/public/projects`)
    ]);
    cms.value = {
      header: toValue(headerData) || {}, // Handle potential null/undefined
      footer: toValue(footerData) || {},
      services: toValue(servicesData) || {},
      projects: toValue(projectData) || []
    };

    console.log("CMS Loaded:", cms.value);
  } catch (error) {
    console.error('Failed to initialize CMS:', error);
  } finally {
    loading.value = false;
    loadScripts();
  }
}

async function loadScripts() {
  try {
    await useScript( {src:'https://code.jquery.com/jquery-1.12.4.min.js',async: true, defer: true });
    await useScript( {src:'/assets/js/jquery.validate.min.js', async: true, defer: true });
    await useScript( {src:'/assets/js/jquery.pagepiling.min.js', async: true, defer: true });
    await useScript( {src:'/assets/js/jquery.viewport.js', async: true, defer: true });
    await useScript( {src:'/assets/js/jquery.countdown.min.js', async: true, defer: true });
    await useScript( {src:'/assets/js/smoothscroll.js', async: true, defer: true });
    await useScript( {src:'/assets/js/popper.min.js', async: true, defer: true });
    await useScript( {src:'/assets/js/bootstrap.min.js', async: true, defer: true });
    await useScript( {src:'/assets/js/owl.carousel.min.js', async: true, defer: true });
    await useScript( {src:'/assets/js/typed.min.js', async: true, defer: true });
    await useScript( {src:'/assets/js/parallax.min.js', async: true, defer: true });
    await useScript( {src:'/assets/js/script.js', async: true, defer: true });
    // Load other scripts similarly...
    console.log('All scripts loaded');
  } catch (error) {
    console.error('Script loading error:', error);
  }
}

onMounted(runAll);
</script>

<template >
      <div v-if="loading" class="flex items-center justify-center min-h-screen">
        <div class="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
      </div>
      <div class="body-piling" v-if="!loading">
    <div class="wrapper">
        <MainHeader :cms="cms?.header" />
      
        <MainContent/>

        <Footer/>

      <div class="progress-nav">
        <ul id="menu">
          <li data-menuanchor="About" class="active"></li>
          <li data-menuanchor="Services"></li>
          <li data-menuanchor="Skills"></li>
          <li data-menuanchor="Resume"></li>
          <li data-menuanchor="Portfolio"></li>
          <li data-menuanchor="Clients"></li>
          <li data-menuanchor="Contact"></li>
        </ul>
      </div>
    </div>

    <!-- Modal for portfolio video details -->
    <div class="modal fade" id="portofolioVidDetail" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog d-flex justify-content-center" role="document">
        <div class="modal-content">
          <div class="embed-responsive embed-responsive-16by9">
            <iframe id="frame-yt" src="" allowfullscreen></iframe>
          </div>
          <div class="modal-body">
            <div id="portofolio-title"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- JavaScript files are now loaded with defer for non-critical blocking -->
    <!-- Removed jQuery fallback document.write -->
</div>
</template>

