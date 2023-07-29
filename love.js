var c = 0;

var when = [
  "a year full of adventure, like a rollercoaster ride with love as the seatbelt!",
  "endless surprises and pleasant plot twists in the story of your life!",
  "an overflowing cup of joy, with love, success, and happiness spilling over abundantly!",
  "a college journey filled with literary adventures and linguistic triumphs!",
  "height like a skyscraper, so you can see the world from a whole new perspective!",
  "a cuteness that radiates like a thousand sunbeams, lighting up every room!",
  "endless blessings for your caring and genuine heart, which touches lives like magic!",
  "a big, warm hug from your loving parents, who are so proud of the wonderful daughter they raised!",
  "countless episodes of SpongeBob to keep you entertained and smiling!",
  "a world painted in the shades of your favorite purple, reflecting your unique and vibrant personality!",
  "more stages and plays for your melodious voice to shine, captivating hearts with every note!",
  "a beauty that not only lies in your looks but also in your kind and loving heart!",
  "a reflection in the mirror that always reminds you of how incredibly pretty you are, inside and out!",
  'to be good at your talent for stirring my emotions with your "what if\'s," making me overthink!',
  "a memory so powerful, you can effortlessly recite every meme you've seen on social media xD",
  "a paved road of success, just like you drive Johnson in Mobile Legends!",
  "endless victories and achievements, both in-game and in life.",
  "a home filled with love, warmth, and the comforting feeling of being surrounded by those who care.",
  "a love story with all the elements of a perfect fairytale, just like you've always wanted!",
  "a love as perfect as you, the girl I've always dreamed of having by my side!",
  "a lifetime of happiness, love, and laughter with those who hold you dear!",
];

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

// shuffle on start
$(function () {
  shuffle(when);
});

$(document).click(function (e) {
  if (e.button == 0) {
    $("<p>" + when[c] + "</p>")
      .hide()
      .prependTo("#when-you")
      .fadeIn(2000);

    c++;


    if (c == when.length) {
      $(
        "<p>the best in the whole universe! <br /> <br />🎂🍰🧁🥳🎈🎉🎊🎁👑💐🌷😘 <br/> <br/> Happy Birthday Chriselle!<br/><br/>✧❁❁✧✿✿✧❁❁✧✧❁❁✧✿✿✧❁❁✧✧❁❁✧✿✿✧❁❁✧✧❁❁✧✿✿✧❁❁✧</p>"
      )
        .hide()
        .prependTo("#when-you")
        .fadeIn(2000);

      $("body").css("background", "#9932CC");
      $("#g p").css("color", "#fff");

      $(document).unbind("click");
    }
  }
});
