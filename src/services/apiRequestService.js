import axios from 'axios/index';

const apiRequestService = {
  createHero: (newHero) => {
    return axios.post('http://localhost:3005/api/place', {
      name: newHero.name,
      address: newHero.address,
      lat: newHero.lat,
      lng: newHero.lng,
      style: newHero.style,
      architector: newHero.architector,
      pic: newHero.pic,
      desc: newHero.desc
    })
  },

  createHero: (data) => {
    return axios({
      method: 'post',
      url: 'http://localhost:3005/api/hero',
      data: data,
      config: { headers: {'Content-Type': 'multipart/form-data' }}
    })
  },


  getHeros: () => {
    return axios.get('http://localhost:3005/api/place/all');
  },

  getHeroByName: (name) => {
    return axios.get('http://localhost:3005/api/place', {
      params: {
        name: name
      }
    });
  },

  updateHeroData: (newData) => {
    return axios.put('http://localhost:3005/api/place', {
      oldName: newData.oldName,
      newName: newData.newName,
      newDesc: newData.newDesc
    });
  },

  deleteHero: (name) => {
    return axios.delete('http://localhost:3005/api/place', {
      params: {
        name: name
      }
    });
  },


};

export default apiRequestService;
