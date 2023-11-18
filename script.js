const Slider = () => {
  const slideRef = document.createElement("div");
  const loadingProgress = 0;
  let intervalId;

  const handleClickNext = () => {
    let items = slideRef.querySelectorAll(".item");
    slideRef.appendChild(items[0]);
  };

  const handleClickPrev = () => {
    let items = slideRef.querySelectorAll(".item");
    slideRef.prepend(items[items.length - 1]);
  };

const startAutoTransition = () => {
    intervalId = setInterval(handleClickNext, 5000);
  };

  const stopAutoTransition = () => {
    clearInterval(intervalId);
  };

  const data = [
    {
      id: 1,
      imgUrl:
        "https://wallpapercave.com/wp/wp7474381.jpg",
      name: "THANK YOU FOR MAKING OUR CHILDHOOD MEMORABLE",
    },
    {
      id: 2,
      imgUrl:
        "https://wallpapercave.com/wp/YdO66Xi.jpg",
      name: "THANK YOU FOR MAKING OUR CHILDHOOD MEMORABLE",
    },
    {
      id: 3,
      imgUrl:
        "https://wallpapercave.com/wp/wp2726558.jpg",
      name: "THANK YOU FOR MAKING OUR CHILDHOOD MEMORABLE",
    },
    {
      id: 4,
      imgUrl:
        "https://wallpapercave.com/wp/Cru8zXh.jpg",
      name: "THANK YOU FOR MAKING OUR CHILDHOOD MEMORABLE",
    },
    {
      id: 5,
      imgUrl:
        "https://wallpapercave.com/wp/wp2782651.jpg",
      name: "THANK YOU FOR MAKING OUR CHILDHOOD MEMORABLE",
    },
    
  ];

  const container = document.createElement("div");
  container.classList.add("container");

  const loadbar = document.createElement("div");
  loadbar.classList.add("loadbar");
  loadbar.style.width = `${loadingProgress}%`;

  container.appendChild(loadbar);

  container.appendChild(slideRef);

  data.forEach((item) => {
    const slideItem = document.createElement("div");
    slideItem.classList.add("item");
    slideItem.style.backgroundImage = `url(${item.imgUrl})`;

    const content = document.createElement("div");
    content.classList.add("content");

    const name = document.createElement("div");
    name.classList.add("name");
    name.textContent = item.name;

    const des = document.createElement("div");
    des.classList.add("des");
    des.textContent = item.desc;

    const button = document.createElement("button");

    content.appendChild(name);
    content.appendChild(des);
    content.appendChild(button);
    slideItem.appendChild(content);
    slideRef.appendChild(slideItem);
 });
    const buttons = document.createElement("div");
    buttons.classList.add("buttons");

    const prevButton = document.createElement("button");
    prevButton.id = "prev";
    prevButton.addEventListener("click", () => {
      stopAutoTransition();
      handleClickPrev();
    });

    const prevIcon = document.createElement("i");
    prevIcon.className = "fa fa-angle-left";
    prevButton.appendChild(prevIcon);

    const nextButton = document.createElement("button");
    nextButton.id = "next";
    nextButton.addEventListener("click", () => {
      stopAutoTransition();
      handleClickNext();
    });

    const nextIcon =  document.createElement("i");
    nextIcon.className ="fa fa-angle-right";
    nextButton.appendChild(nextIcon);

    buttons.appendChild(prevButton)
    buttons.appendChild(nextButton)
    container.appendChild(buttons);
  
  setTimeout(startAutoTransition, 3000);

// Stop automatic transition when mouse enters the slider container
container.addEventListener("mouseenter", stopAutoTransition);

// Resume automatic transition when mouse leaves the slider container
container.addEventListener("mouseleave", startAutoTransition);

document.getElementById("root").appendChild(container);
};

Slider();
