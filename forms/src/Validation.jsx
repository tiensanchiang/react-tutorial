import validator from "validator";

export default function ValidateData (data, rules){
    let errors = {};
    Object.keys(data).forEach(field => {
        if(rules.hasOwnProperty(field)){
            let fieldErrors = [];
            let val = data[field];
            val = val.toString();
            console.log("=====>>>"+ val+", " + typeof(val));

            if(rules[field].required && validator.isEmpty(val)){
                fieldErrors.push("Value Required");
            }

            if(!validator.isEmpty(val)){
                if( rules[field].minlength &&
                    !validator.isLength(val,rules[field].minlength)){
                    fieldErrors.push(`Enter at least ${rules[field].minlength} characters`);
                }
                if( rules[field].alpha && !validator.isAlpha(val)){
                    fieldErrors.push("Enter only letters");
                }
                if(rules[field].email && !validator.isEmail(val)){
                    fieldErrors.push("Enter a valid email address");
                }
            }
            if(fieldErrors.length > 0)
                errors[field] = fieldErrors;
        }
    });

    return errors;
}


