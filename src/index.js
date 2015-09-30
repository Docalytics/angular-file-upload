'use strict';


import CONFIG from './config.json';


import options from './values/options'


import serviceFileUploader from './services/FileUploader';
import serviceFileLikeObject from './services/FileLikeObject';
import serviceFileItem from './services/FileItem';
import serviceFileDirective from './services/FileDirective';
import serviceFileSelect from './services/FileSelect';
import serviceFileDrop from './services/FileDrop';
import serviceFileDropCurtain from './services/FileDropCurtain';
import serviceFileOver from './services/FileOver';


import directiveFileSelect from './directives/FileSelect';
import directiveFileDrop from './directives/FileDrop';
import directiveFileDropCurtain from './directives/FileDropCurtain';
import directiveFileOver from './directives/FileOver';


angular
    .module(CONFIG.name, [])
    .value('fileUploaderOptions', options)
    .factory('FileUploader', serviceFileUploader)
    .factory('FileLikeObject', serviceFileLikeObject)
    .factory('FileItem', serviceFileItem)
    .factory('FileDirective', serviceFileDirective)
    .factory('FileSelect', serviceFileSelect)
    .factory('FileDrop', serviceFileDrop)
    .factory('FileDropCurtain', serviceFileDropCurtain)
    .factory('FileOver', serviceFileOver)
    .directive('nvFileSelect', directiveFileSelect)
    .directive('nvFileDrop', directiveFileDrop)
    .directive('nvFileDropCurtain', directiveFileDropCurtain)
    .directive('nvFileOver', directiveFileOver)
    .run([
        'FileUploader',
        'FileLikeObject',
        'FileItem',
        'FileDirective',
        'FileSelect',
        'FileDrop',
        'FileDropCurtain',
        'FileOver',
        function(FileUploader, FileLikeObject, FileItem, FileDirective, FileSelect, FileDrop, FileDropCurtain, FileOver) {
            // only for compatibility
            FileUploader.FileLikeObject = FileLikeObject;
            FileUploader.FileItem = FileItem;
            FileUploader.FileDirective = FileDirective;
            FileUploader.FileSelect = FileSelect;
            FileUploader.FileDrop = FileDrop;
            FileUploader.FileDropCurtain = FileDropCurtain;
            FileUploader.FileOver = FileOver;
        }
    ]);
