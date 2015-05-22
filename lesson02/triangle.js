
'use strict'

function Triangle(size , translation){
	
	var vertices = [    0.0,  1.0,  0.0,
            		   -1.0, -1.0,  0.0,
                        1.0, -1.0,  0.0  ];
    //TODO dynanically create vertices with size.            	                   	            
	var triangle =  Object.create(Shape , {
	    VertexItemSize : { value : 3},
	    VertexNumItems : { value : 3},
		vertices : {value : vertices },
		translation : { value : translation}
        
	});
	return triangle;
};


