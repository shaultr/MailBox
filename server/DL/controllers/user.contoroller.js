const userModel = require('../models/user.model')


async function create(data) {
    return await userModel.create(data)
}

async function read(filter, isPopulate){
    return await userModel.find(filter).populate(isPopulate ? {
        path: 'emails.email',
        populate: {
        path: 'msg',
        options: { sort: { _id: -1 }, limit: 1 }
        }
        } : '')
    
}


async function readOne(filter, isPopulate){
    return await userModel.findOne(filter).populate(isPopulate ? 'emails.email' :'')
    
}
async function update(id, data){
    return await userModel.findByIdAndUpdate(id, data, {new: true})
    
}
async function del(id){
    return await update(id, {isActive: true})

}


module.exports = {
    create,
    read,
    readOne,
    update,
    del
};