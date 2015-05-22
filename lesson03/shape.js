

var Shape = {
	VertexItemSize : undefined,
	VertexNumItems : undefined,
	VertexPositionBuffer : undefined,
	VertexColorBuffer: undefined,
	colors   : undefined,
	vertices : undefined,
	initBuffers : function(gl) {
		this.VertexPositionBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, this.VertexPositionBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.vertices), gl.STATIC_DRAW);
        
        this.VertexColorBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, this.VertexColorBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.colors), gl.STATIC_DRAW);
        this.VertexColorBuffer.itemSize = 4;
        this.VertexColorBuffer.numItems = 4;
	},
	draw : function(gl , shaderProgram){
	    gl.bindBuffer(gl.ARRAY_BUFFER, this.VertexPositionBuffer);
	    gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, this.VertexItemSize, gl.FLOAT, false, 0, 0);
	
	    gl.bindBuffer(gl.ARRAY_BUFFER, this.VertexColorBuffer);
	    gl.vertexAttribPointer(shaderProgram.vertexColorAttribute, this.VertexColorBuffer.itemSize, gl.FLOAT, false, 0, 0);
	
	    setMatrixUniforms();
	    gl.drawArrays(gl.TRIANGLE_STRIP, 0, this.VertexNumItems);
	}
	
};
