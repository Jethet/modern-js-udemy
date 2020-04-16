class Github {
  constructor() {
    this.config = {
      headers: {
        Authorization: "token 66923e3b1c3a04bf3f23e0ae81782ab5b1ed1099",
      },
    };
  }
  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}`,
      this.config
    );

    const profile = await profileResponse.json();

    return {
      profile
    };
  }
}
