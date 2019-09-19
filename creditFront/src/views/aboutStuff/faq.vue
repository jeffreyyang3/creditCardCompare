<template>
  <div class="aboutSection About">
    <h1>Answers to important questions you might have</h1>

    <h3>Why is the card I'm looking for missing?</h3>
    <p>I left out cards that were:</p>
    <ul>
      <li>
        Effectively the same as others.
        For example, a lot of cards give
        $150 after $500 spend and 1.5% cash back on everything as their only category, but I only
        added the Capital One Quicksilver.
      </li>
      <li>Difficult to model accurately while keeping the tool simple.</li>
      <li>Not worth considering because of low/no rewards</li>
    </ul>
    <p>There are also a whole lot of cards out there. I probably missed it.</p>
    <h3>Where did the point/annual fee valuations come from?</h3>
    <p>
      I valued points based on the issuer recommended, readily available way to
      redeem points. For example, on the Chase/AmEx travel cards, I set the valuation to be
      the point value when redeeming for travel in the issuer portal. The cash back value is
      lower, but I figured that people who get travel cards would use them for travel.
      I also adjusted effective annual fee to account for annual travel credit if the
      credit was easy to use (I didn't include AmEx's incidentals credit).
      If my valuation isn't accurate for you, you can adjust the valuations in the modify tab!
    </p>
    <p>
      It's possible to get much more value for points and perks with more unique redemption options
      and spending. If this applies to you, you should adjust the card in the modify tab.
    </p>
    <h3>How can I know this information is correct?</h3>
    <p>
      You can't know for sure, I've always been pretty bad at math. It seems correct to me though.
      But if you want to check out the calculations, the logic is in the "cardToSeriesData"
      function
      <a
        href="https://github.com/jeffreyyang3/creditCardCompare/blob/master/creditFront/src/views/CBLine.vue"
        target="_blank"
      >here</a>, and the cards
      <a
        href="https://github.com/jeffreyyang3/creditCardCompare/blob/master/creditFront/src/data/cards.js"
        target="_blank"
      >here</a>
    </p>
    <h3>Why does this site look bad?</h3>
    <p>You're probably on mobile or the window is small. I haven't figured out that "responsive design" stuff yet.</p>
  </div>
</template>

<script>
export default {
  name: "faq"
};
</script>
