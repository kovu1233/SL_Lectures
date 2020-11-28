/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var alarmClockApp = angular.module('alarmClockApp', ['ngCordova']);
alarmClockApp.controller("alarmClockCtrl",["$scope", "$cordovaMedia","$cordovaFile","$cordovaFileTransfer",function($scope,$cordovaMedia,$cordovaFile,$cordovaFileTransfer){
	
	
	document.addEventListener("deviceready", function () {
		
		var url = "http://taira-komori.jpn.org/sound_os/game01/button02a.mp3";
	    var targetPath = cordova.file.cacheDirectory + "click.mp3";
	    var trustHosts = true;
	    var options = {encodeURI : false};
		
		
	    $cordovaFileTransfer.download(url, targetPath, options, trustHosts)
	      .then(function(entry) {
				$scope.msg = "download complete: " + entry.toURL(); 
				$cordovaFile.checkFile('click.mp3').then(
					function(fileEntry) {
						$scope.fileURL = fileEntry.toInternalURL();
						$scope.msg = 'check File OK : ' + fileEntry.toInternalURL() ;
					},
					function(err) {
						$scope.msg = 'check File erroe : '+err.code;
						// Error
					}
				); 
				$scope.play = function(){
					var src = cordova.file.cacheDirectory + "click.mp3";
					$scope.downloadProgress = typeof($scope.fileURL);
					var media = new Media($scope.fileURL,function() {
						// success
						console.log('load success');
						$scope.msg = 'load success';
						$scope.$apply();
					},function (errorCode) {
						// error
						console.log('load error');
						$scope.msg = 'load mp3 erroe : ' + errorCode.code;
						$scope.$apply();
					});
				     var iOSPlayOptions = {
					    numberOfLoops: 2,
					    playAudioWhenScreenIsLocked : false
					  };
					
					
					media.play();
					
				};
				
	        // Success!
	      }, function(err) {
				$scope.msg = err.code;
				
	        // Error
	      }, function (progress) {
	        $timeout(function () {
	          $scope.downloadProgress = (progress.loaded / progress.total) * 100;
	        })
	      });

	   
		
		
		
	
	}, false);
	 

}]);
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    
    onDeviceReady: function() {
        
    },
    
};
