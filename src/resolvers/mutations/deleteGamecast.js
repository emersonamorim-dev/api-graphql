const { ApolloError } = require("apollo-server");

module.exports = async (_, {id}, {models}) => {
    
    const deleteGamecast = await models.Gamecast.deleteOne({_id: id})

    if(deleteGamecast.deleteCount) return{id: id}

    else throw new ApolloError(`Failed to delete address`);

};