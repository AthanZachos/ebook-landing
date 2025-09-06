<script>
  import authorPic from "$assets/prof_pic.jpeg"
</script>

<section class="landing-page-section">
  <h2 class="mb-l">About the author</h2>
  <div class="author-container">
    <div class="author-text">
      <p class="mb-xs">
        Athanasios Zachos is a seasoned expatriate with over seven years of
        experience living in Belgium. Originally from Chalkida, Zach left behind
        the limitations he faced in Greece to embrace a more fulfilling life in
        the heart of Europe. Through his own journey, he has navigated
        the challenges of securing visas, finding the perfect home, and adapting
        to a multilingual culture (Dutch, French, and German), making him an
        expert in the field of relocation.
        </p>
        <p>
        Zach's practical advice is rooted in real-life experience, having
        learned firsthand the intricacies of moving to a new country. His goal
        is to help others avoid common pitfalls and make their transition to
        life in Belgium as smooth as possible. When not sharing his expertise,
        Zach enjoys exploring Belgium's rich culture and history—from Brussels to Ghent and Bruges—fully embracing
        the lifestyle he once dreamed of.
      </p>
    </div>
    <img src={authorPic} alt="Author Athanasios Zachos" />
  </div>
</section>

<style>
  .author-container {
    display: flex;
    justify-content: space-between;
  }

  .author-container img {
    width: 40%;
    border: 6px solid black;
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.5);
  }

  .author-text {
    width: 55%;
  }

  /* .author-text p:not(:last-of-type) {
    margin-bottom: 8px;
  } */
</style>
