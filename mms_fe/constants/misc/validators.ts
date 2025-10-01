class Validators {
    static General = /.+/;

    static Password = /^.{6,}/;

    static Email = /^[a-zA-Z0-9_.+-]+@[a-z]+\.[a-z]{3,}(\.[a-z]{2,})?$/;

    static OTP = /^[\d]{6}$/
}

export default Validators;