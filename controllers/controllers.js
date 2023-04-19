import User from "../model/user.js";

// SAVING THE DATA BY THE USER
export const addData = async (req, res) => {
  const user = req.body;
  const newUser = new User(user);
  try {
    await newUser.save();
    res.status(200).json(newUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// GETTING THE USER DATA
export const getData = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// GETTING THE SINGLE USER DETAILS
export const singleData = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// UPDATING THE USER
export const editData = async (req, res) => {
  let data = req.body;
  let editUser = new User(data);
  try {
    await User.updateOne({ _id: req.params.id }, editUser);
    res.status(200).json(editUser);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// DELETE THE DATA
export const deleteData = async (req, res) => {
  try {
    await User.deleteOne({ _id: req.params.id });
    res.status(200).json({ message: "user has been deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
