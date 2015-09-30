'use strict';


import CONFIG from './../config.json';


export default ($parse, FileUploader, FileDropCurtain) => {


    return {
        link: (scope, element, attributes) => {
            var uploader = scope.$eval(attributes.uploader);

            if (!(uploader instanceof FileUploader)) {
                throw new TypeError('"Uploader" must be an instance of FileUploader');
            }

            if (!uploader.isHTML5) return;

            var object = new FileDropCurtain({
                uploader: uploader,
                element: element
            });

            object.getOverClass = () => attributes.overClass || this.overClass;
        }
    };


}


module.exports.$inject = [
    '$parse',
    'FileUploader',
    'FileDropCurtain'
];