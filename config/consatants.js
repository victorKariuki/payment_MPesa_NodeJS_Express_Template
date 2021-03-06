const CONSTANTS = {
  VALIDATION: {
    PASSWORD: /.{6,}/,
    PRICE: /^[1-9][0-9]*\.[0-9]{2}$/i,
    PASSWORD    : /(?=.*[0-9@$%&*!^()+=-])[0-9a-zA-Z!]{6,40}/,
    EMAIL_REGEXP:
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    OBJECT_ID: /^[0-9a-fA-F]{24}$/,
    VERSION: /^(\d+\.)?(\d+\.)?(\*|\d+)$/,
    SPEC_SYMBOLS: /[-[\]{}()*+?`"<>.,\\/^$|#\s]/g,
    PHONE: /^[0-9\-\+]{9,13}$/,
    SMS_CODE: /^[0-9]{4}$/,
    RESOLUTION: /(^auto$)|(^\d{1,5}x\d{1,5}$)/,
    ZIP: /^[0-9]{5}(?:-[0-9]{4})?$/,
    URLID: /^[0-9]*$/g,
  }
  /* more constants */
};

module.exports =  CONSTANTS;
