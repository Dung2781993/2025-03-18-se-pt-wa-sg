const UserService = require("../services/UserService");

module.exports = {
  async login(req, res) {
    try {
      const { email, password } = req.body;
      const data = await UserService.login(email, password);
      res.json(data);
    } catch (err) {
      res.status(401).json({ error: err.message });
    }
  },

  async refreshToken(req, res) {
    try {
      const { refreshToken } = req.body;
      const data = await UserService.refresh(refreshToken);
      res.json(data);
    } catch (err) {
      res.status(401).json({ error: err.message });
    }
  },

  async logout(req, res) {
    try {
      const { refreshToken } = req.body;
      const authHeader = req.headers["authorization"];
      const accessToken = authHeader && authHeader.split(" ")[1];

      if (!refreshToken || !accessToken) {
        return res
          .status(400)
          .json({ error: "Both refresh and access tokens are required" });
      }

      console.log("Logging out with refresh token:", refreshToken);
      await UserService.logout(refreshToken, accessToken);
      res.json({ message: "Logged out successfully" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
};
