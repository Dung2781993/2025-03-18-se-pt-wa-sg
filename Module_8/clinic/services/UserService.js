const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User, RefreshToken } = require("../models");

const SECRET_KEY = process.env.SECRET_KEY;

const generateAccessToken = (user) =>
  jwt.sign({ id: user.id, role: user.role }, SECRET_KEY, { expiresIn: "2h" });

const generateRefreshToken = (user) =>
  jwt.sign({ id: user.id }, SECRET_KEY, { expiresIn: "2h" });

const login = async (email, password) => {
  const user = await User.findOne({ where: { email, is_deleted: false } });
  if (!user) throw new Error("User not found");

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) throw new Error("Invalid password");

  const accessToken = generateAccessToken(user);
  const refreshToken = generateRefreshToken(user);

  await RefreshToken.create({
    token: refreshToken,
    user_id: user.id,
    expires_at: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
  });

  return {
    accessToken,
    refreshToken,
    user: {
      id: user.id,
      username: user.username,
      email: user.email,
      role: user.role,
    },
  };
};

const refresh = async (refreshToken) => {
  if (!refreshToken) throw new Error("No refresh token provided");

  const stored = await RefreshToken.findOne({ where: { token: refreshToken } });
  if (!stored) throw new Error("Refresh token not found or expired");

  const decoded = jwt.verify(refreshToken, SECRET_KEY);
  const user = await User.findByPk(decoded.id);

  return { accessToken: generateAccessToken(user) };
};

const logout = async (refreshToken, accessToken) => {
  await RefreshToken.destroy({ where: { token: refreshToken } });

  const decoded = jwt.decode(accessToken);
  if (!decoded || !decoded.exp) {
    throw new Error("Invalid access token");
  }

  const ttl = decoded.exp - Math.floor(Date.now() / 1000);
  if (ttl <= 0) {
    throw new Error("Access token already expired");
  }

  await redisClient.setEx(`blacklist:${accessToken}`, ttl, "1");
};

module.exports = {
  login,
  refresh,
  logout,
};
