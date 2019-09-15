<template>
  <div class="aboutSection About">
    <h1>Technologies</h1>
    <h3>Front End Frameworks</h3>
    <p>
      This website is a Vue app. I've always enjoyed using Vue. I've
      found it much more intuitive/concise than
      React/Angular so far.
    </p>
    <p>
      A lot of the functionality in this app is driven with Vuex. Prior to this project I actually
      hadn't used Vuex before. I'm happy to have learned it, it's simple, predictable, and powerful.
      Managing state between many components would have been a nightmare without it. The global
      state management/reactivity made it easy to design this website in a very modular fashion.
      Thanks Vuex!
    </p>

    <h3>Back End Frameworks</h3>
    <p>
      There's no back end, this is a static site. Originally, I was going to give users
      the option of logging in with Plaid to pre-fill the spend categories. I got that working
      (Plaid is a very friendly API), but I
      ended up not doing that because most
      people wouldn't want to give a random their bank account info.
      That functionality used an Express back end (it's still in the repo), using Docker/nginx to avoid CORS issues.
    </p>
    <h3>Database</h3>
    <p>
      This website uses a free, serverless, and easily scalable database called a client side .js file.
      I figured there weren't enough credit cards I wanted to put on the site to warrant
      a database, and everything else was static. There's also no back end, which is a pretty big issue
      for most databases.
    </p>
    <h3>
      <a target="_blank" href="https://jeffreyyang.me">Personal Website</a>
    </h3>
    <h3>
      <a target="_blank" href="https://github.com/jeffreyyang3/creditCardCompare">Source Code</a>
    </h3>
  </div>
</template>
<script>
export default {
  name: "techInfo"
};
</script>
