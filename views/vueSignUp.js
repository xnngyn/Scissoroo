const SignUpRules = new Vue({
    el: "#createAcc",

data:{

    errors: [],
    fname:null,
    lname:null,
    gdatum:null,
    strasse:null,
    hausnr:null,
    plz:null,
    stadt:null,
    email:null,
    pass:null,
    bool: false,
    bool1: true


},

methods: {

    checkForm: function (e) {
        if (this.fname && this.lname != null) { // && this.gdatum && this.strasse
            //&& this.hausnr && this.plz && this.stadt && this.email && this.pass
          return true;
        }

this.errors = [];

if (this.fname = null) {
    this.errors.push('FName required');
}

if (this.lname = null) {
    this.errors.push('LName required');
}

e.preventDefault();

}

},



computed:{

}

})