<template>
    <div class="app-wrapper">
<!-- 
    <div class="loader-wrapper">
      <div class="loader_16"></div>
    </div> -->

    <!-- Menu Navigation starts -->
     <Navbar/>
    <!-- Menu Navigation ends -->

    <div class="app-content">
      <div class="">

        <!-- Header Section starts -->
          <Header/>
        <!-- Header Section ends -->

        <!-- Body main section starts -->
        <main>
          <div class="container-fluid">
               <div class="row">

                   <router-view/>
               </div>

          </div>
        </main>
      </div>
    </div>
    <!-- Body main section ends -->


    <!-- tap on top -->
    <div class="go-top">
      <span class="progress-value">
        <i class="ti ti-arrow-up"></i>
      </span>
    </div>

    <!-- Footer Section starts-->
    <footer>
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-9 col-12">
            <ul class="footer-text">
              <li>
                <p class="mb-0">Copyright © 2024 ra-admin. All rights reserved 💖</p>
              </li>
              <li> <a href="#"> V1.0.0 </a></li>
            </ul>
          </div>
          <div class="col-md-3">
            <ul class="footer-text text-end">
              <li> <a href="document.html"> Need Help <i class="ti ti-help"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
    <!-- Footer Section ends-->
  </div>

  <!-- modal -->

  <div class="modal" tabindex="-1" id="welcomeCard" data-bs-backdrop="static">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content welcome-card">

        <div class="modal-body p-0">
          <div class="text-center position-relative welcome-card-content z-1 p-3">
            <div class="text-end">
              <i class="ti ti-x fs-5 text-dark f-w-600" data-bs-dismiss="modal"></i>
            </div>
            <h2 class="f-w-600"><span>Welcome !</span>👋 </h2>
            <h6 class="f-s-15 text-dark f-w-500 mx-0 mx-sm-5"> Start Multipurpose, clean modern responsive bootstrap 5 admin template </h6>

            <div>
              <img src="./assets//images/modals/welcome-1.png" alt="img" class=" img-fluid">
            </div>
            <div class="mt-3 mb-4">
              <button type="button" class="btn btn-primary text-white btn-lg" data-bs-dismiss="modal">Let's
                Started <i class="ti ti-chevrons-right"></i> </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>

  <!--customizer-->
  <div id="customizer"></div>

      
</template>

<script setup>
import Footer from './Footer.vue';
import Header from './Header.vue';
import Navbar from './Navbar.vue';




</script>

<style>

</style>