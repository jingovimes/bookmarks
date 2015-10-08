(function(){
	'use strict';
	
	angular
		.module('bookmarks')
		.controller('HomeController', HomeController)
		
	function HomeController(){
		var vm = this;
		vm.test = 'Hello';	
	
		vm.posts = [
			{title: 'post 1', upvotes: 5},
			{title: 'post 2', upvotes: 1},
			{title: 'post 3', upvotes: 4},
			{title: 'post 4', upvotes: 7},
			{title: 'post 5', upvotes: 11},
		]
		
		vm.addPost = function(){
			if(!vm.title || vm.title === ''
				|| !vm.url || vm.url === '')
				{ 
					return; 
			}
			vm.posts.push({title: vm.title, upvotes : 0, url: vm.url});
			//reset scope title back to empty after form submit
			vm.title = '';
			vm.url = '';
		};
		
		vm.incrementUpvotes = function(post){
			post.upvotes += 1;
		};
	}
	
})();