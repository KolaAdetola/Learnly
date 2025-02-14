const User = require("../models/user.model");
const bcrypt = require("bcryptjs");
const generateToken = require("../utils/generateToken");
const signup = async (req, res) => {
  try {
    const { fullName, email, password, confirmPassword, member, createdAt } =
      req.body;
    if (!fullName || !email || !password || !confirmPassword || !member) {
      return res.status(400).json({ message: "please fill all the fields" });
    }
    if (password !== confirmPassword) {
      return res.status(400).json({ message: "password does not match" });
    }
    const userEmail = await User.findOne({ email });
    if (userEmail) {
      return res.status(400).json({ message: "Email already exists" });
    }
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return res.status(400).json({ message: "invalid email" });
    }
    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "password must be at least 6 characters" });
    }
    // if(email.length<6){
    //     return res.status(400).json({message:'username must be at least 6 characters'})
    // }
    if (fullName.length < 6) {
      return res
        .status(400)
        .json({ message: "full name must be at least 6 characters" });
    }
    if (fullName.length > 20) {
      return res
        .status(400)
        .json({ message: "full name must be less than 20 characters" });
    }
    function splitFullName(fullName) {
      const nameParts = fullName.trim().split(" ");
      const firstName = nameParts[0];
      const lastName = nameParts.slice(1).join(" ");

      return {
        firstName,
        lastName,
      };
    }
    const { firstName, lastName } = splitFullName(fullName);

    //hash password
    //10 is the number of rounds to hash the password
    const salt = await bcrypt.genSalt(6);
    const hashedPassword = await bcrypt.hash(password, 6);
    const adminColor = ["F0E4FA", "F8F1FD", "FCFAFE", "F4EFFB", "FBF8FE","BFA2D9", "A484C3", "8A69AC", "CBB6E0", "A993C6"] ;
    const staffColor = ["A855FF", "C080FF", "D9AAFF", "B277FF", "D1B1FF","6B23CC", "541A99", "3E1273", "7627CC", "5A1E99"] ;
    const studentColor = ["1F6FCC", "175599", "103D73", "277ACC", "1B5A99","5DB2FF", "85C6FF", "ADD9FF", "75BCFF", "A5D6FF"] ;
    let randomAdminColor = adminColor[Math.floor(Math.random() * adminColor.length)];
    let randomStaffColor2 = staffColor[Math.floor(Math.random() * staffColor.length)];
    let randomStudentColor3 = studentColor[Math.floor(Math.random() * studentColor.length)];
    const fontColor = (color) => {
      const lightShades = [
        "A855FF", "C080FF", "D9AAFF", "B277FF", "D1B1FF",
        "F0E4FA", "F8F1FD", "FCFAFE", "F4EFFB", "FBF8FE",
        "5DB2FF", "85C6FF", "ADD9FF", "75BCFF", "A5D6FF"
      ];
    
      return lightShades.includes(color) ? "#000" : "#FFF";
    };
    
    

    const adminProfilePic = `https://avatar.iran.liara.run/username?username=${firstName}+${lastName}&background=${randomAdminColor}&color=${fontColor(randomAdminColor)}`;
   const staffProfilePic = `https://avatar.iran.liara.run/username?username=${firstName}+${lastName}&background=${randomStaffColor2}&color=${fontColor(randomAdminColor)}`;
    const studentProfilePic = `https://avatar.iran.liara.run/username?username=${firstName}+${lastName}&background=${randomStudentColor3}&color=${fontColor(randomAdminColor)}`; 
    const now = new Date();
    now.setHours(now.getHours() + 1);
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, "0");
    const day = now.getDate().toString().padStart(2, "0");
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");
    const formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    const newUser = new User({
      fullName,
      email,
      password: hashedPassword,
      createdAt: formattedDateTime,
      member,
      profilePicture: member === "admin" ? adminProfilePic : member === "staff" ? staffProfilePic : studentProfilePic,
    });
    if (newUser) {
      await newUser.save();

      // Generate JWT token here

      generateToken(newUser._id, res);

      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        email: newUser.email,
        member: newUser.member,
        profilePicture: newUser.profilePicture,
        createdAt: newUser.createdAt,
        message: "user created successfully",
      });
      // console.log(profilePicture)
    } else {
      res.status(400).json({ message: "invalid user data" });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "internal server error" });
  }
};
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    const isPasswordCorrect = await bcrypt.compare(
      password,
      user?.password || ""
    );
    if (!user) {
      return res.status(400).json({ message: "user does not exist" });
    }
    //    if(!isPasswordCorrect){
    //     return res.status(400).json({message:'incorrect password'})
    //    }
    generateToken(user._id, res);
    res.status(200).json({
      _id: user._id,
      fullName: user.fullName,
      email: user.email,
      member: user.member,
      gender: user.gender,
      profilePicture: user.profilePicture,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "internal server error" });
  }
};
const logout = async (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "internal server error" });
  }
};

module.exports = { signup, login, logout };
