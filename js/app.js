var vm1 = new Vue({
	el: '#app',
	data:{
		todoInfo:{
			todoTitle: 'Todo Application',
			todoDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio recusandae doloribus a, ipsum deleniti adipisci assumenda, quod alias impedit magnam neque natus, minima reiciendis corporis omnis ullam aperiam quas dignissimos.',
		},
		itemNameText: '',
		itemsNameCarrier: [],
		itemsCapacity: '10'
	},
	methods:{
		itemSubmitted: function(){
			if(this.itemNameText.length > 0 && this.itemsNameCarrier.length < 10){
				this.itemsNameCarrier.push(this.itemNameText)
				this.itemNameText = ''
			}
		},
		completeItem:function (key) {
						
		},
		deleteItem: function(key){
			var testOne = confirm("Are you sure, you want to delete");
			if (testOne == true){
				this.itemsNameCarrier.splice(key, 1);
			}
		}
	},
	computed: {
		// Sort by alphabatical order
		// sortItems: function(){
		// 	return this.itemsNameCarrier.sort()
		// }
	}
	
})