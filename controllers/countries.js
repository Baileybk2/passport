const express = require("express");
const router = express.Router();

const User = require("../models/user.js");

router.get("/", async (req, res) => {
  try {
    const currentUser = await User.findById(req.session.user._id);
    res.render("countries/index.ejs", {
      countries: currentUser.countries,
    });
  } catch (error) {
    console.log(error);
    res.redirect("/");
  }
});

router.get("/new", async (req, res) => {
  res.render("countries/new.ejs");
});

router.post("/", async (req, res) => {
  try {
    const currentUser = await User.findById(req.session.user._id);
    currentUser.countries.push(req.body);
    await currentUser.save();
    res.redirect(`/users/${currentUser._id}/countries`);
  } catch (error) {
    console.log(error);
    res.redirect("/");
  }
});

router.get("/:countryId", async (req, res) => {
  try {
    const currentUser = await User.findById(req.session.user._id);
    const country = currentUser.countries.id(req.params.countryId);
    res.render("countries/show.ejs", {
      country: country,
    });
  } catch (error) {
    console.log(error);
    res.redirect("/");
  }
});

router.get("/:countryId/edit", async (req, res) => {
  try {
    const currentUser = await User.findById(req.session.user._id);
    const country = currentUser.countries.id(req.params.countryId);
    res.render("countries/edit.ejs", {
      country: country,
    });
  } catch (error) {
    console.log(error);
    res.redirect("/");
  }
});

router.delete("/:countryId", async (req, res) => {
  try {
    const currentUser = await User.findById(req.session.user._id);
    currentUser.countries.id(req.params.countryId).deleteOne();
    await currentUser.save();
    res.redirect(`/users/${currentUser._id}/countries`);
  } catch (error) {
    console.log(error);
    res.redirect("/");
  }
});

router.put("/:countryId", async (req, res) => {
  try {
    const currentUser = await User.findById(req.session.user._id);
    const country = currentUser.countries.id(req.params.countryId);
    country.set(req.body);
    await currentUser.save();
    res.redirect(`/users/${currentUser._id}/countries/${req.params.countryId}`);
  } catch (error) {
    console.log(error);
    res.redirect("/");
  }
});

module.exports = router;
