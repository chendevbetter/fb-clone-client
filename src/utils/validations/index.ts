export const validationHandler = (prop: string) => {

}

// should I define a few types of validations (e.g weak string validation, strong string validation)
// and then who says wether it needs to be a strong or a weak validation ?

// second option, more flexible - the validationHander caller decides how much validation to put
// e.g he passes the specific parameters he wants to be used

// another options is consutructing the validation on many small ones because I AM going to need
// additional validations on posts and stuff