// const NUM_API = "http://numbersapi.com";

// async function getNum(num) {

//   let $response = await $.getJSON(`${NUM_API}/${num}?json`)
//   console.log($response.text)
// }

// async function getNums(a, b, c) {

//   let p1Promise = $.getJSON(`${NUM_API}/${a}?json`);
//   let p2Promise = $.getJSON(`${NUM_API}/${b}?json`);
//   let p3Promise = $.getJSON(`${NUM_API}/${c}?json`);

//   let p1 = await p1Promise;
//   let p2 = await p2Promise;
//   let p3 = await p3Promise;

//   console.log(`The first fact is ${p1.text}`);
//   console.log(`The second fact is ${p2.text}`);
//   console.log(`The third fact is ${p3.text}`);

// }

// // getNums(30, 40, 50)

// async function getmultipleFacts(a) {

//   let p1Promise = $.getJSON(`${NUM_API}/${a}?json`);
//   let p2Promise = $.getJSON(`${NUM_API}/${a}?json`);
//   let p3Promise = $.getJSON(`${NUM_API}/${a}?json`);
//   let p4Promise = $.getJSON(`${NUM_API}/${a}?json`);

//   let p1 = await p1Promise;
//   let p2 = await p2Promise;
//   let p3 = await p3Promise;
//   let p4 = await p4Promise;

//   console.log(`The first fact is ${p1.text}`);
//   console.log(`The second fact is ${p2.text}`);
//   console.log(`The third fact is ${p3.text}`);
//   console.log(`The third fact is ${p4.text}`);

// }

// // getmultipleFacts(44)


const BASE_CARDS_API = "https://deckofcardsapi.com/api/deck"

async function shuffleDeck() {

  let promise = $.getJSON(`${BASE_CARDS_API}/new/shuffle/?deck_count=1`)
  let p1 = await promise

  console.log(p1.deck_id)

}




async function generateNewDeck() {

  let promise = $.getJSON(`${BASE_CARDS_API}/new/`)
  let p1 = await promise

  console.log(p1.deck_id)

}






$(function () {

  async function generateNewDeck() {

    let promise = $.getJSON(`${BASE_CARDS_API}/new/`);
    let p1 = await promise;

    let deck_id = p1.deck_id;
   
    $(".draw-card").on("click", async function () {
  
      await drawCard(deck_id);

    });

  }

  async function drawCard(deck_id) {
  
    let promise = $.getJSON(`${BASE_CARDS_API}/${deck_id}/draw/?count=1`)
    let p1 = await promise
  
    $(".card-stack").append(`<p>${p1.cards[0].value} of ${p1.cards[0].suit}</p>
                             <p>Cards remaining: ${p1.remaining}</p>`)
    console.log(`${p1.cards[0].value} of ${p1.cards[0].suit}`)
    console.log(`Cards remaining: ${p1.remaining}`)

    if (p1.remaining === 0) {
      $('button').remove()
    }
  }

  generateNewDeck()

});