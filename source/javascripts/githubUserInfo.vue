<!-- source/js/GitHubUserInfo.vue -->
<template>
  <div class="github-user-info">
    <h1>{{ user.name }}</h1>
    <p>Username: {{ user.login }}</p>
    <p>Followers: {{ user.followers }}</p>
    <p>Following: {{ user.following }}</p>
    <p>Public Repositories: {{ user.public_repos }}</p>
    <!-- Add more user information fields as needed -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {},
    };
  },
  mounted() {
    this.fetchUserData();
  },
  methods: {
    async fetchUserData() {
      try {
        const response = await fetch('https://api.github.com/users/MiNombreEsPablo');
        if (response.ok) {
          this.user = await response.json();
        } else {
          console.error('Failed to fetch user data');
        }
      } catch (error) {
        console.error('An error occurred:', error);
      }
    },
  },
};
</script>
