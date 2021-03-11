
class ImageGenerator {

    constructor(width, source) {
        this.width = width;
        this.source = source;
    }

    returnTemplate = () => {
        let src = this.source;
        let w = this.width;
        const template = `<img src="${src}" width="${w}"/>`;
        return template;
    }
}

export {ImageGenerator};
