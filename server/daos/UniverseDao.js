const mongoose = require("mongoose");
const HeroModel = mongoose.model("HeroModel");

const createHero = async (name, address, lat, lng, pic, architector, style, desc) => {
    const place = new HeroModel({
        name: name,
        address: address,
        lat: lat,
        lng: lng,
        style: style,
        architector: architector,
        pic: pic,
        desc: desc
    });
    return await place.save();
};

const getHeroByName = async (name) => {
    return await HeroModel.findOne({name: name});
};

const getAllHeros = async () => {
    return await HeroModel.find();
};

const deleteHero = async (place) => {
    return await place.remove();
};

const updateHero = async (place, newName, newDesc) => {
    place.name = newName;
    place.desc = newDesc;

    return await place.save();
};

module.exports = {
    createHero,
    getHeroByName,
    getAllHeros,
    updateHero,
    deleteHero
};
