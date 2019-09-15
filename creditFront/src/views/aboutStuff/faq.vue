<template>
  <div class="aboutSection About">
    <h1>Answers to important questions you might have</h1>
    <h3>Where's Freedom/CIP/Discover It/similar?</h3>
    <p>
      It's really tough to value these rotating category cards because the categories change
      and often aren't known until the issuer decides to reveal them.
    </p>
    <h3>Where's (branded travel card)?</h3>
    <p>
      Branded cards generally focus on spending on the brand, and I felt that was too specific.
      I wanted to keep this tool very simple. I also didn't include cards that focused on
      less unique spend categories (US Bank Altitude Reserve, Chase Ink Cash) for that same reason.
    </p>
    <h3>Where's (other card)</h3>
    <p>
      I left out cards that were effectively the same as others.
      For example a lot of cards give
      150 dollars after 500 spend and 1.5% cash back on everything as their only category, but I only
      added the Capital One Quicksilver.
    </p>
    <p>
      I also left out cards that didn't earn rewards, and cards that earned a very low amount of
      rewards.
    </p>
    <h3>Where did the point/annual fee valuations come from?</h3>
    <p>
      I valued points based on the issuer recommended, readily available way to
      redeem points. For example, on the Chase/AmEx travel cards, I set the valuation to be
      the point value when redeeming for travel in the issuer portal. The cash back value is
      lower, but I figured that people who get travel cards would use them for travel.
      I also adjusted effective annual fee to account for annual travel credit if the
      credit was easy to use (I didn't include AmEx's incidentals credit).
    </p>
    <p>
      It's possible to get much more value for points and perks with more unique redemption options
      and spending. If this applies to you, you should adjust the card in the modify tab.
    </p>
    <h3>How can I know this information is correct?</h3>
    <p>
      You can't know for sure, I've always been pretty bad at math.
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
  </div>
</template>
<script>
export default {
  name: "faq"
};
</script>
