<script lang="js" setup>
defineProps({
  cms: Object,
  loading: Boolean
})
</script>

<template>
<div id="content">

<div class="a-pagepiling full-page">

  <div class="section pp-scrollable slide slide-about a-slide-typed" data-name="about" id="About">
    <div class="slide-container">
      
      <div class="parallax" id="a-parallax">
        <div class="layer shape shape2" data-depth="0.4"><div class="inside animate-element delay4 bounceIn"></div></div>
        <div class="layer shape shape3" data-depth="0.5"><div class="inside animate-element delay5 bounceIn"></div></div>
        <div class="layer shape shape4" data-depth="0.7"><div class="inside animate-element delay4 bounceIn"></div></div>
        <div class="layer shape shape5" data-depth="0.9"><div class="inside animate-element delay5 bounceIn"></div></div>
        <div class="layer shape shape6" data-depth="0.2"><div class="inside animate-element delay6 bounceIn"></div></div>
        <div class="layer shape shape7" data-depth="0.3"><div class="inside animate-element delay3 bounceIn"></div></div>
        <div class="layer shape shape8" data-depth="0.5"><div class="inside animate-element delay8 bounceIn"></div></div>
        <div class="layer shape shape9" data-depth="0.5"><div class="inside animate-element delay9 bounceIn"></div></div>
        <div class="layer shape shape10" data-depth="0.2"><div class="inside animate-element delay7 bounceIn"></div></div>
        <div class="layer shape shape11" data-depth="0.3"><div class="inside animate-element delay8 bounceIn"></div></div>
        <div class="layer shape shape12" data-depth="0.2"><div class="inside animate-element delay9 bounceIn"></div></div>
        <div class="layer shape shape13" data-depth="0.2"><div class="inside animate-element delay10 bounceIn"></div></div>
        <div class="layer shape shape14" data-depth="0.2"><div class="inside animate-element delay11 bounceIn"></div></div>
        <div class="layer shape shape15" data-depth="0.2"><div class="inside animate-element delay12 bounceIn"></div></div>
        <div class="layer shape shape16" data-depth="0.1"><div class="inside animate-element delay13 bounceIn"></div></div>
        <div class="layer shape shape1" data-depth="0.6"><div class="inside animate-element delay4 bounceIn"></div></div>
      </div>
      <div class="container">
        <div class="row justify-content-center text-center">
          <div class="col-lg-8">
            <div class="animate-element delay5 fadeInUp">
              <div class="title-mini text-primary"></div>
              <h1 class="slide-title font-custom" id="text-about-1" v-html="cms?.header && cms?.header.title ? cms?.header.title : `Kami Membantu Perusahaan Anda Tumbuh Secara <span class='text-typed a-typed a-typed-about' data-text='Eksponensial' style='color:#ffffff'>Eksponensial</span><br />`">  </h1>
            </div>
            <div class="slide-descr animate-element delay7 fadeInUp" id="text-about-2" v-html="cms?.header?.description ? cms?.header?.description : `Kami Siap membantu Anda <strong>membangun Impian anda menjadi kenyataan</strong> dan <strong>mengembangkan jangkauan bisnis Anda.</strong> Kami membuat <strong>Aplikasi mobile, Website, Video, Animasi & 3D</strong> yang menarik, dan membuat bisnis anda lebih mudah dikenal.`"></div>
            <div class="slide-photo slide-photo-about">
              <div class="rounded-text">
                <svg viewBox="0 0 200 200">
                  <path id="textPath" d="M 85,0 A 85,85 0 0 1 -85,0 A 85,85 0 0 1 85,0" transform="translate(100,100)" fill="none" stroke-width="0"></path>
                  <g font-size="18.5px">
                    <text text-anchor="start">
                      <textPath xlink:href="#textPath" startOffset="0%">Aplikasi - Website  - Animasi- 3D - Editing Video</textPath>
                    </text>
                  </g>
                </svg>
              </div>
              <div class="inside"><img src="/assets/img/slide1.png" alt="" width="70%" /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="section pp-scrollable slide slide-services slide-dark slide-services a-slide-typed" data-name="services">
    <div class="slide-container">
    
      <div class="container">
        
        <div class="row align-items-center">
          <div class="col-md-5">
            <div class="animate-element delay5 fadeInUp">
              <div class="title-mini text-primary">Services</div>
              <div id="text-services-1">
                <h2 class="slide-title font-custom" 
                v-if="cms?.services?.title" v-html="cms.services.title"></h2>
                <h2 v-else class="slide-title font-custom">
                  <span class="text-typed a-typed a-typed-services" data-text="Buat Bisnis Anda" style="color:#ffffff"></span> lebih mudah
                </h2>
              </div>
            </div>
            <div class="slide-descr animate-element delay7 fadeInUp" id="text-services-2" v-html="cms?.services?.description ?
            cms?.services?.description :`Di era saat ini yg serba <strong>digital sudah saatnya semua bisnis memiliki eksistensi</strong> di dunia online.`"></div>
            <nav class="service-list animate-element delay9 fadeInUp">
              <ul class="">
                <li class="primary-link" v-for="service_list in cms?.services?.service_list?.split(',')"><a href="https://api.whatsapp.com/send?phone=6281930456886&text=Halo%20saya%20tertarik%20dengan%20jasa%20pembuatan%20aplikasi.">{{ service_list }}</a></li>
              </ul>
            </nav>
          </div>
          <div class="col-md-1"></div>
          <div class="col-md-6 pl-5">
            <div class="slide-photo slide-photo-services">
              <div class="inside"><img src="/assets/img/slide2.png" alt="" /></div>
              <div class="image-card card2-1 animate-element delay8 fadeInRight">
                <div class="image-card-body"><div class="inside"><img src="/assets/img/card2-1.png" alt="" /></div></div>
              </div>
              <div class="image-card card2-2 animate-element delay9 fadeInUp">
                <div class="image-card-body"><div class="inside"><img src="/assets/img/card2-2.png" alt="" /></div></div>
              </div>
              <div class="image-card card2-3 animate-element delay10 fadeInUp">
                <div class="image-card-body"><div class="inside"><img src="/assets/img/card2-3.png" alt="" /></div></div>
              </div>
              <div class="image-card image-card-dark card2-4 animate-element delay11 fadeInRight">
                <div class="image-card-body"><div class="inside"><img src="/assets/img/card2-4.png" alt="" /></div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="section pp-scrollable slide slide-portofolio a-slide-typed" data-name="portfolio" id="Portofolio">
    <div class="slide-container">
    
      <div class="slide-ornament"><div class="inside"></div></div>
      <div class="container">
        <div class="row justify-content-center text-center">
          <div class="col-lg-8 animate-element delay5 fadeInUp">
            <div class="title-mini text-primary">Portfolio</div>
            <h1 class="slide-title font-custom">Some of <span class="text-typed a-typed a-typed-portfolio" data-text=" works"style=color:#ffffff></span></h1>
          </div>
        </div>

       

        <div class="row ">
          <div class="col-lg-12 portofolio-container animate-element delay5 fadeInUp">
            <div class="row d-flex justify-content-center">
              <div class="col-md-4 col-sm-6 web item show" v-for="project in cms?.projects" :key="project?.id">
                <div class="portofolio-web">
                  <picture>
                    <source type="image/webp" srcset="/assets/img/porto/web/porto-web1.webp">
                    <img :src="`${project?.image}`" alt="" />
                  </picture>
                </div>
              </div>
              

            </div><!-- row -->
          </div><!-- portofolio-container -->
        </div><!-- row -->

      </div> 
    </div>
  </div>
</div>
</div>
</template>
