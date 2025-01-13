class hAPI{
    constructor(fields){
        this.fields = fields;
    }

    getCardValue(inputName){
        return this.fields[inputName];
    }
}

module.exports = hAPI;