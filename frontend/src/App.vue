<template>
  <div>
    <!-- Nav bar -->
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <div class="container">
        <a class="navbar-brand float-left " href="/">Restoring Justice</a>
        <ul class="nav navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/create"
              >Create Client</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/view">View Clients</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/referral"
              >Create referral</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/view-referral"
              >View referrals</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/chart">View Charts</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/summary"
              >Summary Report</router-link
            >
          </li>
        </ul>
      </div>
    </nav>

    <!-- Router view -->
    <div class="container mt-5">
      <router-view></router-view>
    </div>
  </div>
</template>
