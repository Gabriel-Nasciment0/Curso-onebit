function PhoneNumber(phoneNumberString) {
    const fixedString = phoneNumberString.replace(/[\sa-zA-Z]/g, "");
    this.countryCode = fixedString.match(/(?<=\+)\d{1,3}/)[0];
    this.ddd = fixedString.match(/(?<=\()\d+(?=\))/)[0];
    this.number = fixedString.match(/(?<=\)).+/)[0].replace(/-/g, "");
}

console.log(new PhoneNumber("+55 (31) 9 9999-9999"));
console.log(new PhoneNumber("+55 (31) a 32dd-999-fdsa "));
