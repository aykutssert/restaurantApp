import axios from "axios";

const businessApi =  axios.create({
    baseURL:'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization:"Bearer BqCO05aq_nXQXQ9TMtO_vlCgfGL5GSLobILcnnOGd5J12TKtOXKNPX79VpbNb1ZMf5i5VTCfwQhAJf6NZuyx9COOt0lxkvMYjVSBr4nCBvCY6p4hp2H8PZMBWarhZXYx"
    }

})

export default businessApi;