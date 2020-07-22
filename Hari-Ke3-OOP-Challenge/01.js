const crypto = require('crypto');//pake lib biar cepet hehe

class Hash {

    md5(value) {
        let val = value;
        value = crypto
            .createHash('md5')
            .update(val)
            .digest('hex');
        return value;
    }

    sha1(value) {
        let val = value;
        value = crypto
            .createHash('sha1')
            .update(val)
            .digest('hex');
        return value;
    }

    sha256(value) {
        let val = value;
        value = crypto
            .createHash('sha256')
            .update(val)
            .digest('hex');
        return value;
    }

    sha512(value) {
        let val = value;
        value = crypto
            .createHash('sha512')
            .update(val)
            .digest('hex');
        return value;
    }
}
Hash = new Hash;
console.log(Hash.md5('secret'));
console.log(Hash.sha1('secret'));
console.log(Hash.sha256('secret'));
console.log(Hash.sha512('secret'));
