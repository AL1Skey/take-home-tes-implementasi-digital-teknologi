Gunakan usefetch di OnMounted dengan async await

<script lang="ts" setup>
import { onMounted } from 'vue';


const loading = ref(true);
onMounted(async() => {
  loading.value = false;
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
});
</script>