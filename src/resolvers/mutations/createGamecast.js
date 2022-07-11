const { ApolloError } = require("apollo-server");

module.exports = async (_, {input}, {models}) => {

    try{
        newGamecast = await models.Gamecast.create(input);
        return newGamecast
    }
    catch(e){
        throw new ApolloError(e)
    }
};