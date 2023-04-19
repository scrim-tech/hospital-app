const Validator = require('body-validator');

module.exports = {
    userUpdateValidationSchema:function(){
        return [      
            {
                name:'nom',stringType:Validator.StringType.Alpha,required:true
            },
            {
                name:"password",stringType:Validator.StringType.Alpha,minlength:4,maxlength:30,required:true
            }
        ];
    }
}