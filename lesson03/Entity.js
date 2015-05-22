
function Entity( translation , rotation, shape){
	this.translation  = translation;
	this.rotation     = rotation;
	this.shape        = shape;
	this.degree       = 0;
	this.rate         = 90;
};


Entity.prototype.animate = function(timeElapsed){
	this.degree += (this.rate * timeElapsed) / 1000.0;
};


Entity.prototype.draw   = function(gl , programShader){
	mvPushMatrix();
    mat4.translate(mvMatrix ,this.translation);
    mat4.rotate(mvMatrix, Utility.degToRad(this.degree), this.rotation);
    this.shape.draw(gl , shaderProgram);
    mvPopMatrix();
};


Entity.prototype.initBuffers = function(gl){
	this.shape.initBuffers(gl);
};


