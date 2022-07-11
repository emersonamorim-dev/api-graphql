const { ApolloError } = require("apollo-server");

module.exports = async (_, {id, input}, {models}) => {

    try {
        const gamecastToUpdate = await models.Gamecast.findOne({_id: id});

        if(!gamecastToUpdate) throw new ApolloError(`Could not find gamecast with id: '${id}.`,400);

        Object.keys(input).forEach(value => {
            gamecastToUpdate[value] = input[value];
        });

        const updateGamecast = await gamecastToUpdate.save();

        return updateGamecast

    } catch (e) {
        throw new ApolloError(e)
    }
};