const ResiterSchema = require("../model/ResiterModel");

const ResiterController = async (req, res) => {
  try {
    const { name, username, password, setpassword } = req.body;

    if (password !== setpassword) {
      return res.status(400).json({
        success: false,
        message: "Passwords do not match",
      });
    }

    const usernameFound = await ResiterSchema.find({ username });

    if (usernameFound.length != 0) {
      return res.status(400).json({
        success: false,
        message: "Username is Already Used",
      });
    }

    const response = await ResiterSchema.create({
      name,
      username,
      password,
      setpassword,
    });

    res.status(201).json({
      success: true,
      data: response,
      message: "User registered successfully",
    });
  } catch (error) {
    console.error("Error registering user:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

module.exports = ResiterController;
