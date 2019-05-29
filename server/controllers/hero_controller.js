const hero_dao = require('../daos/HeroDao');

const createHero = async (name, universeId, role, pic, desc) => {
    const hero = await hero_dao.createHero(name, universeId, role, pic, desc);

    console.log('this is supposed to be a model', hero);

    if (!hero) {
        return {
            isError: true,
            error: 'UNKNOWN_EXEPTION'
        }
    } else {
        return hero
    }
};

const getAllHeros = async () => {
    const heroes = await hero_dao.getAllHeros();
    if (!heroes) {
        return {
            isError: true,
            error: 'CANT_FIND'
        }
    } else {
        return {
            heroes: heroes
        }
    }
};

const getHeroByName = async (projectName) => {
    const hero = await hero_dao.getHeroByName(projectName);
    if (!hero) {
        return {
            isError: true,
            error: 'CANT_FIND'
        }
    } else {
        return {
            hero: hero
        }
    }
};

const createHero = async (name, address, lat, lng, pic, architector, style, desc) => {
    const hero = await hero_dao.createHero(name, address, lat, lng, pic, architector, style, desc);

    console.log('this is supposed to be a model', hero);

    if (!hero) {
        return {
            isError: true,
            error: 'UNKNOWN_EXEPTION'
        }
    } else {
        return hero
    }
};

const updateHero = async (oldName, newName, newDesc) => {
    const hero = await hero_dao.getHeroByName(oldName);
    if (!hero){
        return {
            error: 'No Hero Like This in a DataBase'
        }
    }

    const result = await hero_dao.updateHero(hero, newName, newDesc);
    return hero;
};

const deleteHero = async (name) => {
    const response = await hero_dao.deleteHero(name);
    console.log('AFTER DELETE', response);

    if (!response) {
        return response;
    }
};

module.exports = {
    getHeroByName,
    createHero,
    getAllHeros,
    updateHero,
    deleteHero
};
