import jwt from 'jsonwebtoken';
import axios from 'axios';
import User from '../models/datamoduls.js'

// API Route to Fetch and Store Users
export const Fetchdata = async (req, res) => {
  try {
    // Fetch data from API
    const response = await axios.get("https://reqres.in/api/users?page=3");

    // Extract user data
    const users = response.data.data.map(user => ({
      id: user.id,
      email: user.email,
      first_name: user.first_name,
      last_name: user.last_name,
      avatar: user.avatar, // Store avatar URL
    }));


    for (const user of users) {
      await User.updateOne({ id: user.id }, { $set: user }, { upsert: true });
    }

    res.json({ message: "Users stored successfully",users });
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};


// finde all users data 

export const allData = async (req , res) => {

  try {

    const find = await User.find({});
     if (!find) {
      res.send({ success: false, message: "some details missing." })
      
     }
     res.send({ success:true, message: "All details.",find })

    
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
    
}

// userLogin api

export const login = async (req, res) => {

  const { email, password } = req.body;

  if (!email || !password) {

    res.send({ success: false, message: "some details missing." })
  }

  try {

    if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASS) {

      const token = jwt.sign({ email, password }, process.env.ADMIN_SEC);

      res.send({ success: true, message: "Login successfully.", token })
    } else {
      console.log("error");
      res.send({ success: false, message: "error." })

    }


  } catch (error) {
    console.log(error);
    res.send({ success: false, message: "all code error." })


  }
}

export const deldata = async (req , res) => {

  const userId = req.params.id

  try {

    const find = await User.findByIdAndDelete(userId);

    if (!find) {
      res.send({ success: false, message: "canot delete" })
      
    }

    res.send({ success:true, message: "deleted successfully." })


    
  } catch (error) {

    console.log(error);
    res.send({ success: false, message: "all code error." })

    
  }



}

// update user

export const update = async (req, res) => {

  const userId = req.params.id


  const { email, first_name, last_name } = req.body;

  if (!email || !first_name || !last_name) {

    res.send({ success: false, message: "some details missing" })
  }


  try {

    const newdata = await User.findByIdAndUpdate(userId, { email, first_name, last_name });
    if (!newdata) {

      res.send({ success: false, message: "user Not" })

    }
    res.send({ success: true, message: "updating successfully", newdata })


  } catch (error) {
    console.log(error);
    res.send({ success: false, message: "all code error." })

  }
}