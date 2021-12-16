// local reviews data
const reviews = [
    {
      id: 1,
      name: "Dio Brando",
      job: "Vampire, conquerer of the WARUDO",
      img:
        "https://pbs.twimg.com/profile_images/1357167911119560710/YWJibOwx_400x400.jpg",
      text:
        "This thing is massively appreciated by ME, DIO!",
    },
    {
      id: 2,
      name: "Saitama",
      job: "Hero",
      img:
        "https://www.animelab.com/blog/wp-content/uploads/2015/12/Saitama-1024x576.jpg",
      text:
        "Easy to use.",
    },
    {
      id: 3,
      name: "Donald Trump",
      job: "45th President",
      img:
        "https://variety.com/wp-content/uploads/2021/06/Donald-Trump.jpg",
      text:
        "Help me. I am trap in this website, please do not scroll away. I have not seen my family for 3 days. Hey what are you doing? I am THE PRESIDE-",
    },
    {
      id: 4,
      name: "bill anderson",
      job: "Chef at the krusty krab",
      img:
        "https://pyxis.nymag.com/v1/imgs/7aa/21a/c1de2c521f1519c6933fcf0d08e0a26fef-27-spongebob-squarepants.rsquare.w1200.jpg",
      text:
        "10/10 BAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHA",
    },
  ];
  
  // select items
  const img = document.getElementById("person-img");
  const author = document.getElementById("author");
  const job = document.getElementById("job");
  const info = document.getElementById("info");
  
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  const randomBtn = document.querySelector(".random-btn");
  
  
  // set starting item
  let currentItem = 0;
  
  // loaad initial item
  window.addEventListener("DOMContentLoaded", function() {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  }); 
  
  //show person based on item
  
  function showPerson(){
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  }
  
  // show next person
  
  nextBtn.addEventListener("click", function(){
    currentItem++;
    if(currentItem > reviews.length - 1){
      currentItem = 0;
    };
    showPerson(currentItem);
  });
  
  //show prev person
  
  prevBtn.addEventListener("click", function(){
    currentItem--;
    if(currentItem < 0){
      currentItem = reviews.length - 1;
    };
    showPerson(currentItem);
  });
  
  //show random person
  randomBtn.addEventListener("click", function(){
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson();
  });
  