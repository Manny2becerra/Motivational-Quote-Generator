var Quotes = [
  {
    quote:'"The greatest glory in living lies not in never falling, but in rising every time we fall."',
    author: '- Nelson Mandela'
  },
  {
    quote: '"The way to get started is to quit talking and begin doing."',
    author: '- Walt Disney'
  },
  {
    quote: `"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma... which is living with the results of other people's thinking."`,
    author: '- Steve Jobs'
  },
  {
    quote: '"If life were predictable it would cease to be life, and be without flavor."',
    author: '- Eleanor Roosevelt'
  },
  {
    quote: `"If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough."`,
    author: '- Oprah Winfrey'
  },
  {
    quote: `"If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success."`,
    author: '- James Cameron'
  },
  {
    quote: `"Life is what happens when you're busy making other plans."`,
    author: '- John Lennon'
  },
  {
    quote: `"Spread love everywhere you go. Let no one ever come to you without leaving happier."`,
    author: '- Mother Teresa'
  },
  {
    quote: `"When you reach the end of your rope, tie a knot in it and hang on."`,
    author: '- Frankilin D. Roosevelt'
  },
  {
    quote: `"Always remember that you are absolutely unique. Just like everyone else."`,
    author: '- Margaret Mead'
  },
  {
    quote: `"Don't judge each day by the harvest you reap but by the seeds that you plant."`,
    author: '- Robert Lewis Stevenson'
  },
  {
    quote: `"It is during our darkest moments that we must focus to see the light."`,
    author: '- Aristotle'
  },
  {
    quote: `"Love the life you live. Live the life you love."`,
    author: '- Bob Marley'
  },
  {
    quote: `It ain't about how hard you hit. It's about how hard you can get hit and keep moving forward.`,
    author: '- Rocky Balboa'
  },
  {
    quote: `"The only person you are destined to become is the person you decide to be."`,
    author: '- Ralp Waldo Emerson'
  },
  {
    quote: `"Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present."`,
    author: '- Master Oogway'
  },
];



var QuotesUsed = [];
var Select;
var Color = ['B', 'Y', 'G', 'H', 'T', 'L', 'K', 'P', 'F', 'S', 'N', 'O', 'Z', 'W', 'C', 'M'];
var ColorsUsed = [];
var ColorSelected;

function RandomNumber() {
    let RN =  Math.floor(Math.random()*15 + 1)
    return RN;
}



function getRandomQuote() {
  Select = RandomNumber();
  if (QuotesUsed.length === 16) {
    QuotesUsed = [];
  }
  while (QuotesUsed.includes(Select)) {
    Select = RandomNumber() + 1;
    if (Select == 16) {
      Select = RandomNumber() - 1;
    }
  }

  QuotesUsed.push(Select);
  return Select;
  }


function RandomColor() {
  ColorSelected = RandomNumber();

  if (ColorsUsed.length === 16) {
    ColorsUsed = [];
  }


  while (ColorsUsed.includes(ColorSelected)) {
    ColorSelected = RandomNumber() + 1;
    if (ColorSelected == 16) {
      ColorSelected = RandomNumber() - 1;
    }
  }

  ColorsUsed.push(ColorSelected);
  return ColorSelected;
}


console.log(ColorsUsed);
console.log(QuotesUsed);




function printQuote() {
  let QuoteSelected = getRandomQuote();
    console.log(QuotesUsed);
    return document.querySelector('main').innerHTML = `
      <main class = "${Color[RandomColor()]}">
        <h1>${Quotes[QuoteSelected].quote} </h1>
        <h2> ${Quotes[QuoteSelected].author} </h2>
          <button type = "button" onclick = "printQuote()">
            <p>New quote</p>
          </button>
        <script src = "scripts.js"> </script>
      </main>`;
}
