const place_dao = require('../daos/PlaceDao');

const createHero = async (name, universeId, role, pic, desc) => {
    const hero = await place_dao.createHero(name, universeId, role, pic, desc);

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

const createUniverse = async (name, universeId, role, pic, desc) => {
    const hero = await place_dao.createHero(name, universeId, role, pic, desc);

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

const createLocation = async (name, universeId, role, pic, desc) => {
    const hero = await place_dao.createHero(name, universeId, role, pic, desc);

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

const getAllPlaces = async () => {
    const places = await place_dao.getAllPlaces();
    if (!places) {
        return {
            isError: true,
            error: 'CANT_FIND'
        }
    } else {
        return {
            places: places
        }
    }
};

const getPlaceByName = async (projectName) => {
    const place = await place_dao.getPlaceByName(projectName);
    if (!place) {
        return {
            isError: true,
            error: 'CANT_FIND'
        }
    } else {
        return {
            place: place
        }
    }
};

const createPlace = async (name, address, lat, lng, pic, architector, style, desc) => {
    const place = await place_dao.createPlace(name, address, lat, lng, pic, architector, style, desc);

    console.log('this is supposed to be a model', place);

    if (!place) {
        return {
            isError: true,
            error: 'UNKNOWN_EXEPTION'
        }
    } else {
        return place
    }
};

const updatePlace = async (oldName, newName, newDesc) => {
    const place = await place_dao.getPlaceByName(oldName);
    if (!place){
        return {
            error: 'No Place Like This in a DataBase'
        }
    }

    const result = await place_dao.updatePlace(place, newName, newDesc);
    return place;
};

const deletePlace = async (name) => {
    const response = await place_dao.deletePlace(name);
    console.log('AFTER DELETE', response);

    if (!response) {
        return response;
    }
};

module.exports = {
    getPlaceByName,
    createHero,
    createUniverse,
    createLocation,
    getAllPlaces,
    updatePlace,
    deletePlace
};
