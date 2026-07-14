import User from "./User.js";
import { hashPassword } from "./utils/hash.js";

export async function register(req, res) {
  try {
    const { email, password, userName } = req.body;
    console.log(email, password, userName);

    const exists = await User.findOne({ email });

    if (exists)
      return res.status(409).json({
        message: "User already exists",
      }
    
    );

    const user = await User.create({
      email,
      password: await hashPassword(password),
      userName
    });

    return res.status(201).json({
      message: "User created",
      userId: user._id,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
}

export async function login(req, res) {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select("+password");

  if (!user)
    return res.status(401).json({
      message: "Invalid credentials",
    });

  const valid = await comparePassword(password, user.password);

  if (!valid)
    return res.status(401).json({
      message: "Invalid credentials",
    });

  const accessToken = generateAccessToken(user);
  const refreshToken = generateRefreshToken(user);

  user.refreshToken = refreshToken;
  await user.save();

  res.json({
    accessToken,
    refreshToken,
  });
}
catch (err) {
  res.status(500).json({
    message: err.message,
  });
}
}
