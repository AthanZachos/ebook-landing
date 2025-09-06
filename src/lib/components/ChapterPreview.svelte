<script>
  const chapters = [
    {
      number: 1,
      title: "Navigating the Belgian Bureaucracy",
      strapline: "Understanding Visas, Residency, and Legal Essentials",
      excerpt:
      "Moving to Belgium involves navigating a set of administrative processes that can feel complex at first. This chapter breaks down the essential steps required to secure your visa, establish residency, and handle other legal formalities. Whether you’re planning a short-term stay or seeking permanent residency, understanding Belgium’s legal framework is crucial. We’ll explore the different types of visas and residence permits, and provide tips on how to streamline your application process. Additionally, this chapter covers essential documentation, such as registering with your local commune/gemeente (town hall) and obtaining a National Register Number, which unlocks access to many services in Belgium. We’ll also delve into the process of municipal registration and the importance of understanding the tax and social security implications of your move. Whether you’re a retiree, a digital nomad, or someone relocating for work, this chapter will guide you through the paperwork and official procedures with practical advice and insider tips, ensuring that you’re legally prepared for your new life in Belgium.",
      },
      {
      number: 2,
      title: "Finding Your Dream Home in Belgium",
      strapline: "From Historic Townhouses to Modern Apartments: Where and How to Live",
      excerpt: "Belgium offers a diverse array of living options, from medieval city centers to quiet suburban neighborhoods and countryside villages. This chapter is your guide to finding the perfect home that suits your lifestyle and budget. We’ll start by exploring Belgium’s most popular areas for expats, highlighting the unique qualities of each—from the international vibe of Brussels to the creative energy of Antwerp, the charm of Ghent and Bruges, and the French-speaking culture of Liège and the Walloon region. Understanding the local property market is key. We’ll discuss the pros and cons of renting versus buying, and provide practical advice on how to navigate Belgium’s real estate landscape. You’ll learn about common property types, from compact city apartments to classic townhouses, and the steps involved in securing a lease or purchase. We’ll also cover important considerations such as proximity to public transport, amenities, and international schools. This chapter will equip you with the knowledge to make an informed decision, ensuring that your new home in Belgium meets your expectations and provides a comfortable base for your new life.",
      },
      {
      number: 3,
      title: "Mastering the Belgian Job Market",
      strapline: "Strategies for Employment and Freelancing in a Multilingual Culture",
      excerpt: "Finding a job in Belgium can be a challenging but rewarding experience, especially if you’re not familiar with the local job market and work culture. This chapter provides a comprehensive overview of the employment landscape in Belgium, offering strategies to help you secure a job or establish a successful freelance career. We’ll start by examining sectors with strong opportunities for expats, such as EU institutions and public affairs in Brussels, logistics and chemicals around the Port of Antwerp, technology and startups in major cities, pharmaceuticals, education, and healthcare. You’ll learn how to tailor your CV and cover letter to meet Belgian expectations, and we’ll provide tips on how to network effectively in a country where multilingualism (Dutch, French, and German) is a valuable asset. For those considering freelancing, we’ll explore the legal basics of becoming self-employed (indépendant/zelfstandige), including registering your business, obtaining a VAT number, and arranging social contributions through a social insurance fund. Additionally, we’ll discuss the benefits of improving your French or Dutch to enhance your job prospects and integrate into the workplace. Whether you’re looking to climb the corporate ladder, start a business, or work remotely, this chapter offers practical insights to help you navigate the Belgian job market successfully.",
      },
      {
      number: 4,
      title: "Embracing the Belgian Lifestyle",
      strapline: "Cultural Norms, Social Etiquette, and Making New Connections",
      excerpt: "Moving to Belgium isn’t just about changing your location; it’s about immersing yourself in a rich, multilingual way of life. This chapter explores the Belgian lifestyle, offering insights into cultural norms, social etiquette, and how to make meaningful connections in your new home. We’ll discuss the importance of community and local traditions, from neighborhood markets and weekend “kermis” fairs to festivals and cultural events. You’ll learn how daily life can vary across regions, and how to navigate social etiquette in cafés, brasseries, and workplaces. We’ll also touch on practical rhythms of life—like efficient public transport, cycling culture, and a strong work–life balance. Additionally, we’ll offer tips on building a social network through language classes (French or Dutch), expat groups, volunteering, and local hobbies and sports. By the end of this chapter, you’ll be well-prepared to embrace the welcoming, communal, and distinctly Belgian lifestyle.",
      },
      {
      number: 5,
      title: "Budgeting and Finances in Belgium",
      strapline: "Managing Costs, Taxes, and Banking in Your New Home",
      excerpt: "Successfully managing your finances is crucial to enjoying a stress-free life in Belgium. This chapter provides practical guidance on how to budget for your new life, manage your expenses, and navigate Belgium’s financial systems. We’ll start by discussing the cost of living in different parts of the country, from the higher costs in Brussels and Antwerp to more affordable mid-sized cities and towns. You’ll learn how to create a realistic budget that covers essentials such as housing, utilities, groceries, transport, and healthcare—while also leaving room to enjoy Belgium’s renowned food culture and cultural activities. We’ll delve into the Belgian banking system, offering tips on opening a bank account, understanding common payment methods, and choosing financial products. Taxation is another key area we’ll cover, with explanations of resident vs. non-resident taxation and the interplay of federal, regional, and communal taxes, plus how double-tax treaties might apply. Whether you’re planning to retire, work, or invest in Belgium, this chapter will equip you with the financial knowledge to make the most of your resources and enjoy a comfortable life in your new home.",
      },
  ];

  let selectedChapterNumber = $state(1);
  let selectedChapter = $derived(chapters.find((chapter) => chapter.number === selectedChapterNumber))
  const selectChapter = (chapter) => {
    selectedChapterNumber = chapter.number;
  }

</script>

<section class="landing-page-section default-margin">
  <h2 class="mb-l">What you' re getting</h2>
  <div class="chapter-container">
    <ul>
      {#each chapters as chapter}
        <li>
          <button 
            class="chapter-title"  
            class:selected-chapter-title={selectedChapterNumber === chapter.number} 
            aria-controls={`chapter-info-${chapter.number}`} 
            aria-expanded={selectedChapterNumber === chapter.number ? 'true' : 'false'}
            onclick={() => selectChapter(chapter)}
            >
            <h3>{chapter.number}: {chapter.title}</h3>
          </button>

        </li>
      {/each}
    </ul>
    <div class="chapter-info">
      <h3 class="chapter-strapline italic mb-s">
        {selectedChapter.title}
      </h3>
      <p class="chapter-details">
        {selectedChapter.excerpt}
      </p>
    </div>
  </div>
</section>

<style>

  .chapter-container {
    display: flex;
    justify-content: space-between;
  }

  .chapter-container ul {
    width: 40%;
  }

  .chapter-info {
    width: 55%;
  }

  .chapter-title {
    border-bottom: 1px solid grey;
    width: 100%;
    display: block;
    padding: 12px;
    text-align: left;
  }

  .chapter-details{
    min-height: 550px;
  }

  .selected-chapter-title {
    background-color: black;
    border: none;
    color: white;
    box-shadow:
      0 4px 6px rgba(0, 0, 0, 0.1),
      0 1px 3px rgba(0, 0, 0, 0.08);
  }
</style>
