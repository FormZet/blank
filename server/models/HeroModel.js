const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HeroSchema = new Schema({
    name: {type: String, required: true},
    pic: {type: String, required: true},
    role: {type: Boolean, required: true},
    desc: {type: String, required: true},
    universeId: {type: String, required: true}
});

HeroSchema.methods.get_public_data = function() {
    return {
        name: this.name,
        pic: this.pic,
        role: this.role,
        desc: this.desc,
        universeId: this.universeId
    };
};

module.exports = mongoose.model('HeroModel', HeroSchema);

