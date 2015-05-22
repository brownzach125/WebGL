

var Shape = {
	translation    : undefined,
	VertexItemSize : undefined,
	VertexNumItems : undefined,
	VertexPositionBuffer : undefined,
	VertexColorBuffer: undefined,
	vertices : undefined,
	initBuffers : function(gl) {
		this.VertexPositionBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, this.VertexPositionBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.vertices), gl.STATIC_DRAW);
        
        this.VertexColorBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, this.VertexColorBuffer);
        colors = [];
        for (var i=0; i < 4; i++) {
            colors = colors.concat([0.5, 0.5, 1.0, 1.0]);
        }
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);
        this.VertexColorBuffer.itemSize = 4;
        this.VertexColorBuffer.numItems = 4;
	},
	draw : function(gl , shaderProgram){
		mat4.identity(mvMatrix);
		console.log(this.translation);
		mat4.translate(mvMatrix, this.translation);
	    gl.bindBuffer(gl.ARRAY_BUFFER, this.VertexPositionBuffer);
	    gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, this.VertexItemSize, gl.FLOAT, false, 0, 0);
	
	    gl.bindBuffer(gl.ARRAY_BUFFER, this.VertexColorBuffer);
	    gl.vertexAttribPointer(shaderProgram.vertexColorAttribute, this.VertexColorBuffer.itemSize, gl.FLOAT, false, 0, 0);
	
	    setMatrixUniforms();
	    gl.drawArrays(gl.TRIANGLE_STRIP, 0, this.VertexNumItems);
	}
	
};
