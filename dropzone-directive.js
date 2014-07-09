var app = angular.module('app', []);
app.directive('dropzone', function() {
    return {
        restrict: 'A',
        template: "<form action={{api}} class='dropzone dragndrop' id='my-awesome-dropzone' enctype='multipart/form-data'></form>"
    }
});

