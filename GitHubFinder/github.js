class Github {
  constructor() {
    this.config = {
      headers: {
        Authorization: "token 66923e3b1c3a04bf3f23e0ae81782ab5b1ed1099",
      },
    };
    this.repos_count = 5;
    this.repos_sort = "created:asc";
  }
  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}`,
      this.config
    );

    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}`,
      this.config
    );

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile,
      repos,
    };
  }
}
