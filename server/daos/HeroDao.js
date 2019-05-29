const mongoose = require("mongoose");
const HeroModel = mongoose.model("HeroModel");

const createHero = async (name, universeId, role, pic, desc) => {
    const hero = new HeroModel({
        name: name,
        role: role,
        universeId: universeId,
        pic: pic,
        desc: desc
    });
    return await hero.save();
};

const getHeroByName = async (name) => {
    return await HeroModel.findOne({name: name});
};

const getAllHeros = async () => {
    return await HeroModel.find();
};

const deleteHero = async (hero) => {
    return await hero.remove();
};

const updateHero = async (hero, newName, newDesc) => {
    hero.name = newName;
    hero.desc = newDesc;

    return await hero.save();
};

module.exports = {
    createHero,
    getHeroByName,
    getAllHeros,
    updateHero,
    deleteHero
};
