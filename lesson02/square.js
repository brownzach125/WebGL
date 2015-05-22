'use strict'

function Square(size, translation){
	
	var vertices =          [1.0,  1.0,  0.0,
            	            -1.0,  1.0,  0.0,
             	             1.0, -1.0,  0.0,
            	            -1.0, -1.0,  0.0];
    //TODO dynanically create vertices with size.            	                   	            
	var square =  Object.create(Shape , {
	    VertexItemSize : { value : 3},
	    VertexNumItems : { value : 4},
		vertices : {value : vertices },
		translation : { value : translation}
        
	});
	return square;
};


