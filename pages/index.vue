<script lang="js" setup>
import { MainContent } from '#components';
import { onMounted } from 'vue';
const config = useRuntimeConfig()
const responseData = ref({'project':[],'header':[],'footer':[],'services':[]});
const loading = ref(true);
async function getData(url){
  const {data,error} = await useFetch(url);
  if(error.value || data?.value == null) {
    console.log(error.value);
  } else {
    return data.value[0];
  }
}
onMounted(async() => {
  const [headerData, footerData, servicesData, projectData] = await Promise.all([
    getData(`${config.public.apiBase}/public/headers`),
    getData(`${config.public.apiBase}/public/footers`),
    getData(`${config.public.apiBase}/public/services`),
    getData(`${config.public.apiBase}/public/projects`)
  ]);

  // Header
  console.log("HEADER");
  if (headerData?.value == null) {
    console.log(headerData?.value);
  } else {
    responseData.value.header = headerData.value[0];
  }

  // Footer
  console.log("FOOTER");
  if (footerData?.value == null) {
    console.log(footerData?.value);
  } else {
    responseData.value.footer = footerData.value[0];
  }

  // Services
  console.log("SERVICES");
  if (servicesData?.value == null) {
    console.log(servicesData?.value);
  } else {
    responseData.value.services = servicesData.value[0];
  }

  // Projects
  console.log("PROJECTS");
  if (projectData?.value == null) {
    console.log(projectData?.value);
  } else {
    responseData.value.project = projectData.value[0];
  }


  // Load all the scripts
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
  loading.value = false;
});
</script>

<template>
  <div v-if="loading" class="flex items-center justify-center min-h-screen">
    <div
      class="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"
    ></div>
  </div>
  <div class="body-piling" v-if="!loading">
    <div class="wrapper">
      <MainHeader :cms="responseData?.header" />

      <!-- <div id="content">
        <div class="a-pagepiling full-page">
          <MainAbout />

          <MainServices />

          <MainSkills />

          <MainResume />

          <MainPortfolio />

          <MainClients />

          <MainContact />
        </div>
      </div> -->

      <MainContent :cms="responseData" />

      <Footer :cms="responseData?.footer" />

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
    <div
      class="modal fade"
      id="portofolioVidDetail"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
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
