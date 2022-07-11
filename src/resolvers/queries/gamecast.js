module.exports = async (_, {}, {models}) => {
    return await models.Gamecast.find();
}